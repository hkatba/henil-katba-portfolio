import Link from "next/link";
import { PortfolioWindow } from "@/components/portfolio-window";
import { profile } from "@/data/portfolio";

export default function NotFound() {
  return (
    <PortfolioWindow title="Page not found" status="404">
      <div className="section-copy">
        <h2>This page could not be found.</h2>
        <p>Return to {profile.name}’s <Link className="text-link" href="/">desktop</Link> or browse <Link className="text-link" href="/work">selected work</Link>.</p>
      </div>
    </PortfolioWindow>
  );
}
