import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border/60 bg-forest-deep">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-20">
        {eyebrow && (
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
        )}
        <h1 className="font-display text-4xl leading-tight md:text-6xl">{title}</h1>
        <div className="gold-rule mx-auto mt-6 w-40" />
        {lead && <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">{lead}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
