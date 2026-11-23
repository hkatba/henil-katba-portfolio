import { ArrowUpRight, FileCode2, MessageSquareText } from "lucide-react";
import { education, experience, profile, skills, type SectionId } from "@/data/portfolio";
import { projects } from "@/data/projects";
import { ProjectArt, ProjectCard } from "./project-card";

function Tags({ items }: { items: readonly string[] }) {
  return <ul className="tags" aria-label="Technologies">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function Work() {
  return <ul className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</ul>;
}

export function CaseStudy({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="section-copy case-study">
      <ProjectArt project={project} />
      <p className="section-lead">{project.summary}</p>
      <div className="case-meta">
        <p>{project.status}</p>
        <Tags items={project.stack} />
      </div>
      {project.notes.map(({ title, body }) => (
        <section key={title}>
          <h2>{title}</h2>
          <p>{body}</p>
        </section>
      ))}
    </article>
  );
}

function About() {
  return (
    <article className="section-copy">
      <h2>Building APIs and tools for finding information</h2>
      {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </article>
  );
}

function Skills() {
  return (
    <div className="section-copy skill-list">
      {skills.map(({ title, technologies, description }) => (
        <section key={title}>
          <h2>{title}</h2>
          <Tags items={technologies} />
          <p>{description}</p>
        </section>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <ol className="section-copy timeline">
      {experience.map(({ title, organization, period, paragraphs }) => (
        <li key={title}>
          <p className="entry-period">{period}</p>
          <h2>{title}</h2>
          <p className="entry-organization">{organization}</p>
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </li>
      ))}
    </ol>
  );
}

function Education() {
  return (
    <div className="section-copy">
      <p className="mb-5">{profile.educationIntro}</p>
      <ol className="timeline">
        {education.map((entry) => (
          <li key={entry.program}>
            <p className="entry-period">{entry.period}</p>
            <h2>{entry.program}</h2>
            <p className="entry-organization">{entry.institution}</p>
            {"detail" in entry && <p>{entry.detail}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}

function Contact() {
  return (
    <article className="section-copy">
      <h2>Let’s talk about what you’re building</h2>
      {profile.contact.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <ul className="contact-links">
        <li><a href={profile.links.linkedin}><MessageSquareText aria-hidden="true" /> Message me on LinkedIn <ArrowUpRight aria-hidden="true" /></a></li>
        <li><a href={profile.links.github}><FileCode2 aria-hidden="true" /> View my GitHub profile <ArrowUpRight aria-hidden="true" /></a></li>
      </ul>
    </article>
  );
}

const content = {
  work: Work,
  about: About,
  skills: Skills,
  experience: Experience,
  contact: Contact,
  education: Education,
};

export function PortfolioSection({ id }: { id: SectionId }) {
  const Section = content[id];
  return <Section />;
}
