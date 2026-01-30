import Link from "next/link";
import { profile } from "@/data/profile";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { Card } from "@/components/Card";

export default function ResearchPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Research
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Method-driven ML evaluation
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Focused on evaluation methodology, bias analysis, and reproducible
            pipelines.
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
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Themes
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.research.themes.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60"
              >
                {theme}
              </span>
            ))}
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
            {profile.research.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </Card>
        <PipelineDiagram />
      </div>
    </main>
  );
}
