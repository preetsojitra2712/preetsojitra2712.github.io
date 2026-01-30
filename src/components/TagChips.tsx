"use client";

import { cn } from "@/lib/utils";

type TagChipsProps = {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
};

export function TagChips({ tags, active, onChange }: TagChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isActive = active === tag;
        return (
          <button
            key={tag}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(tag)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
              isActive
                ? "border-cyan-400/50 bg-cyan-400/10 text-white"
                : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white",
            )}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
