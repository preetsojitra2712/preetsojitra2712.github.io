import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
