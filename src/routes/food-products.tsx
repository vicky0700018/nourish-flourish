import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard, FeatureCard, CtaBand } from "@/components/cards";
import { Modal } from "@/components/Modal";
import { ButtonLink } from "@/components/ui/Button";
import { ShieldIcon, LeafIcon, HeartIcon } from "@/components/Icons";
import { images, productCategories, type ProductCategory } from "@/data/site";

export const Route = createFileRoute("/food-products")({
  head: () => ({
    meta: [
      { title: "Food Products | Mother Baby Food Products (OPC) Pvt Ltd" },
      {
        name: "description",
        content:
          "Explore our food product categories — packaged food, grocery essentials, nutritional products, processed and specialty food. Demo portfolio content.",
      },
      { property: "og:title", content: "Food Products | Mother Baby Food Products" },
      {
        property: "og:description",
        content:
          "Quality food products for everyday needs — packaged food, grocery essentials, nutritional and specialty categories.",
      },
    ],
  }),
  component: FoodProducts;
});

const pillars = [
  { icon: <ShieldIcon className="h-5 w-5" />, title: "Hygiene First", description: "Clean handling practices across storage, packing and dispatch." },
  { icon: <LeafIcon className="h-5 w-5" />, title: "Careful Sourcing", description: "Suppliers selected for consistency, freshness and reliability." },
  { icon: <HeartIcon className="h-5 w-5" />, title: "Family Oriented", description: "Everyday food categories chosen with households in mind." },
];

function FoodProducts() {
  const [active, setActive] = useState<ProductCategory | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Primary business"
        title="Quality Food Products for Everyday Needs"
        description="Food products are the heart of Mother Baby Food Products (OPC) Private Limited. The categories below are presented as demo portfolio content showing the areas our food business focuses on."
        image={images.packaged}
      />

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Categories"
            title="Our Food Product Categories"
            description="Sample categories with demo descriptions. Click a card to view more details."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((c) => (
              <ProductCard
                key={c.id}
                name={c.name}
                description={c.description}
                image={c.image}
                onView={() => setActive(c)}
              />
            ))}
          </div>
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
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {active.description}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.details}</p>
            <ButtonLink to="/contact" className="mt-6" onClick={() => setActive(null)}>
              Enquire About This Category
            </ButtonLink>
          </div>
        ) : null}
      </Modal>

      <div className="py-20">
        <CtaBand
          title="Talk to Us About Our Food Business"
          text="Share your requirement and our team will get in touch to discuss how we can help."
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
