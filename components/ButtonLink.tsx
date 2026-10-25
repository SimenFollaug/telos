import Link from "next/link";

const styles = {
  navy: "bg-navy hover:bg-navy-deep",
  gold: "bg-gold hover:bg-gold-deep",
  outline: "border border-navy bg-transparent hover:bg-navy",
} as const;

const colors = {
  navy: "var(--sand)",
  gold: "var(--navy)",
  outline: "var(--navy)",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "navy",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      data-variant={variant}
      className={`btn-link inline-flex min-w-0 items-center justify-center px-5 py-3 font-[family-name:var(--font-display)] text-[11px] tracking-[0.18em] uppercase transition sm:min-w-[140px] sm:px-7 sm:tracking-[0.22em] ${styles[variant]} ${className}`}
      style={{ color: colors[variant] }}
    >
      {children}
    </Link>
  );
}
