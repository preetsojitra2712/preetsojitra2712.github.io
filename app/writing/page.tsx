import Link from "next/link";
import { writingPosts } from "@/data/writing";

export default function WritingPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Writing
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Notes on AI systems and engineering work
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Short write-ups on LLM guardrails, multimodal evaluation, hybrid
            search, and reliable infrastructure.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Topics
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {Array.from(
              new Set(writingPosts.flatMap((post) => post.tags)),
            ).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/60">
            Back to{" "}
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
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {writingPosts.map((post) => (
          <div
            key={post.slug}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
              {post.date}
            </p>
            <h2 className="mt-3 text-lg font-semibold text-white">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-white/65">{post.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/40">Draft in progress</p>
          </div>
        ))}
      </div>
    </main>
  );
}
