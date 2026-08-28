"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const topNavSections = [
  {
    label: "Explore",
    items: [{ href: "/ecosystem", label: "Ecosystem", icon: "◉" }],
  },
  {
    label: "Data",
    items: [{ href: "/database", label: "Database", icon: "▣" }],
  },
];

const learnItems = [
  { href: "/learn#foundations", label: "Foundations" },
  { href: "/learn/credit-structure", label: "Credit Structure" },
  { href: "/learn#credit-products", label: "Credit Products" },
  { href: "/learn#risk", label: "Risk" },
  { href: "/learn#credit-defi", label: "Credit × DeFi" },
  { href: "/learn#analyze", label: "Analyze" },
  { href: "/learn/case-studies", label: "Case Studies" },
  { href: "/learn#failure-modes", label: "Failure Modes" },
];

const referenceItems = [
  { href: "/learn/glossary", label: "Glossary" },
  { href: "/learn/resources", label: "Resources" },
];

const mobileNavItems = [
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/database", label: "Database" },
  { href: "/learn", label: "Learn" },
];

function isActive(pathname: string | null, href: string) {
  if (!pathname || href.includes("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-60 flex-col border-r border-line bg-background lg:flex">
        <div className="px-5 pt-6 pb-5">
          <Link
            href="/ecosystem"
            className="text-sm font-semibold uppercase tracking-[0.06em] text-foreground"
          >
            Private Credit<span className="text-accent">.Map</span>
          </Link>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-muted">
            v1 · ecosystem
          </p>
        </div>

        <div className="border-t border-line" />

        <nav aria-label="Primary" className="flex-1 overflow-y-auto px-3 py-5">
          {topNavSections.map((section) => (
            <div key={section.label} className="mb-6">
              <p className="px-2.5 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                {section.label}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors ${
                        active
                          ? "bg-foreground/[0.06] font-medium text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      <span aria-hidden="true" className="text-xs text-zinc-400">
                        {item.icon}
                      </span>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mb-6">
            <p className="px-2.5 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Learn
            </p>
            <div className="space-y-0.5">
              {learnItems.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-2.5 py-1.5 text-xs transition-colors ${
                      active
                        ? "bg-foreground/[0.06] font-medium text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mb-6 last:mb-0">
            <p className="px-2.5 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Reference
            </p>
            <div className="space-y-0.5">
              {referenceItems.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-2.5 py-1.5 text-xs transition-colors ${
                      active
                        ? "bg-foreground/[0.06] font-medium text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </aside>

      <header className="flex items-center justify-between border-b border-line bg-background px-4 py-3 lg:hidden">
        <Link
          href="/ecosystem"
          className="text-sm font-semibold uppercase tracking-[0.06em] text-foreground"
        >
          Private Credit<span className="text-accent">.Map</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1">
          {mobileNavItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  active
                    ? "bg-foreground/[0.06] text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
