"use client";

import { useState } from "react";
import clsx from "clsx";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { skillOptions } from "@/lib/data";
import { Divider, PasswordField, SocialButtons, TextField } from "./fields";

export function SignupForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [skills, setSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) =>
    setSkills((current) =>
      current.includes(skill) ? current.filter((s) => s !== skill) : [...current, skill]
    );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Todavía no hay backend: solo se registra el intento
    console.log("Sign up:", { username: form.username, email: form.email, skills });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <SocialButtons />
      <Divider label="or sign up with email" />
      <TextField
        label="Username"
        name="username"
        autoComplete="username"
        placeholder="Choose a username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <PasswordField
        name="password"
        autoComplete="new-password"
        placeholder="At least 8 characters"
        minLength={8}
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-ink">
          Your skills <span className="font-normal text-muted">(pick any)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {skillOptions.map((skill) => {
            const selected = skills.includes(skill);
            return (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill)}
                aria-pressed={selected}
                className={clsx(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  selected
                    ? "border-primary bg-primary/20 text-white"
                    : "border-line text-muted hover:border-muted hover:text-ink"
                )}
              >
                {selected && <Check size={12} />}
                {skill}
              </button>
            );
          })}
        </div>
      </fieldset>
      <Button type="submit" size="lg" className="w-full">
        Create account
      </Button>
    </form>
  );
}
