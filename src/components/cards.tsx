import type { ReactNode } from "react";
import { ButtonLink, Button } from "./ui/Button";
import { ArrowIcon } from "./Icons";

export function BusinessVerticalCard({
  index,
  title,
  points,
  image,
  ctaLabel,
  to,
}: {
  index: string;
  title: string;
  points: string[];
  image: string;
  ctaLabel: string;
  to: "/food-products" | "/real-estate" | "/finance";
}) {
  return (
    <article className="card-soft group flex flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          width={1200}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-card/90 px-3 py-1 font-display text-xs font-semibold tracking-widest text-primary">
          {index}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
          {points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              {p}
            </li>
          ))}
        </ul>
        <ButtonLink to={to} variant="outline" size="sm" className="mt-6 self-start">
          {ctaLabel}
          <ArrowIcon className="h-4 w-4" />
        </ButtonLink>
      </div>
    </article>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="card-soft p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}

export function StatsCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card px-5 py-7 text-center shadow-soft">
      <p className="font-display text-4xl font-semibold text-primary">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function ProductCard({
  name,
  description,
  image,
  onView,
}: {
  name: string;
  description: string;
  image: string;
  onView?: () => void;
}) {
  return (
    <article className="card-soft group flex flex-col overflow-hidden">
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          width={900}
          height={700}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        {onView ? (
          <Button variant="ghost" size="sm" className="mt-4 self-start px-0" onClick={onView}>
            View Details
            <ArrowIcon className="h-4 w-4" />
          </Button>
        ) : null}
      </div>
    </article>
  );
}

export function ProjectCard({
  name,
  type,
  location,
  description,
  image,
  onView,
}: {
  name: string;
  type: string;
  location: string;
  description: string;
  image: string;
  onView?: () => void;
}) {
  return (
    <article className="card-soft group flex flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          width={1200}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold tracking-wide text-accent-foreground uppercase">
          Sample project
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full bg-primary-soft px-2.5 py-1 font-medium text-primary">
            {type}
          </span>
          <span>{location}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-foreground">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        {onView ? (
          <Button variant="ghost" size="sm" className="mt-4 self-start px-0" onClick={onView}>
            View Details
            <ArrowIcon className="h-4 w-4" />
          </Button>
        ) : null}
      </div>
    </article>
  );
}

export function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="card-soft flex gap-4 p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-foreground">
        {icon}
      </span>
      <div>
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}

export function CtaBand({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <section className="container-page">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12">
        <span className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-secondary/25" />
        <span className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent/15" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
            {text}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
        </div>
      </div>
    </section>
  );
}
