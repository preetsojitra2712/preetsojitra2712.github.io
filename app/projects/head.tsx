import { SEO } from "@/components/SEO";
import { profile } from "@/data/profile";

export default function Head() {
  return (
    <SEO
      title={`Projects — ${profile.name}`}
      description="Agentic systems, search, reliability, and data streaming projects with measurable impact."
    />
  );
}
