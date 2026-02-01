"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialIconProps {
  href: string;
  hover: string;
  children: React.ReactNode;
}

export default function SocialIcon({
  href,
  hover,
  children,
}: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="relative group"
      aria-label="social link"
    >
      {/* LIGHT MODE ICON */}
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full",
          "border border-black/30 text-black",
          "transition-all duration-300",
          "group-hover:text-white",
          hover,
          "dark:hidden"
        )}
      >
        {children}
      </span>

      {/* DARK MODE ICON */}
      <span
        className={cn(
          "hidden dark:flex h-10 w-10 items-center justify-center rounded-full",
          "border border-white/30 text-white",
          "transition-all duration-300",
          "group-hover:text-white",
          hover
        )}
      >
        {children}
      </span>
    </Link>
  );
}
