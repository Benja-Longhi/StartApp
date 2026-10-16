"use client";

import { useState } from "react";
import clsx from "clsx";
import { Avatar } from "@/components/ui/Avatar";
import { Panel } from "@/components/ui/Panel";
import { suggestedPeople } from "@/lib/data";

export function SuggestedPeople() {
  const [following, setFollowing] = useState<string[]>([]);

  const toggle = (name: string) =>
    setFollowing((current) =>
      current.includes(name) ? current.filter((n) => n !== name) : [...current, name]
    );

  return (
    <Panel as="aside">
      <h2 className="text-xs font-bold uppercase tracking-wider text-ink">Suggested for you</h2>
      <ul className="mt-5 space-y-4">
        {suggestedPeople.map((person) => {
          const isFollowing = following.includes(person.name);
          return (
            <li key={person.name} className="flex items-center gap-3">
              <Avatar name={person.name} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">{person.name}</p>
                <p className="truncate text-xs text-muted">{person.role}</p>
              </div>
              <button
                type="button"
                onClick={() => toggle(person.name)}
                aria-pressed={isFollowing}
                className={clsx(
                  "h-8 shrink-0 rounded-lg px-3.5 text-xs font-semibold transition-colors",
                  isFollowing
                    ? "border border-line text-muted hover:text-ink"
                    : "bg-primary text-white hover:bg-primary-hover"
                )}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
