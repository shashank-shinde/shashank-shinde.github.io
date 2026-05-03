import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Cloud, GitBranch, Send, Terminal, Layers, FlaskConical } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/photo.jpg";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

const skillIcons = {
  Code2,
  Server,
  Database,
  Cloud,
  GitBranch,
  FlaskConical,
  Layers,
  Terminal,
} as const;

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
          <p className="mb-4 inline-flex rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            Hi, I am
          </p>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Shashank Shinde.</h1>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-muted-foreground md:text-5xl">
            I design and build scalable systems for web and mobile platforms.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Crafting high-performance mobile and web applications on top of scalable systems. Currently working at the intersection of design, engineering, Bitcoin, and AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="shadow-[0_14px_30px_-20px_hsl(var(--primary)/0.75)]" asChild>
              <a href="#projects">View Work</a>
            </Button>
            <Button variant="outline" className="bg-card/70" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
        <a href="#about" className="mt-16 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
          <ArrowDown className="h-3 w-3 animate-bounce" /> scroll
        </a>
      </section>

      <Section id="about" title="About">
        <div className="grid gap-8 rounded-2xl border border-border/70 bg-card/60 p-8 backdrop-blur-sm md:grid-cols-3">
          <div className="space-y-4 leading-relaxed text-muted-foreground md:col-span-2">
            <p>I build software that simplifies complex systems into intuitive, high-performance products. As a full-stack engineer, I design scalable backend architectures and data models while delivering fast, polished web and mobile interfaces.</p>
            <p>My current focus is on building systems that operate reliably at scale, with a growing interest in the intersection of Bitcoin and AI—particularly where decentralization meets intelligent automation.</p>
            <p>Outside of engineering, I spend time playing tennis, reading, experimenting with coffee brewing, contributing to open source, and exploring different countries and cultures.</p>
          </div>
          <div className="flex items-start justify-center md:justify-end">
            <div className="h-60 w-60 overflow-hidden rounded-2xl border border-border/80 shadow-[0_16px_35px_-24px_hsl(var(--primary)/0.7)]">
              <img
                src={profilePhoto}
                alt="Portrait of Shashank Shinde"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => {
            const Icon = skillIcons[s.icon];
            return (
              <div
                key={s.name}
                className="group rounded-xl border border-border/80 bg-card/65 p-5 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_16px_35px_-22px_hsl(var(--primary)/0.7)]"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{s.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.items}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* <Section id="resume" title="Resume">
        <div className="flex flex-col items-start gap-4 rounded-xl border border-border/80 bg-card/65 p-8">
          <p className="text-muted-foreground">Download a PDF copy of my full resume.</p>
          <Button variant="outline" className="bg-background/80">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>
      </Section> */}

      <Section id="projects" title="Projects">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.link}
              className="group rounded-xl border border-border/80 bg-card/65 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_16px_35px_-24px_hsl(var(--primary)/0.7)]"
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
        <div className="space-y-8 rounded-xl border border-border/70 bg-card/65 p-6 md:p-8">
          {experience.map((e) => {
            const bulletItems = e.desc
              .split("\n")
              .map((line) => line.trim())
              .filter((line) => line.startsWith("-"))
              .map((line) => line.replace(/^-+\s*/, ""));

            return (
              <div key={e.role} className="relative">
                <p className="font-mono text-xs text-primary/85">{e.period}</p>
                <h3 className="mt-1 font-semibold">{e.role} <span className="text-muted-foreground">· <a href={e.website} target="_blank" rel="noopener noreferrer">{e.company}</a></span></h3>
                {bulletItems.length > 0 ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {bulletItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="space-y-8 rounded-xl border border-border/70 bg-card/65 p-6 md:p-8">
          {education.map((e) => (
            <div key={e.school} className="relative">
              <p className="font-mono text-xs text-primary/85">{e.period}</p>
              <h3 className="mt-1 font-semibold">{e.degree} <span className="text-muted-foreground">· <a href={e.website} target="_blank" rel="noopener noreferrer">{e.school}</a></span></h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="mx-auto max-w-xl rounded-2xl border border-border/80 bg-card/65 px-6 py-10 text-center backdrop-blur-sm md:px-10">
          <h3 className="text-3xl font-bold">Let's build something together.</h3>
          <p className="mt-4 text-muted-foreground">
            I'm always open to interesting conversations and new opportunities.
          </p>
          <Button className="mt-8 shadow-[0_14px_30px_-20px_hsl(var(--primary)/0.75)]" asChild>
            <a href="mailto:shashank.shinde@live.com"><Mail className="mr-2 h-4 w-4" /> Say hello</a>
          </Button>
          <div className="mt-10 flex justify-center gap-6 text-muted-foreground">
            <a href="https://github.com/cakesoft-shashank" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground"><Github className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/shashank-shinde/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:shashank.shinde@live.com" className="transition-colors hover:text-foreground"><Mail className="h-5 w-5" /></a>
            <a href="https://t.me/shashank_shinde" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground"><Send className="h-5 w-5" /></a>

          </div>
        </div>
      </Section>
      {/* <footer className="container py-8 text-center font-mono text-xs text-muted-foreground">
        Designed & built by Shashank Shinde
      </footer> */}
    </div>
  );
};

export default Index;
