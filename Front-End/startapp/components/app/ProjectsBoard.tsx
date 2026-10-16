"use client";

import { useState } from "react";
import clsx from "clsx";
import { categories, projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export function ProjectsBoard() {
  const [category, setCategory] = useState("All");
  const visible = category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <section aria-labelledby="projects-heading">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="projects-heading" className="text-xl font-bold text-white">
          Discover projects
        </h2>
        <p className="text-sm text-muted">{visible.length} projects</p>
      </div>

      <div className="-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
            className={clsx(
              "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95",
              category === item ? "bg-white text-canvas" : "bg-surface text-muted hover:text-ink"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
        {visible.map((project, index) => (
          <ProjectCard key={`${category}-${project.id}`} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
