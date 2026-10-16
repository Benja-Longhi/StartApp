import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Log in" };

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to keep building with your team."
      switchText="New to StartApp?"
      switchHref="/signup"
      switchLabel="Create an account"
    >
      <LoginForm />
    </AuthShell>
  );
}
