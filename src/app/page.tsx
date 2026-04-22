import Image from "next/image";

import { ActiveNav } from "@/app/active-nav";
import { Reveal } from "@/app/reveal";
import {
  architectureSystems,
  caseStudies,
  education,
  experience,
  heroVisual,
  insights,
  links,
  metrics,
  profile,
  skillGroups,
  techStack,
} from "@/lib/content";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-line/80 bg-surface/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-semibold tracking-tight text-foreground">
            {profile.name}
          </a>
          <ActiveNav items={navItems} />
        </nav>
      </header>

      <section id="top" className="relative scroll-mt-20 border-b border-line bg-surface">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,88,12,0.11),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:py-16">
          <Reveal>
            <p className="inline-flex border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
              {profile.location} / {profile.role}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-foreground md:text-5xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-muted">{profile.subheadline}</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{profile.valueProposition}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accent-strong"
                href={`mailto:${profile.email}`}
              >
                Contact
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-md border border-accent bg-surface px-5 text-sm font-semibold text-accent transition hover:bg-orange-50"
                href="#projects"
              >
                View projects
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-md border border-line bg-surface px-5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
                href="https://github.com/bikashsapkota"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {techStack.map((item) => (
                <span key={item} className="border border-line bg-background/80 px-3 py-1.5 text-sm text-muted">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border border-line bg-background p-2 shadow-[0_24px_80px_rgba(28,25,23,0.10)]">
              <div className="relative h-[320px] overflow-hidden bg-stone-100 sm:h-[420px] lg:h-[520px]">
                <Image
                  src={heroVisual.src}
                  alt={heroVisual.alt}
                  fill
                  priority
                  sizes="(min-width: 1280px) 56vw, (min-width: 1024px) 54vw, calc(100vw - 40px)"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-10">
          <div className="grid border border-line bg-surface shadow-[0_10px_40px_rgba(15,23,42,0.04)] sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-line px-4 py-4 sm:border-r last:border-r-0">
                <p className="text-sm font-semibold tracking-tight text-foreground">{metric.value}</p>
                <p className="mt-1 text-xs leading-5 text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-b border-line">
        <SectionShell
          eyebrow="About"
          title="I solve the messy middle between raw mobility data and decision-ready geospatial products."
          description={profile.about}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Systems thinking", "I start with data contracts, lineage, failure modes, and operational cost instead of treating pipelines as scripts."],
              ["Spatial fluency", "I work with coordinates, grids, joins, time windows, OD movement, road volume, and POI footfall as first-class data concerns."],
              ["Product mindset", "I care about the final consumer: analysts, researchers, consultants, dashboards, APIs, and map-based workflows."],
            ].map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="h-full border border-line bg-surface p-6">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-muted">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionShell>
      </section>

      <section id="projects" className="scroll-mt-20 border-b border-line bg-surface">
        <SectionShell
          eyebrow="Case studies"
          title="Systems work framed by problem, solution, stack, and impact."
          description="These are public-safe summaries of real production patterns: ingestion, spatial enrichment, serving layers, optimization, and operational workflows."
        >
          <div className="grid gap-5">
            {caseStudies.map((study, index) => (
              <Reveal key={study.title} delay={index * 0.04}>
                <article className="grid gap-6 border border-line bg-background p-6 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-strong">
                      {study.company ? (
                        <>
                          <a href={study.company.href} target="_blank" rel="noreferrer" className="underline decoration-orange-300/70">
                            {study.company.label}
                          </a>{" "}
                          /{" "}
                        </>
                      ) : null}
                      {study.context}
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight">{study.title}</h3>
                    <div className="mt-6">
                      <ArchitectureFlow steps={study.architecture} />
                    </div>
                  </div>

                  <div className="grid gap-5">
                    <ProjectBlock label="Problem" value={study.problem} />
                    <ProjectBlock label="Solution" value={study.solution} />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Impact</p>
                      <ul className="mt-3 grid gap-2 text-muted">
                        {study.impact.map((item) => (
                          <li key={item} className="flex gap-3 leading-7">
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <TagList items={study.stack} />
                    {study.githubUrl ? (
                      <a className="text-sm font-semibold text-accent" href={study.githubUrl} target="_blank" rel="noreferrer">
                        View repository
                      </a>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionShell>
      </section>

      <section id="architecture" className="scroll-mt-20 border-b border-line">
        <SectionShell
          eyebrow="System design"
          title="Architecture patterns for geospatial big-data systems."
          description="The site now exposes architecture thinking directly instead of hiding it inside tool lists."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {architectureSystems.map((system, index) => (
              <Reveal key={system.title} delay={index * 0.05}>
                <article className="h-full border border-line bg-surface p-6">
                  <h3 className="text-2xl font-semibold tracking-tight">{system.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{system.description}</p>
                  <div className="mt-6">
                    <ArchitectureFlow steps={system.flow} />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {system.principles.map((principle) => (
                      <span key={principle} className="border border-line bg-background px-3 py-1 text-xs font-medium text-muted">
                        {principle}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionShell>
      </section>

      <section id="skills" className="scroll-mt-20 border-b border-line bg-surface">
        <SectionShell
          eyebrow="Skills"
          title="Grouped by the work they enable, not by tool names."
          description="The stack matters because it supports large-scale movement data, spatial context, reliable pipelines, and fast serving layers."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.04}>
                <article className="h-full border border-line bg-background p-6">
                  <h3 className="text-2xl font-semibold tracking-tight">{group.title}</h3>
                  <p className="mt-3 min-h-[112px] leading-7 text-muted">{group.description}</p>
                  <TagList items={group.tools} />
                </article>
              </Reveal>
            ))}
          </div>
        </SectionShell>
      </section>

      <section id="experience" className="scroll-mt-20 border-b border-line">
        <SectionShell
          eyebrow="Experience timeline"
          title="A career arc from ML systems to geospatial big-data platforms."
          description="The through-line is production work: data quality, integration, cloud systems, operational reliability, and useful outputs."
        >
          <div className="grid gap-5">
            {experience.map((item, index) => (
              <Reveal key={`${item.company}-${item.role}`} delay={index * 0.04}>
                <article className="grid gap-6 border border-line bg-surface p-6 lg:grid-cols-[0.34fr_0.66fr]">
                  <div>
                    <p className="text-sm font-medium text-accent-strong">{item.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-8">{item.role}</h3>
                    <p className="mt-2 text-muted">
                      {item.companyUrl ? (
                        <a
                          className="font-medium text-foreground underline decoration-orange-300/60 underline-offset-4 transition hover:text-accent"
                          href={item.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.company}
                        </a>
                      ) : (
                        item.company
                      )}{" "}
                      / {item.employment}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.location}</p>
                  </div>
                  <div>
                    <p className="leading-7 text-muted">{item.summary}</p>
                    <ul className="mt-5 grid gap-2 text-muted">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 leading-7">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <TagList items={item.skills} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionShell>
      </section>

      <section id="insights" className="scroll-mt-20 border-b border-line bg-surface">
        <SectionShell
          eyebrow="Tech blog / insights"
          title="Writing topics that reinforce the geospatial systems niche."
          description="These placeholders set up a future writing section without pretending posts already exist."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {insights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="h-full border border-line bg-background p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">{item.status}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-7">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionShell>
      </section>

      <section id="education" className="scroll-mt-20 border-b border-line">
        <SectionShell
          eyebrow="Education"
          title="Computer science foundation for systems, data, and applied ML."
          description="Formal computer science training supports the later career arc across software systems, data platforms, machine learning, and cloud applications."
        >
          {education.map((item) => (
            <article key={`${item.degree}-${item.institution}`} className="border border-line bg-surface p-6">
              <p className="text-sm font-medium text-accent-strong">{item.location}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-8">{item.degree}</h3>
              <p className="mt-2 text-muted">{item.institution}</p>
              <p className="mt-5 max-w-3xl leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </SectionShell>
      </section>

      <section id="contact" className="scroll-mt-20 bg-foreground text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">Contact</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight">
              Open to geospatial data platforms, mobility analytics, and systems-heavy engineering work.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-stone-300">
              Reach out if the problem involves high-volume data, spatial analytics, distributed pipelines, or turning complex
              data into something a product team can operate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white transition hover:bg-orange-500"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-md border border-orange-300 px-5 text-sm font-semibold text-orange-200 transition hover:bg-stone-800"
                href={profile.meetingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Book a meeting
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="grid gap-6 sm:grid-cols-2">
              <ContactBlock title="Profiles" items={links.filter((link) => link.label !== "Email")} showIcons />
              <ContactBlock
                title="Details"
                items={[
                  { label: profile.location, href: "#top" },
                  { label: "BSc CSIT, Deerwalk Institute of Technology", href: "#education" },
                  { label: profile.languages.join(" / "), href: "#skills" },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function SectionShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-strong">{eyebrow}</p>
        <div className="mt-4 grid gap-5 lg:grid-cols-[0.92fr_1fr]">
          <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">{title}</h2>
          <p className="max-w-2xl text-lg leading-8 text-muted">{description}</p>
        </div>
      </Reveal>
      <div className="mt-12">{children}</div>
    </div>
  );
}

function ProjectBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
      <p className="mt-2 leading-7 text-muted">{value}</p>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
          {item}
        </span>
      ))}
    </div>
  );
}

function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-2">
      {steps.map((step, index) => (
        <div key={`${step}-${index}`} className="flex items-center gap-2">
          <div className="min-w-0 flex-1 border border-line bg-surface px-3 py-2 text-sm font-medium text-foreground">
            {step}
          </div>
          {index < steps.length - 1 ? <span className="font-mono text-sm text-accent">-&gt;</span> : null}
        </div>
      ))}
    </div>
  );
}

function ContactBlock({
  title,
  items,
  showIcons = false,
}: {
  title: string;
  items: { label: string; href: string }[];
  showIcons?: boolean;
}) {
  return (
    <div className="border border-stone-700 p-5">
      <h3 className="font-semibold text-white">{title}</h3>
      <div className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <a
            key={item.label}
            className="group flex items-center gap-3 text-stone-300 transition hover:text-orange-300"
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {showIcons ? (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-stone-700 text-stone-300 transition group-hover:border-orange-300 group-hover:text-orange-300">
                <ProfileIcon label={item.label} />
              </span>
            ) : null}
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function ProfileIcon({ label }: { label: string }) {
  const iconClass = "h-4 w-4";

  if (label === "GitHub") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.37 7.79H2.25V21h3.12V7.79ZM3.81 2.5C2.8 2.5 2 3.31 2 4.31s.8 1.82 1.81 1.82 1.82-.82 1.82-1.82S4.82 2.5 3.81 2.5ZM22 13.39c0-3.55-1.89-5.2-4.41-5.2a3.82 3.82 0 0 0-3.45 1.9h-.04v-2.3h-3V21h3.13v-6.53c0-1.72.32-3.38 2.45-3.38 2.1 0 2.13 1.96 2.13 3.49V21H22v-7.61ZM8.86 7.79H5.74V21h3.12V7.79Z" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
      </svg>
    );
  }

  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
