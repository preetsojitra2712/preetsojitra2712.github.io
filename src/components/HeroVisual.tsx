"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/Card";

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div
        className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl"
        animate={
          prefersReducedMotion ? { opacity: 0.7 } : { x: [0, -20, 0], y: [0, 20, 0] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl"
        animate={
          prefersReducedMotion ? { opacity: 0.6 } : { x: [0, 16, 0], y: [0, -12, 0] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative" aria-hidden="true" />
    </Card>
  );
}
