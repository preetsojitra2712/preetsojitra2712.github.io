import { SEO } from "@/components/SEO";
import { profile } from "@/data/profile";

export default function Head() {
  return (
    <SEO
      title={`Research — ${profile.name}`}
      description="Research on evaluation methodology, bias analysis, and reproducible ML pipelines."
    />
  );
}
