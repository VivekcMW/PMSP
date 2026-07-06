export default function PageHeader({
  kicker,
  title,
  dek,
}: Readonly<{
  kicker: string;
  title: string;
  dek?: string;
}>) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {kicker}
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {dek && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {dek}
          </p>
        )}
      </div>
    </div>
  );
}
