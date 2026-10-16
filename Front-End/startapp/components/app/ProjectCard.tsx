"use client";

import { useState } from "react";
import clsx from "clsx";
import { Heart, Users } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import type { Project, ProjectStatus } from "@/lib/data";

const statusStyles: Record<ProjectStatus, string> = {
  Recruiting: "bg-success/15 text-success",
  "In progress": "bg-warning/15 text-warning",
  Launched: "bg-primary/20 text-primary-soft",
};

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [liked, setLiked] = useState(false);
  const likes = project.likes + (liked ? 1 : 0);

  return (
    <article
      style={{ animationDelay: `${index * 60}ms` }}
      className="flex animate-fade-up flex-col rounded-3xl border border-line/60 bg-surface p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card-hover"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar name={project.owner} size="sm" />
          <div>
            <p className="text-sm font-semibold text-white">{project.owner}</p>
            <p className="text-xs text-muted">{project.category}</p>
          </div>
        </div>
        <span className={clsx("shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold", statusStyles[project.status])}>
          {project.status}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      {project.openRoles.length > 0 && (
        <div className="mt-5">
          <p className="text-xs font-medium text-muted">Looking for</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.openRoles.map((role) => (
              <span key={role} className="rounded-full bg-elevated px-3 py-1 text-xs font-medium text-ink">
                {role}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4 text-sm">
        <span className="flex items-center gap-1.5 text-muted">
          <Users size={16} /> {project.members} members
        </span>
        <button
          type="button"
          onClick={() => setLiked((value) => !value)}
          aria-pressed={liked}
          aria-label={liked ? "Unlike project" : "Like project"}
          className={clsx(
            "flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-colors",
            liked ? "text-brand-pink" : "text-muted hover:text-ink"
          )}
        >
          <Heart
            size={16}
            className={clsx("transition-transform duration-300", liked && "scale-125 fill-current")}
          />{" "}
          {likes}
        </button>
      </div>
    </article>
  );
}
