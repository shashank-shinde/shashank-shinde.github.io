import { Menu } from "lucide-react";
import { ThemeToggleDeferred } from "./ThemeToggleDeferred";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "/Shashank_Shinde_Resume.pdf", label: "Resume", newTab: true },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        <a href="/" className="font-mono text-sm font-semibold tracking-tight text-foreground/90">
          &lt;dev/&gt;
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                {...("newTab" in l && l.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggleDeferred />
          <details className="relative md:hidden">
            <summary className="list-none rounded-md p-2 transition-colors hover:bg-accent [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Toggle menu</span>
              <Menu className="h-5 w-5" />
            </summary>
            <ul className="absolute right-0 top-12 z-20 min-w-40 rounded-lg border border-border/70 bg-background/95 p-2 shadow-lg backdrop-blur-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    {...("newTab" in l && l.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="block rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
};
