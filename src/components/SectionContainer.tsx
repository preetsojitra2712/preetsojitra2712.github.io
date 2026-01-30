import { cn } from "@/lib/utils";

type SectionContainerProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionContainer({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                {description}
              </p>
            ) : null}
          </div>
          <div className="col-span-12 lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
