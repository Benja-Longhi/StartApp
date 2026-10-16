"use client";

import { useState } from "react";
import clsx from "clsx";
import { CheckCheck, Heart, MessageCircle, UserPlus, X, Check } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import type { Notification } from "@/lib/data";

type Tab = "all" | "unread" | "requests";

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "unread", label: "Unread" },
  { id: "requests", label: "Requests" },
];

function describe(n: Notification) {
  switch (n.kind) {
    case "join_request":
      return { text: <>wants to join <b className="text-white">{n.project}</b></>, icon: UserPlus, tone: "text-primary-soft bg-primary/15" };
    case "accepted":
      return { text: <>accepted you into <b className="text-white">{n.project}</b></>, icon: Check, tone: "text-success bg-success/15" };
    case "declined":
      return { text: <>declined your request for <b className="text-white">{n.project}</b></>, icon: X, tone: "text-danger bg-danger/15" };
    case "like":
      return { text: <>liked <b className="text-white">{n.project}</b></>, icon: Heart, tone: "text-brand-pink bg-brand-pink/15" };
    case "message":
      return { text: <>sent a message in <b className="text-white">{n.project}</b></>, icon: MessageCircle, tone: "text-sky-400 bg-sky-400/15" };
  }
}

export function NotificationCenter({ initial }: { initial: Notification[] }) {
  const [items, setItems] = useState(initial);
  const [tab, setTab] = useState<Tab>("all");
  const [responses, setResponses] = useState<Record<string, "accepted" | "declined">>({});

  const unread = items.filter((n) => !n.read).length;
  const visible = items.filter((n) =>
    tab === "unread" ? !n.read : tab === "requests" ? n.kind === "join_request" : true
  );

  const markRead = (id: string) =>
    setItems((current) => current.map((n) => (n.id === id ? { ...n, read: true } : n)));

  const respond = (id: string, answer: "accepted" | "declined") => {
    setResponses((current) => ({ ...current, [id]: answer }));
    markRead(id);
  };

  return (
    <div className="rounded-3xl border border-line/60 bg-surface">
      <div className="flex flex-col gap-4 border-b border-line/60 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" aria-label="Filter notifications" className="flex gap-1 rounded-2xl bg-canvas p-1">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={clsx(
                "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                tab === id ? "bg-elevated text-white" : "text-muted hover:text-ink"
              )}
            >
              {label}
              {id === "unread" && unread > 0 && (
                <span className="ml-2 rounded-full bg-brand-pink px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {unread}
                </span>
              )}
            </button>
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          disabled={unread === 0}
          onClick={() => setItems((current) => current.map((n) => ({ ...n, read: true })))}
        >
          <CheckCheck size={16} /> Mark all as read
        </Button>
      </div>

      {visible.length === 0 ? (
        <p className="px-6 py-16 text-center text-muted">You&apos;re all caught up.</p>
      ) : (
        <ul className="divide-y divide-line/60">
          {visible.map((n, index) => {
            const { text, icon: Icon, tone } = describe(n);
            const response = responses[n.id];
            return (
              <li
                key={`${tab}-${n.id}`}
                onClick={() => !n.read && markRead(n.id)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={clsx(
                  "flex animate-fade-up gap-4 p-6 transition-colors duration-300",
                  !n.read && "cursor-pointer bg-primary/[0.04] hover:bg-primary/[0.08]"
                )}
              >
                <div className="relative">
                  <Avatar name={n.from} />
                  <span className={clsx("absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-surface", tone)}>
                    <Icon size={11} />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted">
                    <b className="text-white">{n.from}</b> {text}
                  </p>
                  <p className="mt-1 text-xs text-muted/80">{n.time}</p>

                  {n.kind === "join_request" &&
                    (response ? (
                      <p className={clsx("mt-3 animate-fade-in text-xs font-semibold", response === "accepted" ? "text-success" : "text-muted")}>
                        {response === "accepted" ? "Request accepted" : "Request declined"}
                      </p>
                    ) : (
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" onClick={(e) => { e.stopPropagation(); respond(n.id, "accepted"); }}>
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); respond(n.id, "declined"); }}>
                          Decline
                        </Button>
                      </div>
                    ))}
                </div>
                {!n.read && <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-pink" aria-label="Unread" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
