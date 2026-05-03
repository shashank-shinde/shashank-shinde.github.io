import { ArrowDown, Download, Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Cloud, GitBranch, Palette, Terminal, Layers } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const skills = [
  { name: "Frontend", icon: Code2, items: "React, Next.js, TypeScript, Tailwind" },
  { name: "Backend", icon: Server, items: "Node.js, Express, NestJS, tRPC" },
  { name: "Databases", icon: Database, items: "Postgres, MongoDB, Redis, Prisma" },
  { name: "DevOps", icon: Cloud, items: "AWS, Docker, CI/CD, Vercel" },
  { name: "Tools", icon: GitBranch, items: "Git, GitHub Actions, Jest, Vitest" },
  { name: "Design", icon: Palette, items: "Figma, Design Systems, A11y" },
  { name: "APIs", icon: Layers, items: "REST, GraphQL, WebSockets" },
  { name: "Scripting", icon: Terminal, items: "Bash, Python, Automation" },
];

const projects = [
  {
    name: "TaskFlow",
    desc: "Real-time collaborative task manager built for remote teams. Features live cursors, optimistic updates, drag-and-drop boards, and offline sync via service workers. Scaled to 10k concurrent users with WebSocket fan-out.",
    stack: "React · Node · Postgres · Redis",
    link: "#",
  },
  {
    name: "DevNotes",
    desc: "Markdown-first knowledge base with full-text Postgres search, bi-directional links, and a plugin system. Includes a CLI for local-first editing and Git-backed sync across devices.",
    stack: "Next.js · Prisma · tRPC · Meilisearch",
    link: "#",
  },
  {
    name: "ShopLite",
    desc: "Headless e-commerce starter with Stripe checkout, multi-currency support, and a customizable storefront. Ships with a CMS-ready product schema and edge-rendered product pages for sub-100ms TTFB.",
    stack: "Remix · Stripe · Tailwind · Sanity",
    link: "#",
  },
];

const experience = [
  { role: "Senior Full Stack Developer", company: "Acme Corp", period: "2023 — Present", desc: "Leading a team building scalable SaaS products with React and Node." },
  { role: "Full Stack Developer", company: "Northwind Labs", period: "2021 — 2023", desc: "Shipped customer-facing dashboards and internal tooling." },
  { role: "Software Engineer Intern", company: "Initech", period: "2020 — 2021", desc: "Built REST APIs and contributed to design system." },
];

const education = [
  { school: "State University", degree: "B.S. in Computer Science", period: "2017 — 2021", desc: "Graduated with honors. Focus on distributed systems." },
];

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="container scroll-mt-20 py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <h2 className="mb-10 text-2xl font-semibold tracking-tight">
      <span className="text-muted-foreground">/</span> {title}
    </h2>
    {children}
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="container flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <p className="mb-4 font-mono text-sm text-muted-foreground">Hi, I'm</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Alex Carter.</h1>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-muted-foreground md:text-5xl">
            I build things for the web.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Full stack developer crafting fast, accessible, and thoughtful digital experiences.
            Currently focused on building products at the intersection of design and engineering.
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <a href="#projects">View Work</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
        <a href="#about" className="mt-16 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
          <ArrowDown className="h-3 w-3 animate-bounce" /> scroll
        </a>
      </section>

      <Section id="about" title="About">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>I'm a developer who enjoys turning complex problems into simple, beautiful interfaces. My toolkit spans the entire stack — from database schemas to pixel-perfect UI.</p>
            <p>When I'm not coding, you'll find me reading sci-fi, brewing coffee, or contributing to open source.</p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Tech I work with</h3>
            <ul className="grid grid-cols-2 gap-2 font-mono text-xs text-muted-foreground">
              {["TypeScript", "React", "Node.js", "Postgres", "Tailwind", "Docker", "AWS", "GraphQL"].map((t) => (
                <li key={t}>▸ {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="resume" title="Resume">
        <div className="flex flex-col items-start gap-4 rounded-lg border border-border p-8">
          <p className="text-muted-foreground">Download a PDF copy of my full resume.</p>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.link}
              className="group rounded-lg border border-border p-6 transition-all hover:-translate-y-1 hover:border-foreground/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-12" />
              </div>
              <p className="mb-6 text-sm text-muted-foreground">{p.desc}</p>
              <p className="font-mono text-xs text-muted-foreground">{p.stack}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-8 border-l border-border pl-6">
          {experience.map((e) => (
            <div key={e.role} className="relative">
              <span className="absolute -left-[31px] top-2 h-2 w-2 rounded-full bg-foreground" />
              <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              <h3 className="mt-1 font-semibold">{e.role} <span className="text-muted-foreground">· {e.company}</span></h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="space-y-8 border-l border-border pl-6">
          {education.map((e) => (
            <div key={e.school} className="relative">
              <span className="absolute -left-[31px] top-2 h-2 w-2 rounded-full bg-foreground" />
              <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              <h3 className="mt-1 font-semibold">{e.degree} <span className="text-muted-foreground">· {e.school}</span></h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="mx-auto max-w-xl text-center">
          <h3 className="text-3xl font-bold">Let's build something together.</h3>
          <p className="mt-4 text-muted-foreground">
            I'm always open to interesting conversations and new opportunities.
          </p>
          <Button className="mt-8" asChild>
            <a href="mailto:hello@alexcarter.dev"><Mail className="mr-2 h-4 w-4" /> Say hello</a>
          </Button>
          <div className="mt-10 flex justify-center gap-6 text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground"><Github className="h-5 w-5" /></a>
            <a href="#" className="transition-colors hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:hello@alexcarter.dev" className="transition-colors hover:text-foreground"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </Section>

      <footer className="container py-8 text-center font-mono text-xs text-muted-foreground">
        Designed & built by Alex Carter
      </footer>
    </div>
  );
};

export default Index;
