"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { categories } from "@/lib/data";

const fieldClasses =
  "w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-primary-soft focus:outline-none";

export function CreateProjectDialog({ triggerVariant }: { triggerVariant?: "primary" | "light" }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // Todavía no hay backend: solo se registra el proyecto
    console.log("New project:", data);
    e.currentTarget.reset();
    setOpen(false);
  };

  return (
    <>
      <Button type="button" variant={triggerVariant} onClick={() => setOpen(true)}>
        <Plus size={18} /> Create project
      </Button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === dialogRef.current && setOpen(false)}
        className="w-[calc(100%-2.5rem)] max-w-lg rounded-3xl border border-line bg-surface p-0 text-ink backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <form onSubmit={handleSubmit} className="p-7">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Create a project</h2>
              <p className="mt-1 text-sm text-muted">Share your idea and the roles you need.</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-lg p-1.5 text-muted hover:bg-elevated hover:text-ink"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Project name</span>
              <input name="title" required placeholder="e.g. StudySync" className={fieldClasses} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Description</span>
              <textarea
                name="description"
                required
                rows={3}
                placeholder="What are you building and for whom?"
                className={fieldClasses}
              />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Category</span>
                <select name="category" className={fieldClasses} defaultValue="Education">
                  {categories.slice(1).map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Roles needed</span>
                <input name="roles" placeholder="Front-end, Designer" className={fieldClasses} />
              </label>
            </div>
          </div>

          <div className="mt-7 flex justify-end gap-3">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Publish project</Button>
          </div>
        </form>
      </dialog>
    </>
  );
}
