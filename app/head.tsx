import { SEO } from "@/components/SEO";
import { profile } from "@/data/profile";

export default function Head() {
  return (
    <SEO
      title={`${profile.name} — AI & Data Systems Engineer`}
      description={profile.subheading}
    />
  );
}
