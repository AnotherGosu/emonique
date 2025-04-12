"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { Locale } from "@/types/common";

import { cn } from "@/utils/cn";

interface NavigationLinkProps {
  title: string;
  href: string;
  variant?: "def" | "alt";
  className?: string;
}

export const NavigationLink = ({
  title,
  href,
  variant = "def",
  className,
}: NavigationLinkProps) => {
  const { locale } = useParams<{ locale: Locale }>();

  return (
    <Link
      href={`/${locale}${href}`}
      className={cn(
        "border-b border-transparent pb-1 text-sm",
        "transition duration-300 outline-none",
        {
          [cn(
            "bg-neutral-900 text-neutral-50",
            "focus-visible:border-neutral-50",
            "hover:border-neutral-50",
            "active:border-neutral-50",
          )]: variant === "def",
          [cn(
            "focus-visible:border-neutral-900",
            "hover:border-neutral-900",
            "active:border-neutral-900",
          )]: variant === "alt",
        },
        className,
      )}
    >
      {title}
    </Link>
  );
};
