import type { Metadata } from "next";
import { AppShell } from "@/components/app/AppShell";
import { CreateProjectDialog } from "@/components/app/CreateProjectDialog";
import { ProjectsBoard } from "@/components/app/ProjectsBoard";
import { SuggestedPeople } from "@/components/app/SuggestedPeople";
import { Avatar } from "@/components/ui/Avatar";
import { Panel } from "@/components/ui/Panel";
import { notifications } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <AppShell unread={unread}>
      <div className="grid gap-8 xl:grid-cols-[1fr_340px]">
        <div className="min-w-0 space-y-8">
          {/* Encabezado */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-brand-violet p-8 md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <p className="relative text-sm font-semibold text-white/80">Projects</p>
            <h1 className="relative mt-2 text-3xl font-bold tracking-heading text-white md:text-4xl">
              Find a team worth building with.
            </h1>
            <p className="relative mt-3 max-w-xl text-white/80">
              Join a project that needs your skills, or publish your own idea and let builders come to you.
            </p>
            <div className="relative mt-7">
              <CreateProjectDialog triggerVariant="light" />
            </div>
          </section>

          <ProjectsBoard />
        </div>

        {/* Columna derecha */}
        <div className="space-y-6">
          <Panel>
            <div className="flex items-center gap-4">
              <Avatar name="Benjamín Longhi" size="lg" />
              <div>
                <p className="font-semibold text-white">Benjamín Longhi</p>
                <p className="text-sm text-muted">Full-stack developer</p>
              </div>
            </div>
            <dl className="mt-6 grid grid-cols-3 divide-x divide-line/60 text-center">
              {[
                { label: "Projects", value: 2 },
                { label: "Followers", value: 48 },
                { label: "Following", value: 31 },
              ].map((stat) => (
                <div key={stat.label}>
                  <dd className="text-xl font-bold text-white">{stat.value}</dd>
                  <dt className="mt-1 text-xs text-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Panel>
          <SuggestedPeople />
        </div>
      </div>
    </AppShell>
  );
}
