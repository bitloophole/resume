import React, { useEffect, useMemo, useState } from "react";

type SectionId = "about" | "experience" | "skills" | "education" | "contact";

const DATA = {
  name: "Khushboo Kumari",
  role: "Frontend Developer / Frontend Engineer",
  location: "Helsingborg, Sweden",
  summary:
    "Frontend Developer with 6+ years of experience building interactive, user friendly, and visually engaging web applications across industries including e-commerce and healthcare. Skilled in modern frontend frameworks such as React and Angular, with strong expertise in HTML, CSS, and JavaScript/TypeScript.",
  links: {
    email: "kk1993114@gmail.com",
    phone: "+46 734 *** ***",
    linkedin: "https://www.linkedin.com/in/kkumari179/",
  },
  experience: [
    {
      company: "HCL Tech (IKEA Sweden)",
      title: "Frontend Engineer",
      dates: "Nov 2024 – Jul 2025",
      bullets: [
        "Developed and optimized 10+ reusable React components using TypeScript, integrating Jotai for local state management and useQuery for CRUD operations, improving development efficiency and scalability across AI MLOps products.",
        "Worked closely with the AI governance team to deliver GDPR-compliant features, enhancing user awareness and ensuring regulatory compliance for AI based applications.",
        "Engineered a comprehensive suite of 75+ unit tests utilizing Vitest and Jest, elevating application quality and reducing critical bugs by 60%.",
        "Contributed to agile development processes including sprint planning, code reviews, and cross-functional collaboration.",
      ],
    },
    {
      company: "Ecombooster (Sweden)",
      title: "Front-End Developer (Internship)",
      dates: "Aug 2023 – Dec 2023",
      bullets: [
        "Engineered 10+ features using function-based React components, Material UI, and React-PDF, managing complex state with Redux Toolkit to deliver scalable and maintainable user interfaces.",
        "Integrated RESTful APIs using Redux Thunk to handle async actions and side effects, keeping the UI consistent and responsive.",
        "Enhanced Bitbucket pipeline for CI/CD and facilitated deployment to AWS ECS for seamless build and deploy workflows.",
      ],
    },
    {
      company: "Exponential AI, Hyderabad",
      title: "Full Stack Developer",
      dates: "Mar 2020 – Dec 2022",
      bullets: [
        "Built responsive web applications for 5 products using HTML, CSS, TypeScript, and modern frameworks like React and Angular; used Syncfusion UI components for 2 products.",
        "Developed 200+ RESTful APIs for CRUD operations using Express, Node.js, Sequelize ORM, Postgres, and MongoDB.",
        "Implemented a chatbot interface in Vanilla JS and CSS and integrated it as a plugin across 3 regions.",
        "Participated in code reviews and mentored junior developers, decreasing development time by 20%.",
        "Improved web app performance using frontend optimization techniques and reduced build time by 25%.",
      ],
    },
    {
      company: "Tata Consultancy Services, India",
      title: "Senior Software Developer",
      dates: "Jun 2019 – Feb 2020",
      bullets: [
        "Designed 3 single-page applications (SPAs) for a user registration portal using Angular, SCSS, and TypeScript; utilized i18n localization.",
        "Implemented reactive and template-driven forms with validation for 50+ fields.",
        "Conceptualized and developed HTTP API integration with backend, increasing system efficiency by 15% and improving usability by 25%.",
        "Used Kendo-UI and PrimeFaces to create responsive UI components, improving development productivity by 30%.",
      ],
    },
    {
      company: "Accenture Solutions Pvt Ltd, India",
      title: "Test Engineering Analyst",
      dates: "May 2016 – Jan 2019",
      bullets: [
        "Created and maintained web applications using Angular and other web technologies.",
        "Collaborated with backend developers to integrate frontend applications with server-side APIs.",
        "Wrote unit tests using Jasmine and Karma to ensure application quality.",
      ],
    },
  ],
  skills: {
    frameworks: ["React", "Angular", "Node.js", "Express.js"],
    languages: ["TypeScript", "JavaScript"],
    web: [
      "HTML5",
      "CSS3",
      "Bootstrap 4",
      "SCSS",
      "Material UI",
      "Skapa",
      "Figma",
    ],
    databases: ["MongoDB", "Postgres", "Firestore"],
    tools: ["Postman", "ServiceNow", "Jira", "GitHub"],
    deployment: ["GitHub Actions", "Kubernetes", "Docker", "AWS", "GCP"],
  },
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "Kalinga Institute of Industrial Technology, Bhubaneshwar",
      year: "2012 – 2016",
    },
    {
      degree: "Master’s in Computer Science: Applied Data Science",
      school: "Malmö University, Sweden",
      year: "2024 – 2026 (expected)",
    },
  ],
};

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function useActiveSection(ids: SectionId[]) {
  const [active, setActive] = useState<SectionId>("about");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (visible?.target?.id) setActive(visible.target.id as SectionId);
      },
      { threshold: [0.2, 0.35, 0.5, 0.65], rootMargin: "-20% 0px -65% 0px" },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return active;
}

function Section({
  id,
  title,
  children,
}: {
  id: SectionId;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4 flex items-end gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-white">
          {title}
        </h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      {children}
    </section>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90">
      {label}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      {children}
    </div>
  );
}

export function DetailedResume() {
  const nav = useMemo(
    () =>
      [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "skills", label: "Skills" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
      ] as const,
    [],
  );

  const active = useActiveSection(nav.map((n) => n.id));

  const skillGroups: Array<{ title: string; items: string[] }> = [
    { title: "Frameworks", items: DATA.skills.frameworks },
    { title: "Languages", items: DATA.skills.languages },
    { title: "Web", items: DATA.skills.web },
    { title: "Databases", items: DATA.skills.databases },
    { title: "Tools", items: DATA.skills.tools },
    { title: "Deployment", items: DATA.skills.deployment },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      {/* Sticky horizontal nav */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <a href="#about" className="font-semibold tracking-tight">
            {DATA.name}
          </a>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cx(
                  "rounded-xl px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5",
                  active === item.id && "bg-white/10 text-white",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
            href={`mailto:${DATA.links.email}`}
          >
            Email
          </a>
        </div>

        {/* Mobile: horizontally scrollable nav */}
        <div className="md:hidden border-t border-white/10">
          <div className="mx-auto max-w-5xl overflow-x-auto px-2 py-2">
            <div className="flex min-w-max gap-2">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cx(
                    "whitespace-nowrap rounded-xl px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5",
                    active === item.id && "bg-white/10 text-white",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 py-10">
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-5">
              {/* Profile image */}
              <img
                src={`${process.env.PUBLIC_URL}/profile.jpg`}
                //src="public/profile.jpg"
                alt="Khushboo Kumari"
                className="h-20 w-20 rounded-2xl border border-white/10 object-cover"
              />

              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {DATA.name}
                </h1>
                <p className="mt-2 text-white/80">{DATA.role}</p>
                <p className="mt-1 text-white/60">{DATA.location}</p>
              </div>
            </div>

            <a
              className="w-fit rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
              href={`mailto:${DATA.links.email}`}
            >
              Email
            </a>
          </div>

          <p className="mt-4 max-w-3xl text-white/80">{DATA.summary}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-white/90"
              href={`mailto:${DATA.links.email}`}
            >
              Contact
            </a>
            <a
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
              href="#experience"
            >
              Experience
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/80">
            <a
              className="underline underline-offset-4 hover:text-white"
              href={DATA.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="underline underline-offset-4 hover:text-white"
              href={`mailto:${DATA.links.email}`}
            >
              {DATA.links.email}
            </a>
            <span className="text-white/60">{DATA.links.phone}</span>
          </div>
        </div>

        <div className="grid gap-10">
          <Section id="about" title="About">
            <Card>
              <p className="text-white/80">{DATA.summary}</p>
            </Card>
          </Section>

          <Section id="experience" title="Experience">
            <div className="space-y-4">
              {DATA.experience.map((job) => (
                <Card key={`${job.company}-${job.title}-${job.dates}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <p className="font-semibold">{job.title}</p>
                      <p className="text-sm text-white/70">{job.company}</p>
                    </div>
                    <p className="text-sm text-white/60">{job.dates}</p>
                  </div>

                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/80">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="skills" title="Skills">
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <Card key={g.title}>
                  <p className="text-sm font-semibold text-white/90">
                    {g.title}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <Chip key={s} label={s} />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="education" title="Education">
            <div className="space-y-4">
              {DATA.education.map((e) => (
                <Card key={`${e.school}-${e.degree}`}>
                  <p className="font-semibold">{e.degree}</p>
                  <p className="text-sm text-white/70">
                    {e.school} · {e.year}
                  </p>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <Card>
              <div className="space-y-2 text-white/80">
                <p>
                  Email:{" "}
                  <a
                    className="underline underline-offset-4 hover:text-white"
                    href={`mailto:${DATA.links.email}`}
                  >
                    {DATA.links.email}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <span className="text-white/90">{DATA.links.phone}</span>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    className="underline underline-offset-4 hover:text-white"
                    href={DATA.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {DATA.links.linkedin}
                  </a>
                </p>
              </div>
            </Card>
          </Section>
        </div>

        <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} {DATA.name}
        </footer>
      </main>
    </div>
  );
}
