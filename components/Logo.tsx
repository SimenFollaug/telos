import Image from "next/image";
import { site } from "@/lib/site";

type Props = {
  variant?: "gold" | "cream";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { w: 40, h: 40 },
  md: { w: 72, h: 72 },
  lg: { w: 132, h: 132 },
};

export function Logo({ variant = "gold", size = "md", className = "" }: Props) {
  const { w, h } = sizes[size];
  const src = variant === "gold" ? site.images.logoGold : site.images.logoCream;

  return (
    <Image
      src={src}
      alt={site.name}
      width={w}
      height={h}
      className={`object-contain ${size === "lg" ? "h-20 w-20 sm:h-[132px] sm:w-[132px]" : ""} ${className}`}
      priority
    />
  );
}
