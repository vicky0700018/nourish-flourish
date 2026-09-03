import { Link } from "@tanstack/react-router";
import { company } from "@/data/site";
import { LeafIcon, MailIcon, PhoneIcon, PinIcon, LockIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <LeafIcon className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold text-primary">
              Mother Baby Food Products
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A quality-focused food products company with a wider business vision across real
            estate and finance.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Promoter: {company.promoter}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Company</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About Us" },
              { to: "/food-products", label: "Food Products" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">
            Business Verticals
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/food-products", label: "Food Products" },
              { to: "/real-estate", label: "Real Estate" },
              { to: "/finance", label: "Finance" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{company.shortAddress}</span>
            </li>
            <li className="flex gap-2">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${company.phone}`} className="hover:text-primary">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${company.email}`} className="break-all hover:text-primary">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 {company.name}. All Rights Reserved.</p>
          <Link
            to="/admin/login"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 transition-colors hover:border-primary/40 hover:text-primary"
          >
            <LockIcon className="h-3.5 w-3.5" />
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
