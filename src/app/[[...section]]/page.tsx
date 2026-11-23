import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy, PortfolioSection } from "@/components/portfolio-sections";
import { PortfolioWindow } from "@/components/portfolio-window";
import { profile, sections, shareImage } from "@/data/portfolio";
import { findProject, projects } from "@/data/projects";

type PageProps = { params: Promise<{ section?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { section: [] },
    ...sections.map(({ id }) => ({ section: [id] })),
    ...projects.map(({ slug }) => ({ section: ["work", slug] })),
  ];
}

function resolvePage(path: string[]) {
  if (path.length === 0) return null;
  const section = sections.find(({ id }) => id === path[0]);
  if (section && path.length === 1) return { section };
  if (section?.id === "work" && path.length === 2) {
    const project = findProject(path[1]);
    if (project) return { section, project };
  }
  notFound();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const path = (await params).section ?? [];
  const page = resolvePage(path);
  if (!page) return { alternates: { canonical: "/" } };

  const title = page.project?.title ?? page.section.title;
  const description = page.project?.summary ?? page.section.description;
  const url = `/${path.join("/")}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${profile.name}`,
      description,
      url,
      type: "website",
      locale: "en_IN",
      images: [shareImage],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const path = (await params).section ?? [];
  const page = resolvePage(path);
  if (!page) return null;

  if (page.project) {
    return (
      <PortfolioWindow
        key={path.join("/")}
        title={page.project.title}
        parent={{ href: "/work", label: "Work" }}
        status={page.project.kind}
      >
        <CaseStudy project={page.project} />
      </PortfolioWindow>
    );
  }

  return (
    <PortfolioWindow
      key={page.section.id}
      title={page.section.title}
      status={page.section.id === "work" ? `${projects.length} projects` : profile.name}
    >
      <PortfolioSection id={page.section.id} />
    </PortfolioWindow>
  );
}
