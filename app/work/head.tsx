import { SEO } from "@/components/SEO";
import { profile } from "@/data/profile";

export default function Head() {
  return (
    <SEO
      title={`Work — ${profile.name}`}
      description="Early career experience across research, open source, and product engineering."
    />
  );
}
