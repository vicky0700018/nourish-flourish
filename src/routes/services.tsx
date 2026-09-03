import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard, CtaBand } from "@/components/cards";
import { ButtonLink } from "@/components/ui/Button";
import { LeafIcon, BuildingIcon, CoinsIcon } from "@/components/Icons";
import { images, serviceItems } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Mother Baby Food Products (OPC) Pvt Ltd" },
      {
        name: "description",
        content:
          "Food business services, real estate services and finance services offered by Mother Baby Food Products (OPC) Private Limited.",
      },
      { property: "og:title", content: "Our Services" },
      {
        property: "og:description",
        content:
          "Product sourcing, quality-focused operations, property consultation, financial planning and business advisory.",
      },
    ],
  }),
  component: Services,
});

const groups = [
  {
    key: "Food" as const,
    title: "Food Business Services",
    icon: <LeafIcon className="h-5 w-5" />,
    blurb: "Support across product lines, sourcing and day-to-day operations.",
  },
  {
    key: "Real Estate" as const,
    title: "Real Estate Services",
    icon: <BuildingIcon className="h-5 w-5" />,
    blurb: "Property opportunities, consultation and coordination support.",
  },
  {
    key: "Finance" as const,
    title: "Finance Services",
    icon: <CoinsIcon className="h-5 w-5" />,
    blurb: "General business finance, planning and advisory conversations.",
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Professional Services Across Our Verticals"
        description="A practical set of services spanning food business support, real estate and finance — presented here as demo portfolio content."
        image={images.agri}
      />

      {groups.map((g, i) => (
        <section key={g.key} className={i % 2 === 1 ? "bg-surface py-16" : "py-16"}>
          <div className="container-page">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                {g.icon}
              </span>
              <SectionHeading align="left" title={g.title} description={g.blurb} className="max-w-2xl" />
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {serviceItems
                .filter((s) => s.category === g.key && s.enabled)
                .map((s) => (
                  <ServiceCard key={s.id} icon={g.icon} title={s.name} description={s.description} />
                ))}
            </div>
          </div>
        </section>
      ))}

      <div className="py-16">
        <CtaBand
          title="Need Something Specific?"
          text="Tell us what you're looking for and our team will suggest the right way forward."
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
