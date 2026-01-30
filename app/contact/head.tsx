import { SEO } from "@/components/SEO";
import { profile } from "@/data/profile";

export default function Head() {
  return (
    <SEO
      title={`Contact — ${profile.name}`}
      description="Reach out for early career software engineering or ML engineering roles."
    />
  );
}
