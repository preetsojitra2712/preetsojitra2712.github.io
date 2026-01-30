import Link from "next/link";
import { writingPosts } from "@/data/writing";

export function WritingGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {writingPosts.map((post) => (
        <div
          key={post.slug}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            {post.date}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-white">
            {post.title}
          </h3>
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
          <Link
            href="/writing"
            className="mt-4 inline-flex text-sm text-cyan-200/80 transition hover:text-cyan-200"
          >
            Notes coming soon →
          </Link>
        </div>
      ))}
    </div>
  );
}
