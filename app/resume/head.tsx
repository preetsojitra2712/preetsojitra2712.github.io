import { SEO } from "@/components/SEO";
import { profile } from "@/data/profile";

export default function Head() {
  return (
    <SEO
      title={`Resume — ${profile.name}`}
      description="Education, skills, and downloadable resume."
    />
  );
}
