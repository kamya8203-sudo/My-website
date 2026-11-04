import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about-studio.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Brightside Studio" },
      {
        name: "description",
        content:
          "Meet Brightside Studio: a small, friendly team built by students, for students. Honest pricing, flexible scheduling, zero judgment.",
      },
      { property: "og:title", content: "About — Brightside Studio" },
      {
        property: "og:description",
        content:
          "Meet Brightside Studio: a small, friendly team built by students, for students. Honest pricing, flexible scheduling, zero judgment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    title: "Honest",
    body: "Real prices published up front, plain language, and no surprises on the invoice. If we're not the right fit, we'll say so.",
  },
  {
    title: "Friendly",
    body: "No judgment, ever. Everyone starts somewhere — we meet you exactly where you are and move at your pace.",
  },
  {
    title: "Flexible",
    body: "Evenings, weekends, between classes. Sessions fit around your timetable, not the other way around.",
  },
  {
    title: "Affordable",
    body: "Priced for a student budget, and every engagement starts with a free chat so you never pay before you're sure.",
  },
];

const WHO = [
  {
    title: "School & college students",
    body: "Homework help, tricky subjects, and steady support through exam season.",
  },
  {
    title: "University students",
    body: "Coursework, revision planning, and skills that go beyond the syllabus.",
  },
  {
    title: "First-jobbers",
    body: "CVs, applications, and interview prep for your first step into work.",
  },
];

function About() {
  return (
    <>
      <section className="dot-grid">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase text-primary">
            About us
          </span>
          <h1 className="mt-5 max-w-[24ch] font-display text-4xl font-bold leading-tight text-balance text-foreground md:text-6xl">
            Built by students, <span className="text-primary">for students.</span>
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg text-pretty text-muted-foreground">
            Brightside Studio is a small learning studio with one mission: make good academic and
            career support simple, personal, and affordable for students and young people.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 md:grid-cols-12 md:pb-20">
        <div className="md:col-span-5">
          <img
            src={aboutImg}
            alt="A Brightside mentor talking with a student in the studio"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-square w-full rounded-lg object-cover shadow-card"
          />
        </div>
        <div className="md:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Our story
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl">
            It started by helping friends.
          </h2>
          <div className="mt-5 space-y-4 text-pretty text-muted-foreground">
            <p>
              Brightside began the way most good things do — with a favour. Friends kept asking for
              the same kinds of help: a stuck essay, a confusing topic, a CV that needed a rewrite.
              Those small favours turned into study groups, and the study groups turned into a
              studio.
            </p>
            <p>
              We're still small on purpose. Every student works with a real person who remembers
              their name, their goals, and where they left off last session. No ticket queues, no
              call centres — just straightforward help from people who've sat the same exams.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Who we help
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Support for every stage
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {WHO.map((w) => (
            <div key={w.title} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl font-semibold text-foreground">{w.title}</h3>
              <p className="mt-2 text-pretty text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Our values
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          What we stand for
        </h2>
        <p className="mt-4 max-w-[56ch] text-pretty text-muted-foreground">
          Four principles guide every session, every price, and every reply we send.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-lg border border-border bg-card p-7 shadow-card">
              <h3 className="font-display text-2xl font-semibold text-primary">{v.title}</h3>
              <p className="mt-2 text-pretty text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="font-display text-xl font-semibold text-foreground">
            Sound like your kind of studio?
          </p>
          <Link
            to="/services"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            See what we offer
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
