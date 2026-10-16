import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function AuthShell({
  title,
  subtitle,
  switchText,
  switchHref,
  switchLabel,
  children,
}: {
  title: string;
  subtitle: string;
  switchText: string;
  switchHref: string;
  switchLabel: string;
  children: React.ReactNode;
}) {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Panel de marca */}
      <aside className="relative hidden overflow-hidden bg-surface lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-[480px] w-[480px] rounded-full bg-primary/40 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-brand-pink/25 blur-[120px]" />
        <Logo className="relative" />
        <div className="relative">
          <Image
            src="/img/Imagen Vectorial.png"
            alt=""
            width={881}
            height={776}
            loading="eager"
            className="mx-auto h-auto w-4/5 max-w-md drop-shadow-[0_40px_80px_rgba(86,3,222,0.5)]"
          />
          <h2 className="mt-10 text-4xl font-bold leading-tight tracking-heading text-white">
            Develop your dreams.
          </h2>
          <p className="mt-3 max-w-sm text-lg text-muted">
            Join builders who turn ideas into real projects, together.
          </p>
        </div>
        <p className="relative text-xs text-muted">© StartApp</p>
      </aside>

      {/* Formulario */}
      <section className="flex items-center justify-center px-5 py-16">
        <div className="w-full max-w-sm">
          <Logo compact className="lg:hidden" />
          <h1 className="mt-8 text-3xl font-bold tracking-heading text-white lg:mt-0">{title}</h1>
          <p className="mt-2 text-muted">{subtitle}</p>
          <div className="mt-8">{children}</div>
          <p className="mt-8 text-center text-sm text-muted">
            {switchText}{" "}
            <Link href={switchHref} className="font-semibold text-primary-soft hover:text-white">
              {switchLabel}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
