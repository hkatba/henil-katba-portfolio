import {
  ChevronRight,
  CodeXml,
  Container,
  Database,
  FileImage,
  LockKeyhole,
  Network,
  PanelsTopLeft,
  ScanText,
  Search,
  Server,
  Share,
} from "lucide-react";
import Link from "next/link";
import type { projects } from "@/data/projects";

type Project = (typeof projects)[number];

const diagrams = {
  "knovos-discovery": { tone: "blue", icons: [Server, Network, Search] },
  accountlocker: { tone: "plum", icons: [PanelsTopLeft, LockKeyhole, Database] },
  "instagram-post-archiver": { tone: "gold", icons: [FileImage, ScanText, Search] },
  "secure-vault-terminal-api": { tone: "green", icons: [CodeXml, Container, Database] },
  recall: { tone: "red", icons: [Share, Database, Search] },
};

export function ProjectArt({ project }: { project: Project }) {
  const { tone, icons } = diagrams[project.slug];
  return (
    <figure className="project-art" data-tone={tone}>
      <div className="art-board">
        <div className="art-board-label">{project.kind}</div>
        <ol className="art-flow" aria-label="Technical overview">
          {project.flow.map((label, index) => {
            const Icon = icons[index];
            return (
              <li key={label}>
                {index > 0 && <ChevronRight className="flow-connector" aria-hidden="true" size={13} />}
                <div className="flow-node">
                  <Icon aria-hidden="true" strokeLinecap="square" strokeLinejoin="miter" />
                  <span>{label}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </figure>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li>
      <Link className="project-card" href={`/work/${project.slug}`}>
        <ProjectArt project={project} />
        <h2>{"cardTitle" in project ? project.cardTitle : project.title}</h2>
        <p>{project.kind}</p>
      </Link>
    </li>
  );
}
