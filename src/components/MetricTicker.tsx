"use client";

import { useEffect, useState } from "react";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

export function MetricTicker() {
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReduced) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % profile.metrics.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [prefersReduced]);

  const metric = profile.metrics[index];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
        Live metrics
      </p>
      <div className="mt-3 min-h-[48px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg font-semibold text-white">{metric.value}</p>
            <p className="text-xs text-white/60">{metric.label}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {profile.metrics.map((item) => (
          <span
            key={item.label}
            className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white/50"
          >
            {item.value}
          </span>
        ))}
      </div>
    </div>
  );
}
