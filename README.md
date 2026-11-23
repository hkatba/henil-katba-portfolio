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

To deploy, import the source repository into Vercel with the Next.js preset. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin when using a custom domain. The private source notes in `ABOUT_ME.md` are excluded from Git by default. [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)

## Reference differences

The portfolio adapts the public demo’s desktop, CRT treatment, and window navigation to Henil’s sections. The desktop opens ready to use and can be powered off and back on. The monitor scene is original, and the project visuals are technical diagrams. The contact window uses LinkedIn and GitHub. An approved public email, downloadable CV, project screenshots, and project demo links can be added when available.

The monitor scene was generated with built-in ImageGen and optimized to `public/images/monitor.webp`.

<details>
<summary>Monitor image prompt</summary>

Generate an original photorealistic editorial photograph for a website background, a late-1990s home office with an unbranded warm ivory CRT monitor. Landscape 3:2. Camera EXACTLY centered on monitor face, perfectly straight-on both axes with level horizontal edges, no rotation or perspective skew. Monitor casing centered x=50%, occupies approximately x=20–80%, y=15–86%. The blank dark blue-black curved glass face, with corner rounding only, occupies approximately x=24–76%, y=20–74%; face has classic 4:3 proportions. Nearly black neutral glass, unlit, with only a very faint window-pane reflection far right, empty flat dark glass at center and left where a website UI will be composited. Chunky beige plastic bezel, shaded rim and a small LED and power button on lower-right lip. Monitor stand and wood surface at bottom, vintage computer tower partially cropped at right, out-of-focus pencil holder and lamp at left, cream painted wall and blurred framed print in background. Late-afternoon window light and diagonal blind shadows grazing upper right edge of beige housing. Realistic vintage materials, visibly photographic, matte warm colors, gentle grain, distinctly lived-in. A single monitor. Absolutely no text, logos, any graphics or interface on the blank screen, watermarks or legible print.

</details>
