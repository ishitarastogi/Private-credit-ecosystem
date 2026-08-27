import Link from "next/link";

const navItems = [
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/database", label: "Database" },
  { href: "/learn", label: "Learn" },
];

export function Navbar() {
  return (
    <header className="border-b border-line bg-background/95">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <Link href="/ecosystem" className="text-sm font-semibold text-foreground">
          Private Credit Ecosystem
        </Link>
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
