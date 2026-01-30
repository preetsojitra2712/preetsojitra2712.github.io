import Link from "next/link";
import { Timeline } from "@/components/Timeline";
import { Section } from "@/components/Section";

export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Work
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Early career experience
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Roles across open source, research, and product engineering with
            clear outcomes.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Quick navigation
          </p>
          <p className="mt-3 text-sm text-white/60">
            Return to{" "}
            <Link
              href="/"
              className="text-cyan-200/80 transition hover:text-cyan-200"
            >
              the home page
            </Link>{" "}
            for a full overview.
          </p>
        </div>
      </div>
      <Section
        title="Experience timeline"
        description="What I worked on, the problems addressed, and the outcomes."
      >
        <Timeline />
      </Section>
    </main>
  );
}
