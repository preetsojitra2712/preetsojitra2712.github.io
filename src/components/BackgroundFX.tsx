"use client";

import { useEffect, useRef } from "react";

export function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.fillStyle = "rgba(255,255,255,0.04)";
      for (let i = 0; i < 300; i += 1) {
        const x = Math.random() * innerWidth;
        const y = Math.random() * innerHeight;
        const size = Math.random() * 1.5;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_rgba(5,8,20,0.9))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(15,23,42,0.1),_rgba(3,7,18,0.9))]" />
      <div className="absolute inset-0 opacity-40 mix-blend-screen [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />
    </div>
  );
}
