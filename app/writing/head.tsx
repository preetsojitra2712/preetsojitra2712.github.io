import { SEO } from "@/components/SEO";
import { profile } from "@/data/profile";

export default function Head() {
  return (
    <SEO
      title={`Writing — ${profile.name}`}
      description="Writing on LLM guardrails, evaluation, hybrid search, and reliable systems."
    />
  );
}
