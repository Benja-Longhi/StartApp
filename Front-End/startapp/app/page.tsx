import Image from "next/image";
import { ArrowRight, Lightbulb, Rocket, Search, Sparkles, Target, Users } from "lucide-react";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/Avatar";
import { projects } from "@/lib/data";

const features = [
  {
    icon: Users,
    title: "Find the teammates your idea is missing.",
    body: "Tell us what you are good at and what you need. We match you with people whose skills complete your team.",
    stat: "8",
    statLabel: "skill areas to match on",
  },
  {
    icon: Target,
    title: "Turn a side idea into a real project.",
    body: "Publish your project, list the open roles and let builders apply. Keep everything about your team in one place.",
    stat: "5 min",
    statLabel: "to publish your project",
  },
];

const steps = [
  {
    icon: Lightbulb,
    title: "Share your idea",
    body: "Create a project in minutes: what it is, where it stands and which roles you need.",
  },
  {
    icon: Search,
    title: "Find your people",
    body: "Browse builders by skill, or let them find you. Accept the requests that fit.",
  },
  {
    icon: Rocket,
    title: "Build together",
    body: "Move from idea to launch with a team that is as committed as you are.",
  },
];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <SiteHeader />

      <main className="overflow-x-clip">
        {/* Hero */}
        <section className="relative">
          <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] animate-glow rounded-full bg-primary/30 blur-[140px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-36 md:grid-cols-[1.1fr_1fr] md:pb-28 md:pt-44">
            <div>
              <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs font-medium text-muted">
                <Sparkles size={14} className="text-primary-soft" />
                Where student ideas become startups
              </span>
              <h1 className="anim-delay-100 mt-6 animate-fade-up text-5xl font-bold leading-[1.05] tracking-heading text-white md:text-7xl">
                Build your own{" "}
                <span className="animate-gradient-pan bg-brand-gradient bg-[length:200%_auto] bg-clip-text text-transparent">team project</span>
              </h1>
              <p className="anim-delay-200 mt-6 max-w-lg animate-fade-up text-lg leading-relaxed text-muted md:text-xl">
                Connect ideas with people to create startups and unique ventures. Find teammates, share
                projects and build something real.
              </p>
              <div className="anim-delay-300 mt-10 flex animate-fade-up flex-wrap gap-3">
                <ButtonLink href="/signup" size="lg">
                  Get started <ArrowRight size={18} />
                </ButtonLink>
                <ButtonLink href="/projects" size="lg" variant="outline">
                  Explore projects
                </ButtonLink>
              </div>
            </div>
            <div className="anim-delay-300 relative mx-auto w-full max-w-md animate-fade-in md:max-w-none">
              <Image
                src="/img/Imagen Vectorial.png"
                alt=""
                width={881}
                height={776}
                priority
                className="relative h-auto w-full animate-float drop-shadow-[0_40px_80px_rgba(86,3,222,0.45)]"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl space-y-6 px-5 py-12">
          {features.map(({ icon: Icon, title, body, stat, statLabel }, index) => (
            <Reveal
              key={title}
              className="grid items-center gap-10 rounded-3xl border border-line/60 bg-surface p-8 md:grid-cols-2 md:p-14"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-soft">
                  <Icon size={22} />
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-heading text-white md:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{body}</p>
                <p className="mt-8 text-5xl font-bold text-white">{stat}</p>
                <p className="mt-1 text-sm text-muted">{statLabel}</p>
              </div>
              <FeatureVisual index={index} />
            </Reveal>
          ))}
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-heading text-white md:text-5xl">How it works</h2>
            <p className="mt-4 text-lg text-muted">Three steps from a rough idea to a team that ships.</p>
          </Reveal>
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, body }, index) => (
              <Reveal
                as="li"
                key={title}
                delay={index * 120}
                className="group rounded-3xl border border-line/60 bg-surface p-8 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-soft transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <span className="text-sm font-semibold text-muted">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{body}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Featured projects */}
        <section id="community" className="relative scroll-mt-24 py-24">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[400px] max-w-4xl -translate-y-1/2 rounded-full bg-brand-violet/20 blur-[140px]" />
          <div className="relative mx-auto max-w-6xl px-5">
            <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-4xl font-bold tracking-heading text-white md:text-5xl">
                  Projects looking for you
                </h2>
                <p className="mt-4 text-lg text-muted">A few of the teams building on StartApp right now.</p>
              </div>
              <ButtonLink href="/projects" variant="outline">
                See all projects <ArrowRight size={16} />
              </ButtonLink>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {featured.map((project, index) => (
                <Reveal
                  as="article"
                  key={project.id}
                  delay={index * 120}
                  className="flex flex-col rounded-3xl border border-line/60 bg-surface p-7 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-3">
                    <Avatar name={project.owner} />
                    <div>
                      <p className="text-sm font-semibold text-white">{project.owner}</p>
                      <p className="text-xs text-muted">{project.category}</p>
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">{project.description}</p>
                  {project.openRoles.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.openRoles.map((role) => (
                        <span key={role} className="rounded-full bg-elevated px-3 py-1 text-xs font-medium text-ink">
                          {role}
                        </span>
                      ))}
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-brand-gradient bg-[length:200%_200%] px-8 py-16 text-center animate-gradient-pan md:px-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-float rounded-full bg-white/10 blur-2xl" />
              <h2 className="relative text-4xl font-bold tracking-heading text-white md:text-5xl">
                Your next team starts here.
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/80">
                Create a free account, tell us your skills and start building with people who share your drive.
              </p>
              <div className="relative mt-10 flex justify-center">
                <ButtonLink href="/signup" size="lg" variant="light">
                  Create your account <ArrowRight size={18} />
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

function FeatureVisual({ index }: { index: number }) {
  if (index === 0) {
    const people = [
      { name: "Camila Torres", role: "Product designer", match: 96 },
      { name: "Nicolás Herrera", role: "Back-end developer", match: 91 },
      { name: "Julieta Castro", role: "Growth & marketing", match: 87 },
    ];
    return (
      <div className="space-y-3 rounded-2xl border border-line/60 bg-canvas/60 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">Suggested for your team</p>
        {people.map((person) => (
          <div key={person.name} className="flex items-center gap-3 rounded-xl bg-elevated/70 p-3">
            <Avatar name={person.name} />
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">{person.name}</p>
              <p className="text-xs text-muted">{person.role}</p>
            </div>
            <span className="rounded-full bg-primary/20 px-2.5 py-1 text-xs font-semibold text-primary-soft">
              {person.match}% match
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line/60 bg-canvas/60 p-6">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-white">GreenRoute</p>
        <span className="rounded-full bg-success/15 px-2.5 py-1 text-xs font-semibold text-success">Recruiting</span>
      </div>
      <p className="mt-2 text-sm text-muted">Lowest-emission routes across the city.</p>
      <div className="mt-6 space-y-3">
        {[
          { role: "Front-end developer", filled: true },
          { role: "Data scientist", filled: false },
          { role: "UI designer", filled: true },
        ].map((slot) => (
          <div key={slot.role} className="flex items-center justify-between rounded-xl bg-elevated/70 px-4 py-3">
            <span className="text-sm text-ink">{slot.role}</span>
            <span className={slot.filled ? "text-xs font-semibold text-muted" : "text-xs font-semibold text-primary-soft"}>
              {slot.filled ? "Filled" : "Open"}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="flex justify-between text-xs text-muted">
          <span>Team progress</span>
          <span>67%</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-elevated">
          <div className="h-2 w-2/3 animate-gradient-pan rounded-full bg-brand-gradient bg-[length:200%_auto]" />
        </div>
      </div>
    </div>
  );
}
