import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Brightside Studio" },
      {
        name: "description",
        content:
          "Get in touch with Brightside Studio. Tell us where you're stuck — we reply within 24 hours.",
      },
      { property: "og:title", content: "Contact — Brightside Studio" },
      {
        property: "og:description",
        content:
          "Get in touch with Brightside Studio. Tell us where you're stuck — we reply within 24 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const DETAILS = [
  { label: "Email", value: "hello@brightside.studio" },
  { label: "Phone", value: "+1 (555) 012-3456" },
  { label: "Hours", value: "Mon–Sat, 10am–8pm" },
  { label: "Where", value: "Online + campus pop-ups" },
];

const NEXT = [
  "We reply within 24 hours",
  "You get a free 15-minute chat",
  "No commitment — decide after we talk",
];

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="dot-grid px-5 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase text-primary">
              Contact
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-balance text-foreground md:text-6xl">
              Let's get you <span className="text-primary">unstuck.</span>
            </h1>
            <p className="mt-5 max-w-[38ch] text-lg text-pretty text-muted-foreground">
              Tell us what you need and we'll get back to you within a day. The first chat is
              always free.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
              How to reach us
            </h2>
            <dl className="mt-4 space-y-4 rounded-lg border border-border bg-card p-6 shadow-card">
              {DETAILS.map((d) => (
                <div key={d.label} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-2">
                  <dt className="text-sm font-semibold text-foreground">{d.label}</dt>
                  <dd className="text-sm text-muted-foreground">{d.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
              What happens next
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NEXT.map((n) => (
                <li key={n} className="flex items-start gap-2.5 text-pretty text-muted-foreground">
                  <span
                    className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-secondary text-[11px] font-bold text-secondary-foreground"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div>
            {sent ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center shadow-card">
                <span className="grid size-14 place-items-center rounded-full bg-secondary font-display text-2xl font-bold text-secondary-foreground">
                  ✓
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  Message sent!
                </h2>
                <p className="mt-2 max-w-[32ch] text-pretty text-muted-foreground">
                  Thanks for reaching out — we'll reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="rounded-lg border border-border bg-card p-7 shadow-card">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Send us a message
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Fill this in and we'll get back to you within a day.
                </p>
                <form onSubmit={handleSubmit} className="mt-5 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Alex"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring focus:ring-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@school.edu"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring focus:ring-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      What's this about? <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring focus:ring-2"
                    >
                      <option value="">Just a question</option>
                      <option value="tutoring">Subject tutoring</option>
                      <option value="coaching">Skill coaching</option>
                      <option value="exam-prep">Exam prep</option>
                      <option value="cv">CV &amp; everyday help</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      What do you need help with?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="I'm stuck on calculus and have a test in three weeks..."
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring focus:ring-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Send message
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    No spam, no pressure — we only use your details to reply.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
