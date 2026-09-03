export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-px w-6 bg-accent" />
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <img
              src={image}
              alt={title}
              width={1200}
              height={800}
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <span className="absolute -bottom-3 -left-3 hidden h-20 w-20 rounded-2xl border-4 border-background bg-accent/20 sm:block" />
        </div>
      </div>
    </section>
  );
}
