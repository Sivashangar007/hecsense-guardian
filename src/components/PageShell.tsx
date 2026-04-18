import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
      <div className="max-w-3xl animate-fade-up">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brown mb-3">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-display font-semibold text-balance">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 text-lg text-muted-foreground text-balance">{intro}</p>
        )}
      </div>
      <div className="mt-12">{children}</div>
    </div>
  );
}
