import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ButtonLink } from "./ui/Button";
import { LeafIcon, MenuIcon, CloseIcon } from "./Icons";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/food-products", label: "Food Products" },
  { to: "/real-estate", label: "Real Estate" },
  { to: "/finance", label: "Finance" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/90 shadow-soft backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur"
      }`}
    >
      <nav className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
            <LeafIcon className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold tracking-tight text-primary sm:text-lg">
              Mother Baby Food Products
            </span>
            <span className="hidden text-[11px] tracking-[0.16em] text-muted-foreground uppercase sm:block">
              (OPC) Private Limited
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary data-[status=active]:bg-primary-soft data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink to="/contact" size="sm">
            Contact Us
          </ButtonLink>
        </div>

        <button
          className="rounded-xl border border-border p-2 text-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-card lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary data-[status=active]:bg-primary-soft data-[status=active]:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 pb-2">
              <ButtonLink to="/contact" className="w-full" onClick={() => setOpen(false)}>
                Contact Us
              </ButtonLink>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
