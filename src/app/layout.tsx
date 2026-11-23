import type { Metadata, Viewport } from "next";
import "@fontsource-variable/pixelify-sans/wght.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import { Desktop } from "@/components/desktop";
import { profile, shareImage } from "@/data/portfolio";
import "./globals.css";

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000")),
  title: { default: `${profile.name} — ${profile.title}`, template: `%s | ${profile.name}` },
  description: profile.summary,
  applicationName: `${profile.name} Portfolio`,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    type: "website",
    locale: "en_IN",
    images: [shareImage],
  },
  twitter: { card: "summary_large_image", images: [shareImage] },
};

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#101112" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Desktop name={profile.name} summary={profile.summary} links={profile.links}>{children}</Desktop>
      </body>
    </html>
  );
}
