import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard, CtaBand } from "@/components/cards";
import { ButtonLink } from "@/components/ui/Button";
import { iconMap, ShieldIcon } from "@/components/Icons";
import { financeServices, images } from "@/data/site";

export const Route = createFileRoute("/finance")({
  head: () => ({
    meta: [
      { title: "Finance | Mother Baby Food Products (OPC) Pvt Ltd" },
      {
        name: "description",
        content:
          "Our finance vertical — business finance, financial planning, capital solutions and business advisory. General informational demo content only.",
      },
      { property: "og:title", content: "Smart Financial Solutions" },
      {
        property: "og:description",
        content:
          "Business finance, planning, capital solutions and advisory support from Mother Baby Food Products (OPC) Private Limited.",
      },
    ],
  }),
  component: Finance,
});

function Finance() {
  return (
    <>
      <PageHero
        eyebrow="Business vertical"
        title="Smart Financial Solutions"
        description="Our finance vertical supports business conversations around planning, capital and advisory. All content here is general and informational — no regulated advice, licences or guaranteed returns are offered."
        image={images.finance}
      />

      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          eyebrow="What we offer"
          title="Finance Services"
          description="Demo service cards outlining the areas our finance vertical focuses on."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {financeServices.map((s) => {
            const Icon = iconMap[s.icon] ?? ShieldIcon;
            return (
              <FeatureCard
                key={s.id}
                icon={<Icon className="h-5 w-5" />}
                title={s.name}
                description={s.description}
              />
            );
          })}
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="container-page">
          <div className="card-soft mx-auto max-w-3xl p-7 text-center">
            <h2 className="text-lg font-semibold text-foreground">Important note</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This is a demo portfolio website. Nothing on this page constitutes financial,
              investment or regulated advice, and no returns of any kind are promised.
            </p>
          </div>
        </div>
      </section>

      <div className="py-20">
        <CtaBand
          title="Talk to Our Team"
          text="Have a business finance question? Get in touch and we'll arrange a conversation."
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
