type Project = {
  slug: string;
  title: string;
  cardTitle?: string;
  kind: string;
  status: string;
  summary: string;
  stack: readonly string[];
  flow: readonly [string, string, string];
  notes: readonly { title: string; body: string }[];
};

export const projects = [
  {
    slug: "knovos-discovery",
    title: "Knovos Discovery",
    kind: "Enterprise eDiscovery",
    status: "Professional product work",
    summary: "Service modernization, asynchronous messaging, and search for a legal document review product.",
    stack: ["C#", "ASP.NET Core", "WCF", "RabbitMQ", "SQL Server", "Solr"],
    flow: ["APIs", "Queue", "Search"],
    notes: [
      {
        title: "The problem",
        body: "A document review product needs to give users ways to reach the material they care about within very large collections. From an engineering perspective, the service layer, database, and search index each have different responsibilities. I contributed changes in all three areas while working on features and fixes in the product.",
      },
      {
        title: "What I worked on",
        body: "I helped migrate WCF services to ASP.NET Core Web APIs and worked with RabbitMQ producers and consumers for asynchronous messaging. I also contributed to Solr indexing and query changes and to database work in SQL Server. My responsibilities included taking requirements into development, addressing defects, participating in deployment, and collaborating with QA and product colleagues.",
      },
      {
        title: "Engineering focus",
        body: "The migration work called for attention to the behavior callers already depended on. Messaging created a separate handoff to reason about, and the search work required thinking about both what goes into an index and how a query retrieves it. The combination taught me to trace a result through the layers that shape it, especially when a behavior involves data being processed before it is ready to appear in search. The distinction between source data and searchable data matters here. A useful investigation can start with a document, follow how it would become discoverable, and then look at whether the query is asking for the same thing the reviewer expects to see.",
      },
    ],
  },
  {
    slug: "accountlocker",
    title: "AccountLocker",
    kind: "Full-stack application",
    status: "Application and API features implemented",
    summary: "A personal credential organizer with an Angular frontend and a .NET 8 Web API.",
    stack: ["Angular 19", "TypeScript", ".NET 8", "ASP.NET Core", "EF Core", "PostgreSQL"],
    flow: ["Angular app", ".NET API", "Database"],
    notes: [
      {
        title: "The problem",
        body: "AccountLocker is a personal project for organizing credentials across accounts. Once there are more than a few records, the interface needs practical ways to find one, group related entries, keep frequent ones visible, and archive entries that still need to be retained. Those actions became part of the application alongside the basic record workflow.",
      },
      {
        title: "What I built",
        body: "I implemented application and API features using Angular 19, an ASP.NET Core Web API on .NET 8, and EF Core. The work covered user-linked records, JWT authentication, credential encryption, DTOs, search, categories, favorites, and archiving. I also worked on integrating the frontend with the API and adapting the data layer from SQL Server to PostgreSQL.",
      },
      {
        title: "Engineering focus",
        body: "Some of the most informative work happened where the layers met. I worked through serialization issues involving what the API sent to the Angular client and hosting issues involving how a deployed single-page application loads. The database adaptation made another boundary visible. The connection settings, migrations, and assumptions in the application all needed attention when the underlying database changed. A DTO gives the client a deliberate shape to work with, which is particularly important when the underlying record contains fields intended for different parts of the app. The project made those data boundaries part of everyday frontend and backend integration.",
      },
    ],
  },
  {
    slug: "instagram-post-archiver",
    title: "Instagram Post Archiver",
    kind: "Image processing & retrieval",
    status: "Ingestion and OCR features implemented",
    summary: "An image-post archive that makes captions and text inside images searchable.",
    stack: ["Angular", "Node.js", "Express", "MongoDB", "Mongoose", "Tesseract.js"],
    flow: ["Image post", "OCR", "Text search"],
    notes: [
      {
        title: "The problem",
        body: "Saving an image post is quick. Finding it later can be harder when the words you remember are printed inside the image or buried in a long caption. I explored how to turn those parts of a post into fields an archive could search while keeping the original images available to browse.",
      },
      {
        title: "What I built",
        body: "I implemented and debugged URL intake, image access, OCR, and display behavior using Angular, Node.js, Express, MongoDB, and Mongoose. The workflow covered multiple images per post, running Tesseract.js on individual images, cleaning up captions, showing posts in a gallery, and searching the available text.",
      },
      {
        title: "Engineering focus",
        body: "A post can contain several images and several kinds of useful text. Treating the caption and per-image OCR output as distinct parts of the stored record gave the archive more material to search. Working through image access and display behavior also made it clear how much the result depends on the quality and availability of the material at intake. A useful gallery needs to stay understandable when the upstream input varies. Per-image processing also preserves a meaningful association between the text and the image it came from. That is useful when the same post mixes a caption, a cover image, and multiple slides whose words might prompt different searches.",
      },
    ],
  },
  {
    slug: "secure-vault-terminal-api",
    title: "SecureVaultTerminalAPI",
    cardTitle: "Secure Vault API",
    kind: "Container deployment",
    status: "Packaging and deployment troubleshooting",
    summary: "A .NET 8 API packaging project covering Docker, database configuration, and migrations.",
    stack: [".NET 8", "ASP.NET Core", "Docker", "PostgreSQL", "Render"],
    flow: ["Build", "Container", "Database"],
    notes: [
      {
        title: "The problem",
        body: "A service that runs on a development machine still needs a repeatable way to build and start somewhere else. I worked on packaging this ASP.NET Core API in Docker and investigating the differences between a local setup and deployment on Render.",
      },
      {
        title: "What I worked on",
        body: "I used a multistage Docker build and worked through Swagger routing, PostgreSQL connection settings, and migrations. This meant checking the service at several points, from the artifacts copied into the runtime image to the environment settings the application could actually read when it started.",
      },
      {
        title: "Engineering focus",
        body: "The work was a practical exercise in separating the steps that build an application from the settings it needs at runtime. An API that starts and an API that can reach a database are two different checks. Swagger offered another way to see which part of the deployed service was reachable and to narrow down where an issue might be. Troubleshooting those steps individually made it easier to ask precise questions about an unsuccessful deployment. Building the image, launching the process, routing an HTTP request, and reaching the configured database each give a different piece of evidence about what is working.",
      },
    ],
  },
  {
    slug: "recall",
    title: "Recall",
    kind: "Local-first product concept",
    status: "Planned app with tooling validation",
    summary: "An iOS-first concept for saving and finding personal notes, links, and developer references.",
    stack: ["SwiftUI (planned)", "Share Extension", "SQLite"],
    flow: ["Share sheet", "Local storage", "Offline search"],
    notes: [
      {
        title: "The problem",
        body: "Useful links, notes, and developer references accumulate in different apps. When I return to something I saved, I may remember what it was about without remembering where I saved it. Recall is an iOS-first product concept built around making those items easier to save and retrieve.",
      },
      {
        title: "The design",
        body: "I defined the project scope around the iOS share sheet, local SQLite storage, offline search, and collections. SwiftUI is the planned interface. Semantic retrieval, AI enrichment, and web access are part of the longer-term plan. There is a useful complete flow in the core idea: share an item from another app, keep a local record, and find it again when needed.",
      },
      {
        title: "Tooling validation",
        body: "I validated parts of the development workflow, including signing, installing on a device, testing offline search, and transferring data from a share extension. The full app is still planned. The tooling work helped establish that the capture-to-retrieval path could be investigated on a device before committing to a larger build. Testing the share entry point early was worthwhile because it changes where the user begins. The first action happens in another app, so the transfer and the local record have to make sense before collections or more advanced search can add anything useful.",
      },
    ],
  },
] as const satisfies readonly Project[];

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
