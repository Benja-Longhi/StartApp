"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Divider, PasswordField, SocialButtons, TextField } from "./fields";

export function LoginForm() {
  const [form, setForm] = useState({ user: "", password: "", remember: false });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Todavía no hay backend: solo se registra el intento
    console.log("Login:", { user: form.user, remember: form.remember });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <SocialButtons />
      <Divider label="or continue with email" />
      <TextField
        label="Username or email"
        name="user"
        autoComplete="username"
        placeholder="you@example.com"
        value={form.user}
        onChange={(e) => setForm({ ...form, user: e.target.value })}
        required
      />
      <PasswordField
        name="password"
        autoComplete="current-password"
        placeholder="Enter your password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <label className="flex items-center gap-2 text-sm text-muted">
        <input
          type="checkbox"
          checked={form.remember}
          onChange={(e) => setForm({ ...form, remember: e.target.checked })}
          className="h-4 w-4 rounded border-line bg-surface accent-primary"
        />
        Remember me
      </label>
      <Button type="submit" size="lg" className="w-full">
        Log in
      </Button>
    </form>
  );
}
