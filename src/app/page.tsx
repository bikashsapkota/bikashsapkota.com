import {
  caseStudies,
  education,
  experience,
  links,
  profile,
  services,
  skillGroups,
  testimonial,
} from "@/lib/content";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-line bg-surface/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-semibold text-foreground">
            {profile.name}
          </a>
          <div className="hidden items-center gap-6 text-sm text-muted md:flex">
            {navItems.map((item) => (
              <a key={item.href} className="transition hover:text-accent" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-5 max-w-max border-l-4 border-accent bg-orange-50 px-4 py-2 text-sm font-medium text-accent-strong">
              {profile.location} / {profile.role}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] text-foreground">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-foreground">
              {profile.headline}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{profile.bio}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accent-strong"
                href={`mailto:${profile.email}`}
              >
                Contact by email
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-md border border-line bg-surface px-5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
                href="https://github.com/bikashsapkota"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
              {profile.resumeUrl ? (
                <a
                  className="inline-flex h-12 items-center justify-center rounded-md border border-line bg-surface px-5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
                  href={profile.resumeUrl}
                >
                  Resume
                </a>
              ) : null}
            </div>
          </div>

          <aside className="hidden border border-line bg-background p-6 lg:block">
            <p className="text-sm font-semibold uppercase text-accent-strong">Current focus</p>
            <div className="mt-6 space-y-5">
              {[
                "Mobility and geospatial data pipelines",
                "People-flow analysis and visualization",
                "AI/ML systems for applied decision workflows",
                "Cloud data products for technical teams",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                  <p className="leading-7 text-muted">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6">
              <Stat value="8+" label="Years in ML, AI, and data" />
              <Stat value="4" label="Professional roles" />
              <Stat value="2" label="Languages" />
              <Stat value="Tokyo" label="Current base" />
            </div>
          </aside>
        </div>
      </section>

      <section id="experience" className="border-b border-line">
        <SectionHeader
          eyebrow="Experience"
          title="Recent work across geospatial data, AI systems, and applied optimization."
          description="The through-line is production work: turning raw data, models, and business logic into systems people can use."
        />
        <div className="mx-auto grid max-w-6xl gap-5 px-5 pb-20">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="border border-line bg-surface p-6">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
                <div>
                  <p className="text-sm font-medium text-accent-strong">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-8">{item.role}</h3>
                  <p className="mt-2 text-muted">
                    {item.company} / {item.employment}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.location}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-accent-strong"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-3 text-muted">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 leading-7">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="border-b border-line bg-surface">
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation in computer science and information technology."
          description="Formal computer science training that supports the later career arc across software, data systems, machine learning, and cloud applications."
        />
        <div className="mx-auto grid max-w-6xl gap-5 px-5 pb-20">
          {education.map((item) => (
            <article key={`${item.degree}-${item.institution}`} className="border border-line bg-background p-6">
              <div className="grid gap-5 lg:grid-cols-[0.9fr_1.4fr]">
                <div>
                  <p className="text-sm font-medium text-accent-strong">{item.location}</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-8">{item.degree}</h3>
                  <p className="mt-2 text-muted">{item.institution}</p>
                </div>
                <p className="max-w-3xl leading-7 text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="border-b border-line bg-surface">
        <SectionHeader
          eyebrow="Skills"
          title="A practical stack for data-heavy systems."
          description="Grouped from production roles across geospatial analytics, machine learning, cloud services, and delivery."
        />
        <div className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="border border-line bg-background p-5">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="border border-line bg-surface px-3 py-1 text-sm text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="border-b border-line">
        <SectionHeader
          eyebrow="Services"
          title="Technical services around data, AI, and cloud applications."
          description="Useful for collaboration, technical discussion, and projects where data systems need to become reliable products."
        />
        <div className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="border border-line bg-surface p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="border-b border-line bg-surface">
        <SectionHeader
          eyebrow="Case studies"
          title="Public-safe examples from recent company work."
          description="These describe technical shape and outcomes without client names, internal systems, or proprietary details."
        />
        <div className="mx-auto grid max-w-6xl gap-5 px-5 pb-20 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="flex min-h-[420px] flex-col border border-line bg-background p-6">
              <p className="text-sm font-medium text-accent-strong">{study.context}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-8">{study.title}</h3>
              <p className="mt-4 leading-7 text-muted">{study.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                {study.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 leading-6">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {study.tags.map((tag) => (
                  <span key={tag} className="border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <blockquote className="border-l-4 border-accent bg-surface p-8">
            <p className="text-2xl font-semibold leading-9 text-foreground">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-5 text-muted">
              {testimonial.author}, {testimonial.context}
            </footer>
          </blockquote>
        </div>
      </section>

      <section id="contact" className="bg-foreground text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-orange-300">Contact</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.15]">
              Open to collaboration and technical discussion.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-stone-300">
              Reach out about geospatial data platforms, AI/ML systems, optimization workflows, or cloud data applications.
            </p>
            <a
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white transition hover:bg-orange-500"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <ContactBlock title="Profiles" items={links.filter((link) => link.label !== "Email")} />
            <ContactBlock
              title="Details"
              items={[
                { label: profile.location, href: "#top" },
                { label: "BSc CSIT, Tribhuvan University", href: "#education" },
                { label: profile.languages.join(" / "), href: "#skills" },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm font-semibold uppercase text-accent-strong">{eyebrow}</p>
      <div className="mt-4 grid gap-5 lg:grid-cols-[0.95fr_1fr]">
        <h2 className="text-4xl font-semibold leading-[1.12]">{title}</h2>
        <p className="max-w-2xl text-lg leading-8 text-muted">{description}</p>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-mono text-2xl font-semibold text-foreground">{value}</p>
      <p className="mt-1 text-sm leading-5 text-muted">{label}</p>
    </div>
  );
}

function ContactBlock({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="border border-stone-700 p-5">
      <h3 className="font-semibold text-white">{title}</h3>
      <div className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <a
            key={item.label}
            className="text-stone-300 transition hover:text-orange-300"
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
