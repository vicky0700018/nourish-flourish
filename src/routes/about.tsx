import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard, CtaBand } from "@/components/cards";
import { ButtonLink } from "@/components/ui/Button";
import {
  ShieldIcon,
  HeartIcon,
  SparkIcon,
  LeafIcon,
  GrowthIcon,
  CompassIcon,
} from "@/components/Icons";
import { company, images } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Mother Baby Food Products (OPC) Pvt Ltd" },
      {
        name: "description",
        content:
          "Learn about Mother Baby Food Products (OPC) Private Limited — our vision, mission and core values across food products, real estate and finance.",
      },
      { property: "og:title", content: "About Mother Baby Food Products" },
      {
        property: "og:description",
        content:
          "Our vision, mission and core values as a quality-focused food products company based in Ahmednagar, Maharashtra.",
      },
    ],
  }),
  component: About,
});

const values = [
  { icon: <ShieldIcon className="h-5 w-5" />, title: "Quality", description: "Consistent standards in sourcing, handling and presentation." },
  { icon: <CompassIcon className="h-5 w-5" />, title: "Integrity", description: "Straightforward dealings and honest communication." },
  { icon: <HeartIcon className="h-5 w-5" />, title: "Trust", description: "Relationships built patiently and maintained carefully." },
  { icon: <SparkIcon className="h-5 w-5" />, title: "Innovation", description: "Practical improvements to how we work and serve." },
  { icon: <LeafIcon className="h-5 w-5" />, title: "Customer Focus", description: "Decisions guided by what genuinely helps our customers." },
  { icon: <GrowthIcon className="h-5 w-5" />, title: "Growth", description: "Steady, sustainable expansion across our verticals." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Quality-First Company Rooted in Ahmednagar"
        description={company.about}
        image={images.quality}
      />

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="card-soft p-7 lg:col-span-1">
            <h2 className="text-xl font-semibold text-foreground">Company Details</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Company Name</dt>
                <dd className="font-medium text-foreground">{company.name}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Client / Promoter</dt>
                <dd className="font-medium text-foreground">{company.promoter}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Registered Address</dt>
                <dd className="font-medium text-foreground">{company.address}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Phone</dt>
                <dd className="font-medium text-foreground">{company.phone}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="font-medium break-all text-foreground">{company.email}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="card-soft p-7">
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" />
                Our Vision
              </span>
              <p className="mt-4 leading-relaxed text-muted-foreground">{company.vision}</p>
            </div>
            <div className="card-soft p-7">
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" />
                Our Mission
              </span>
              <p className="mt-4 leading-relaxed text-muted-foreground">{company.mission}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What guides us"
            title="Our Core Values"
            description="Six principles that shape how the company operates across every vertical."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <FeatureCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      <div className="py-20">
        <CtaBand
          title="Work With a Team That Values Quality"
          text="Reach out to discuss our food products or opportunities across our real estate and finance verticals."
        >
          <ButtonLink to="/contact" variant="accent" size="lg">
            Contact Us
          </ButtonLink>
          <ButtonLink to="/food-products" variant="light" size="lg">
            Explore Food Products
          </ButtonLink>
        </CtaBand>
      </div>
    </>
  );
}
