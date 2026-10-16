import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = { title: "Sign up" };

export default function SignupPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Tell us what you're good at and start finding your team."
      switchText="Already have an account?"
      switchHref="/login"
      switchLabel="Log in"
    >
      <SignupForm />
    </AuthShell>
  );
}
