import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard, CtaBand } from "@/components/cards";
import { Modal } from "@/components/Modal";
import { ButtonLink } from "@/components/ui/Button";
import { images, realEstateProjects, type Project } from "@/data/site";

export const Route = createFileRoute("/real-estate")({
  head: () => ({
    meta: [
      { title: "Real Estate | Mother Baby Food Products (OPC) Pvt Ltd" },
      {
        name: "description",
        content:
          "Our real estate vertical — sample residential and commercial project concepts presented as demo portfolio content.",
      },
      { property: "og:title", content: "Real Estate Opportunities" },
      {
        property: "og:description",
        content:
          "Property opportunities, project consultation and real estate support from Mother Baby Food Products (OPC) Private Limited.",
      },
    ],
  }),
  component: RealEstate,
});

function RealEstate() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Business vertical"
        title="Real Estate Opportunities"
        description="This section represents the company's broader real-estate business vertical. All projects listed below are sample/demo portfolio content and do not represent actual developments."
        image={images.realEstate}
      />

      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          eyebrow="Sample portfolio"
          title="Demo Project Concepts"
          description="Illustrative project cards showing the kind of residential and commercial work this vertical is oriented towards."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {realEstateProjects.map((p) => (
            <ProjectCard
              key={p.id}
              name={p.name}
              type={p.type}
              location={p.location}
              description={p.description}
              image={p.image}
              onView={() => setActive(p)}
            />
          ))}
        </div>
      </section>

      <Modal open={active !== null} onClose={() => setActive(null)} title={active?.name ?? ""}>
        {active ? (
          <div>
            <img
              src={active.image}
              alt={active.name}
              width={1200}
              height={700}
              className="h-56 w-full rounded-2xl object-cover"
            />
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="rounded-full bg-primary-soft px-2.5 py-1 font-medium text-primary">
                {active.type}
              </span>
              <span className="rounded-full bg-muted px-2.5 py-1">{active.location}</span>
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-accent-foreground">
                Sample project
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {active.description}
            </p>
            <ButtonLink to="/contact" className="mt-6" onClick={() => setActive(null)}>
              Discuss This Opportunity
            </ButtonLink>
          </div>
        ) : null}
      </Modal>

      <div className="pb-20">
        <CtaBand
          title="Discuss a Real Estate Opportunity"
          text="Speak with our team about property opportunities, project consultation and real estate support."
        >
          <ButtonLink to="/contact" variant="accent" size="lg">
            Contact Us
          </ButtonLink>
          <ButtonLink to="/services" variant="light" size="lg">
            View Services
          </ButtonLink>
        </CtaBand>
      </div>
    </>
  );
}
