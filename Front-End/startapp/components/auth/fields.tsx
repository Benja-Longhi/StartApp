"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

const inputClasses =
  "h-12 w-full rounded-xl border border-line bg-surface px-4 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-primary-soft focus:outline-none";

export function TextField({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      <input className={inputClasses} {...props} />
    </label>
  );
}

export function PasswordField({
  label = "Password",
  ...props
}: { label?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      <span className="relative block">
        <input type={visible ? "text" : "password"} className={`${inputClasses} pr-12`} {...props} />
        <button
          type="button"
          onClick={() => setVisible((value) => !value)}
          className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-muted hover:text-ink"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </span>
    </label>
  );
}

export function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        className="flex h-11 items-center justify-center gap-2 rounded-xl border border-line text-sm font-medium text-ink transition-colors hover:bg-elevated"
      >
        <Image src="/svg/google.svg" alt="" width={18} height={18} />
        Google
      </button>
      <button
        type="button"
        className="flex h-11 items-center justify-center gap-2 rounded-xl border border-line text-sm font-medium text-ink transition-colors hover:bg-elevated"
      >
        <Image src="/svg/apple.svg" alt="" width={18} height={18} className="invert" />
        Apple
      </button>
    </div>
  );
}

export function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs text-muted">
      <span className="h-px flex-1 bg-line" />
      {label}
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
