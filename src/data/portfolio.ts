export const profile = {
  name: "Henil Katba",
  title: "Software engineer",
  summary: "Software engineer in India. I build .NET APIs, modernize enterprise applications, and make information easier to find.",
  links: {
    github: "https://github.com/hkatba",
    linkedin: "https://www.linkedin.com/in/henil-katba",
  },
  about: [
    "I’m Henil Katba, a software engineer in India. I got my start in eDiscovery, where legal reviewers rely on software to find and work through large collections of documents. My work has taken me from understanding how a feature should behave through implementing it, changing the database where needed, deploying the change, and following up with QA.",
    "At Knovos, I contributed to migrating WCF services to ASP.NET Core Web APIs. I also worked on RabbitMQ producers and consumers and on Solr indexing and queries. Each part of that work raises a different question. An API defines what a caller can ask for. A message lets part of that work happen asynchronously. An index determines what someone can actually find. Seeing those pieces together helped shape what I look for in a design.",
    "Outside enterprise work, I build tools for organizing information I already have. AccountLocker explored how to store and retrieve account records. An Instagram post archiver used OCR to make text inside images searchable. A separate iOS concept, Recall, starts with the moment someone saves a link or note and follows it through to finding that item again.",
    "I want to keep working with .NET while building more of the frontend in Angular and React. I’m particularly interested in applications where backend choices have a visible effect on the interface, such as which fields a grid can filter, whether a search result is understandable, or what happens when information arrives a little later than the rest of the page.",
    "I’m also interested in what can work locally. A small utility for notes or references raises questions about which records belong on the device and which parts of the experience need a connection. Those questions come up in different forms in desktop utilities, self-hosted software, and the iOS concept. They give me a reason to explore beyond my day-to-day stack while staying close to the problem that interests me most: keeping useful material easy to retrieve.",
  ],
  contact: [
    "I’m interested in work that combines API design with a clear idea of how people use the interface. Enterprise modernization, search, and data-intensive applications are especially close to the work I’ve enjoyed so far.",
    "LinkedIn is the place to reach me about a role or collaboration. If you’re getting in touch about a technical project, tell me what it helps people do and where the engineering challenge is. GitHub is available for exploring the public work associated with my profile.",
  ],
  educationIntro: "I studied computer engineering at Marwadi University in Rajkot. During my final year, I joined Knovos as an intern and moved into a junior software engineering role shortly before completing my computer engineering degree in June 2023.",
} as const;

export const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${profile.name}, ${profile.title.toLowerCase()}`,
};

export const sections = [
  { id: "work", title: "Work", description: "Selected software engineering projects and technical case studies." },
  { id: "about", title: "About me", description: "Henil Katba’s background and interests in APIs, search, and information tools." },
  { id: "skills", title: "Skills", description: "Technologies used across frontend, APIs, messaging, search, data, and deployment." },
  { id: "experience", title: "Experience", description: "Software engineering and internship experience in enterprise eDiscovery." },
  { id: "contact", title: "Contact", description: "Find Henil Katba on LinkedIn and GitHub." },
  { id: "education", title: "Education", description: "Henil Katba’s education in computer engineering." },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const skills = [
  {
    title: "APIs & backend",
    technologies: ["C#", ".NET 8", "ASP.NET Core", "WCF", "EF Core", "Node.js", "Express"],
    description: "I’ve worked with REST APIs, dependency injection, DTOs, and repository and service layers. My .NET work ranges from migrating WCF services to building the API used by an Angular application. I used Express for the image ingestion and OCR project.",
  },
  {
    title: "Frontend",
    technologies: ["TypeScript", "JavaScript", "Angular", "Angular Material", "React", "ExtJS", "HTML", "CSS"],
    description: "I’ve used Angular for personal applications and ExtJS Classic for enterprise grids, trees, and tabs. My résumé also records work integrating React components with .NET APIs. I’m interested in interfaces that help people filter, inspect, and work through a large set of records.",
  },
  {
    title: "Messaging & search",
    technologies: ["RabbitMQ", "Solr", "Tesseract.js"],
    description: "I’ve worked on RabbitMQ producers and consumers, Solr indexing and queries, and an OCR pipeline in a personal archiver. These are three ways of separating how input arrives from how a user eventually works with it. I’m interested in the stages between intake and retrieval, where processing determines what a later search can uncover.",
  },
  {
    title: "Databases",
    technologies: ["SQL", "SQL Server", "PostgreSQL", "MongoDB", "Mongoose"],
    description: "My SQL Server work covered schema design, stored procedures, query optimization, and indexing. I worked on adapting a personal app from SQL Server to PostgreSQL and used MongoDB with Mongoose to store an archive of image posts and their text.",
  },
  {
    title: "Deployment & tools",
    technologies: ["Docker", "Git", "GitHub", "Visual Studio", "VS Code", "Swagger", "Postman"],
    description: "I’ve worked on deployments and server management, and used multistage Docker builds, environment-based settings, and EF Core migrations in personal projects. I use Swagger and Postman to inspect and test API behavior during development.",
  },
] as const;

export const experience = [
  {
    title: "Junior Software Engineer",
    organization: "Knovos India Pvt. Ltd.",
    period: "Joined May 2023",
    paragraphs: [
      "I contributed to Knovos Discovery, an eDiscovery product used for legal document review and retrieval. My responsibilities included requirements analysis, application and database development, deployment, server management, and bug fixes. I worked with product and QA colleagues to connect requirements to testable behavior and follow changes through delivery.",
      "My work covered parts of a WCF-to-ASP.NET Core migration, messaging with RabbitMQ, and Solr indexing and query changes. I also worked with SQL Server on stored procedures, indexing, and query performance. Working across those areas gave me practice following a feature from its interface to the data, services, and search behavior behind it.",
      "I worked in an Agile team, where a reported issue or a feature request could lead to work at several layers. The same change might need a database adjustment, an API change, and a conversation with QA about how a reviewer would see it. The variety was an important part of my experience on the product.",
    ],
  },
  {
    title: "Software Engineer Intern",
    organization: "Knovos India Pvt. Ltd.",
    period: "January–April 2023",
    paragraphs: [
      "I contributed features and fixes to the review module using ExtJS, .NET APIs, and SQL Server. That work introduced me to applications where document state, access, and retrieval matter together. I worked on interface behavior as well as the API and database changes that supported it.",
      "During the internship I developed a review-module demo centered on organizing and sharing files. It supported uploads, viewing, and role permissions. Creating the demo let me work through a complete document flow, from the initial upload to what another user could view based on their role.",
    ],
  },
] as const;

export const education = [
  {
    institution: "Marwadi University, Rajkot",
    program: "B.Tech. in Computer Engineering",
    period: "June 2019–June 2023",
    detail: "CGPA 8.25",
  },
  {
    institution: "Creative Science School, Rajkot",
    program: "HSC Science",
    period: "May 2017–March 2019",
  },
  {
    institution: "Sarvodaya Education Network, Rajkot",
    program: "SSC",
    period: "May 2016–March 2017",
  },
] as const;
