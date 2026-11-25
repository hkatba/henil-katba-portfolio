import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

const config: NextConfig = {
  agentRules: false,
  devIndicators: false,
  ...(githubPages && {
    output: "export",
    trailingSlash: true,
  }),
};

export default config;
