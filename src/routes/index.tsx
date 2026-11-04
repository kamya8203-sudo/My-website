import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-students.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brightside Studio — Tutoring & skills for students" },
      {
        name: "description",
        content:
          "Friendly tutoring, skill coaching and everyday help for students and young customers. Fair prices, real results.",
      },
      { property: "og:title", content: "Brightside Studio — Tutoring & skills for students" },
      {
        property: "og:description",
        content:
          "Friendly tutoring, skill coaching and everyday help for students and young customers. Fair prices, real results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const QUICK_HELP = [
  {
    title: "1-on-1 tutoring",
    body: "Clear explanations for the topics that keep you up at night — at your pace, in plain language.",
  },
  {
    title: "Skill coaching",
    body: "Coding, design, writing or presenting. Build something real you can show off.",
  },
  {
    title: "Everyday help",
    body: "CVs, study plans, applications — the small stuff that quietly piles up.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="dot-grid overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
              Made for students & young go-getters
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] text-balance text-foreground md:text-7xl">
              Learn it. Build it. <span className="text-primary">Feel ready.</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg text-pretty text-muted-foreground">
              Brightside Studio is a small, friendly team offering tutoring, skill coaching and
              everyday help — no jargon, no pressure, just real support that fits a student budget.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                See our services
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg border-2 border-foreground bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                Say hello
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <span className="font-display text-3xl font-bold text-foreground">300+</span>
                <span className="block text-sm text-muted-foreground">students helped</span>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-foreground">4.9</span>
                <span className="block text-sm text-muted-foreground">average rating</span>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-foreground">24h</span>
                <span className="block text-sm text-muted-foreground">reply time</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative">
              <img
                src={heroImg}
                alt="Two students studying together at a sunny table"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-lg object-cover shadow-card"
              />
              <div className="absolute -bottom-5 left-5 rounded-lg border border-border bg-card px-5 py-4 shadow-card">
                <div className="text-xs font-semibold text-muted-foreground">Next opening</div>
                <div className="font-display text-lg font-bold text-foreground">This week</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short intro */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="max-w-[52ch]">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl">
            Small studio, real support
          </h2>
          <p className="mt-4 text-lg text-pretty text-muted-foreground">
            We're not a big agency — we're a handful of people who've been students recently enough
            to remember what actually helps. Here's where we can step in:
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {QUICK_HELP.map((item, i) => (
            <div key={item.title} className="rounded-lg border border-border bg-card p-7 shadow-card">
              <span className="grid size-11 place-items-center rounded-lg bg-primary/15 font-display text-lg font-bold text-primary">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-pretty text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
        <div className="surface-dark rounded-lg px-6 py-14 text-center md:px-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-background md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-pretty text-background/70">
            Book a free 15-minute chat and we'll point you to the right option — no strings
            attached.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-block rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Book a free chat
          </Link>
        </div>
      </section>
    </>
  );
}
