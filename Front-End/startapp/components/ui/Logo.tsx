import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={clsx("inline-flex items-center", className)} aria-label="StartApp home">
      {compact ? (
        <Image src="/img/StartApp-Logo-sm.png" alt="StartApp" width={40} height={39} priority />
      ) : (
        <Image
          src="/img/StartApp-Logo-lg.png"
          alt="StartApp"
          width={431}
          height={138}
          priority
          className="h-8 w-auto"
        />
      )}
    </Link>
  );
}
