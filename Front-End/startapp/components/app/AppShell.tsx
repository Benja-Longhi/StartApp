"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Bell, FolderKanban, House, LogOut, Search, Settings } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Avatar } from "@/components/ui/Avatar";

const nav = [
  { label: "Home", href: "/", icon: House },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Notifications", href: "/notifications", icon: Bell },
];

export function AppShell({
  children,
  unread = 0,
}: {
  children: React.ReactNode;
  unread?: number;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen md:pl-24">
      {/* Sidebar (escritorio) */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-24 flex-col items-center border-r border-line/60 bg-surface py-6 md:flex">
        <Logo compact />
        <nav className="mt-12 flex flex-1 flex-col items-center gap-3" aria-label="Main">
          {nav.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                title={label}
                aria-label={label}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "group relative flex h-13 w-13 items-center justify-center rounded-2xl transition-all duration-200",
                  active ? "bg-primary text-white shadow-glow" : "text-muted hover:bg-elevated hover:text-ink"
                )}
              >
                <Icon size={22} className="transition-transform duration-200 group-hover:scale-110" />
                {label === "Notifications" && unread > 0 && !active && (
                  <span className="absolute right-3 top-3 h-2 w-2 animate-pulse rounded-full bg-brand-pink" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-col items-center gap-3 border-t border-line/60 pt-4">
          <button
            type="button"
            title="Settings"
            aria-label="Settings"
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-muted hover:bg-elevated hover:text-ink"
          >
            <Settings size={20} />
          </button>
          <Link
            href="/login"
            title="Log out"
            aria-label="Log out"
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-muted hover:bg-elevated hover:text-ink"
          >
            <LogOut size={20} />
          </Link>
        </div>
      </aside>

      {/* Barra superior */}
      <header className="sticky top-0 z-30 border-b border-line/60 bg-canvas/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-5 md:px-8">
          <Logo compact className="md:hidden" />
          <label className="relative flex-1 md:max-w-md">
            <span className="sr-only">Search</span>
            <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="search"
              placeholder="Search projects or people"
              className="h-12 w-full rounded-2xl border border-transparent bg-surface pl-11 pr-4 text-sm text-ink placeholder:text-muted focus:border-primary-soft focus:outline-none"
            />
          </label>
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/notifications"
              aria-label="Notifications"
              className="relative hidden h-12 w-12 items-center justify-center rounded-2xl bg-surface text-muted hover:text-ink sm:flex"
            >
              <Bell size={20} />
              {unread > 0 && <span className="absolute right-3 top-3 h-2 w-2 animate-pulse rounded-full bg-brand-pink" />}
            </Link>
            <Avatar name="Benjamín Longhi" className="h-12 w-12 rounded-2xl" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl animate-fade-up px-5 pb-28 pt-8 md:px-8 md:pb-12">{children}</main>

      {/* Barra inferior (móvil) */}
      <nav
        className="fixed inset-x-0 bottom-0 z-40 flex justify-around border-t border-line/60 bg-surface/95 py-2 backdrop-blur-xl md:hidden"
        aria-label="Main"
      >
        {nav.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              aria-current={active ? "page" : undefined}
              className={clsx(
                "flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-medium",
                active ? "text-white" : "text-muted"
              )}
            >
              <Icon size={20} className={active ? "text-primary-soft" : undefined} />
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
