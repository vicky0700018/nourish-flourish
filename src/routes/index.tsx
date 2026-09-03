import { createFileRoute } from "@tanstack/react-router";

import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";
import {
  BusinessVerticalCard,
  FeatureCard,
  StatsCard,
  ProductCard,
  CtaBand,
} from "@/components/cards";
import {
  ShieldIcon,
  HeartIcon,
  SparkIcon,
  BuildingIcon,
  ClockIcon,
  LeafIcon,
  ArrowIcon,
} from "@/components/Icons";
import { company, heroContent, images, productCategories } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mother Baby Food Products | Quality Food, Real Estate & Finance" },
      {
        name: "description",
        content:
          "Mother Baby Food Products (OPC) Private Limited, Ahmednagar — quality-focused food products with business verticals in real estate and finance.",
      },
      {
        property: "og:title",
        content: "Mother Baby Food Products | Quality Food, Real Estate & Finance",
      },
      {
        property: "og:description",
        content:
          "A quality-first food products company from Ahmednagar, Maharashtra, with verticals across food, real estate and finance.",
      },
    ],
  }),
  component: Home,
});

const whyUs = [
  {
    icon: <ShieldIcon className="h-5 w-5" />,
    title: "Quality Focused",
    description:
      "Careful sourcing, hygienic handling and consistent standards guide how we work every day.",
  },
  {
    icon: <HeartIcon className="h-5 w-5" />,
    title: "Customer Trust",
    description: "We build relationships that last longer than any single transaction.",
  },
  {
    icon: <SparkIcon className="h-5 w-5" />,
    title: "Professional Approach",
    description: "Clear communication, documented processes and dependable follow-through.",
  },
  {
    icon: <BuildingIcon className="h-5 w-5" />,
    title: "Diverse Business Vision",
    description: "Food products at the core, with real estate and finance as growth verticals.",
  },
  {
    icon: <ClockIcon className="h-5 w-5" />,
    title: "Reliable Service",
    description: "Responsive coordination and practical support for customers and partners.",
  },
  {
    icon: <LeafIcon className="h-5 w-5" />,
    title: "Long-Term Commitment",
    description: "Sustainable, steady growth over shortcuts — for customers and communities.",
  },
];

const stats = [
  { value: "100%", label: "Quality Focus" },
  { value: "3", label: "Business Verticals" },
  { value: "24/7", label: "Customer Support" },
  { value: "1", label: "Trusted Business Vision" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={images.hero}
          alt="Fresh quality food ingredients and packaged food products"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[oklch(0.32_0.08_155_/_0.92)] via-[oklch(0.32_0.08_155_/_0.75)] to-[oklch(0.32_0.08_155_/_0.35)]" />
        <div className="container-page py-24 lg:py-32">
          <div className="animate-fade-up max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-card/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary-foreground uppercase backdrop-blur">
              Food · Real Estate · Finance
            </span>
            <h1 className="mt-6 text-4xl leading-tight font-semibold text-primary-foreground sm:text-5xl lg:text-6xl">
              {heroContent.heading}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
              {heroContent.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/food-products" variant="accent" size="lg">
                {heroContent.ctaText}
                <ArrowIcon className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink to="/contact" variant="light" size="lg">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              title="Building Trust Through Quality & Commitment"
              description={company.about}
            />
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                "Food products as the primary business focus",
                "Real estate opportunities as a growth vertical",
                "Finance services supporting business needs",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {t}
                </li>
              ))}
            </ul>
            <ButtonLink to="/about" className="mt-8">
              Learn More About Us
              <ArrowIcon className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <img
                src={images.quality}
                alt="Quality-focused food production and handling"
                width={1200}
                height={900}
                loading="lazy"
                className="h-80 w-full object-cover lg:h-[26rem]"
              />
            </div>
            <span className="absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-2xl border-4 border-background bg-accent/25 sm:block" />
          </div>
        </div>
      </section>

      {/* Business verticals */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our business"
            title="Three Verticals, One Standard"
            description="Food products lead the way, supported by a broader vision across property and finance."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BusinessVerticalCard
              index="01"
              title="Food Products"
              image={images.packaged}
              points={[
                "Quality food products",
                "Product sourcing",
                "Food-related business services",
                "Quality-focused operations",
              ]}
              ctaLabel="Explore Food Business"
              to="/food-products"
            />
            <BusinessVerticalCard
              index="02"
              title="Real Estate"
              image={images.realEstate}
              points={[
                "Property opportunities",
                "Real estate development",
                "Investment-oriented projects",
                "Professional property solutions",
              ]}
              ctaLabel="Explore Real Estate"
              to="/real-estate"
            />
            <BusinessVerticalCard
              index="03"
              title="Finance"
              image={images.finance}
              points={[
                "Financial solutions",
                "Business finance",
                "Investment opportunities",
                "Financial planning & support",
              ]}
              ctaLabel="Explore Finance"
              to="/finance"
            />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          eyebrow="Why us"
          title="Why Choose Mother Baby Food Products?"
          description="A practical, professional way of working — built around quality and trust."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface py-14">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StatsCard key={s.label} {...s} />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Demo statistics shown for portfolio presentation purposes.
          </p>
        </div>
      </section>

      {/* Featured categories */}
      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          eyebrow="Food products"
          title="Our Food Product Categories"
          description="Sample categories representing the areas our food business focuses on."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((c) => (
            <ProductCard
              key={c.id}
              name={c.name}
              description={c.description}
              image={c.image}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink to="/food-products" variant="outline">
            View All Food Products
            <ArrowIcon className="h-4 w-4" />
          </ButtonLink>
        </div>
      </section>

      {/* CTA */}
      <div className="pb-20">
        <CtaBand
          title="Let's Build a Better Business Together"
          text="Connect with Mother Baby Food Products (OPC) Private Limited to explore our food products, business services and opportunities across our diverse business verticals."
        >
          <ButtonLink to="/contact" variant="accent" size="lg">
            Contact Us
          </ButtonLink>
          <ButtonLink to="/services" variant="light" size="lg">
            Explore Our Services
          </ButtonLink>
        </CtaBand>
      </div>
    </>
  );
}
