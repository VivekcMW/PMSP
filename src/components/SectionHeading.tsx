export default function SectionHeading({
  kicker,
  title,
  subtitle,
}: Readonly<{
  kicker: string;
  title: string;
  subtitle?: string;
}>) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
        {kicker}
      </p>
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
