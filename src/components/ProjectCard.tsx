"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  summary: string;
  category: string;
  metrics: string[];
  onOpen: () => void;
};

export function ProjectCard({
  title,
  summary,
  category,
  metrics,
  onOpen,
}: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      className={cn(
        "group flex h-full w-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
        "hover:border-white/20 hover:bg-white/[0.05]",
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
          {category}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">{summary}</p>
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {metrics.slice(0, 2).map((metric) => (
            <span
              key={metric}
              className="rounded-full border border-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60"
            >
              {metric}
            </span>
          ))}
        </div>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/70">
          View details
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </motion.button>
  );
}
