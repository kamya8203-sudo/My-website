import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Code2, FileText, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Brightside Studio" },
      {
        name: "description",
        content:
          "Tutoring, skill coaching, exam prep and everyday help — student-friendly services from Brightside Studio, with honest pricing.",
      },
      { property: "og:title", content: "Services — Brightside Studio" },
      {
        property: "og:description",
        content:
          "Tutoring, skill coaching, exam prep and everyday help — student-friendly services from Brightside Studio, with honest pricing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    title: "Subject tutoring",
    body: "One-to-one tutoring that makes difficult subjects click, from tutors who've taken the same courses.",
    includes: [
      "Math, science, languages and more",
      "Clear explanations with worked examples",
      "Homework support between sessions",
    ],
    price: "from $20/hr",
    tag: "bg-primary/15 text-primary",
    icon: BookOpen,
  },
  {
    title: "Skill coaching",
    body: "Learn a practical skill by building something real — guided step by step by someone who does it for a living.",
    includes: [
      "Coding, design, writing or public speaking",
      "A real project you can show off",
      "Weekly goals with honest feedback",
    ],
    price: "from $25/hr",
    tag: "bg-secondary text-secondary-foreground",
    icon: Code2,
  },
  {
    title: "Exam prep",
    body: "A structured plan, real practice, and steady check-ins — so you walk into the exam knowing what to expect.",
    includes: [
      "A revision plan tailored to your syllabus",
      "Practice papers and mock tests",
      "Check-ins every week until exam day",
    ],
    price: "from $20/hr",
    tag: "bg-accent text-accent-foreground",
    icon: GraduationCap,
  },
  {
    title: "CV & everyday help",
    body: "A second pair of eyes on the small-but-important things that don't fit a regular session.",
    includes: [
      "CV, cover letter and application reviews",
      "Study plans and time management",
      "Practical help with everyday admin",
    ],
    price: "from $15/task",
    tag: "bg-primary/15 text-primary",
    icon: FileText,
  },
];

const STEPS = [
  {
    step: "1",
    title: "Say hello",
    body: "Send us a message and tell us where you're stuck. We reply within 24 hours.",
  },
  {
    step: "2",
    title: "Free 15-minute chat",
    body: "We match you with the right person and agree a plan that fits your budget — no commitment.",
  },
  {
    step: "3",
    title: "Get going",
    body: "Sessions start within the week — online or in person, your choice.",
  },
];

function Services() {
  return (
    <>
      <section className="dot-grid">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 md:pb-14 md:pt-20">
          <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase text-primary">
            Services
          </span>
          <h1 className="mt-5 max-w-[18ch] font-display text-4xl font-bold leading-tight text-balance text-foreground md:text-6xl">
            Support that gets you <span className="text-primary">unstuck.</span>
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg text-pretty text-muted-foreground">
            Pick one, or mix and match. Every option starts with a free 15-minute chat so we make
            sure it's the right fit before you spend a cent.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 md:pb-20">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          What we offer
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Four ways we can help
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1 md:p-7"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <s.icon size={23} aria-hidden="true" />
                </span>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${s.tag}`}
                >
                  {s.price}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-pretty text-muted-foreground">{s.body}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-primary"
              >
                Ask about this
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>

        <div className="surface-dark mt-6 rounded-lg p-7 md:p-9">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold text-background">
                Not sure which one?
              </h2>
              <p className="mt-2 max-w-[44ch] text-pretty text-background/70">
                Book a free 15-minute chat and we'll point you to the right option.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Book a free chat
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="surface-dark px-5 py-16 text-background md:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-background/60">
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            From first message to first session
          </h2>
          <p className="mt-4 max-w-[52ch] text-pretty text-background/70">
            Three simple steps — most students are booked in within a few days.
          </p>
          <div className="relative mt-10 grid gap-8 md:grid-cols-3 md:gap-5">
            {STEPS.map((s) => (
              <div key={s.step} className="relative border-l border-background/20 pl-12 md:border-l-0 md:border-t md:pl-0 md:pt-8">
                <span className="absolute left-0 top-0 grid size-8 -translate-x-1/2 place-items-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground md:left-0 md:-translate-y-1/2 md:translate-x-0">
                  0{s.step}
                </span>
                <h3 className="font-display text-xl font-semibold text-background">
                  {s.title}
                </h3>
                <p className="mt-2 text-pretty text-dark-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
