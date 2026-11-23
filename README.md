# Henil Katba Portfolio

A local Next.js portfolio modeled on the public [Nostalgia Computer demo](https://retro-pc.framer.website/). The home screen is a retro desktop, and each section or case study has a shareable URL.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Use the desktop shortcuts, hero links, or taskbar to navigate. On desktop, drag a window by its title bar or use the maximize button. Press Escape to return to the desktop. Sound starts muted.

## Edit the portfolio

- Edit the public biography, skills, experience, education, and contact information in `src/data/portfolio.ts`.
- Edit case studies and technology lists in `src/data/projects.ts`. Each project has a technical overview diagram and a shareable route under `/work`.
- Edit the CRT appearance, breakpoints, and reduced-motion styling in `src/app/globals.css`.

## Verify and deploy

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

GitHub Actions publishes the static export from `main` to [GitHub Pages](https://hkatba.github.io/henil-katba-portfolio/). The workflow sets `GITHUB_PAGES=true` and supplies the public site URL for canonical and social preview metadata.

To deploy, import the source repository into Vercel with the Next.js preset. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin when using a custom domain. The private source notes in `ABOUT_ME.md` are excluded from Git by default. [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)

## Reference differences

The portfolio adapts the public demo’s desktop, CRT treatment, and window navigation to a full-viewport layout. The project visuals are technical diagrams, and the contact window uses LinkedIn and GitHub.
