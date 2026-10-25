export function GoldRibbon({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gold px-3 py-2.5 text-center sm:px-4">
      <p className="font-[family-name:var(--font-display)] text-[9px] leading-snug tracking-[0.12em] text-navy uppercase sm:text-[11px] sm:tracking-[0.28em]">
        {children}
      </p>
    </div>
  );
}
