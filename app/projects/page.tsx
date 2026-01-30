import Link from "next/link";
import { profile } from "@/data/profile";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Projects
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Projects in systems, ML, and data
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Focused on practical problem solving, measurable results, and
            production-ready implementation.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Focus areas
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {Array.from(new Set(profile.projects.map((p) => p.category))).map(
              (category) => (
                <span
                  key={category}
                  className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60"
                >
                  {category}
                </span>
              ),
            )}
          </div>
          <p className="mt-4 text-sm text-white/60">
            Want a quick overview? Return to{" "}
            <Link
              href="/"
              className="text-cyan-200/80 transition hover:text-cyan-200"
            >
              the main page
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="mt-10">
        <ProjectsGrid />
      </div>
    </main>
  );
}
