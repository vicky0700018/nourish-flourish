import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/Icons";
import { company, images } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Mother Baby Food Products (OPC) Pvt Ltd" },
      {
        name: "description",
        content:
          "Contact Mother Baby Food Products (OPC) Private Limited — Wakodi Road, Ahmednagar, Maharashtra 414001. Phone 2125414552.",
      },
      { property: "og:title", content: "Contact Mother Baby Food Products" },
      {
        property: "og:description",
        content:
          "Get in touch with our team in Ahmednagar, Maharashtra for food products, real estate and finance enquiries.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Start a Conversation"
        description="Reach out to our team for food product enquiries, real estate opportunities or finance discussions. We'll respond as soon as we can."
        image={images.agri}
      />

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-6">
            <div className="card-soft p-7">
              <h2 className="text-xl font-semibold text-foreground">{company.name}</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="mt-1 text-muted-foreground">{company.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href={`tel:${company.phone}`}
                      className="mt-1 block text-muted-foreground transition-colors hover:text-primary"
                    >
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="mt-1 block break-all text-muted-foreground transition-colors hover:text-primary"
                    >
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="mt-1 text-muted-foreground">Monday – Saturday, 10:00 – 18:00 IST</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <div className="relative h-56 bg-surface">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
                    backgroundSize: "38px 38px",
                  }}
                />
                <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
                    <PinIcon className="h-6 w-6" />
                  </span>
                  <p className="mt-3 font-medium text-foreground">Ahmednagar, Maharashtra</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {company.shortAddress} · illustrative location graphic
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
