import type { Metadata } from "next";
import { AppShell } from "@/components/app/AppShell";
import { NotificationCenter } from "@/components/app/NotificationCenter";
import { SuggestedPeople } from "@/components/app/SuggestedPeople";
import { notifications } from "@/lib/data";

export const metadata: Metadata = { title: "Notifications" };

export default function NotificationsPage() {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <AppShell unread={unread}>
      <div className="grid gap-8 xl:grid-cols-[1fr_340px]">
        <div className="min-w-0">
          <h1 className="text-3xl font-bold tracking-heading text-white md:text-4xl">Notifications</h1>
          <p className="mt-2 text-muted">Requests to join your projects and updates from your teams.</p>
          <div className="mt-8">
            <NotificationCenter initial={notifications} />
          </div>
        </div>
        <div>
          <SuggestedPeople />
        </div>
      </div>
    </AppShell>
  );
}
