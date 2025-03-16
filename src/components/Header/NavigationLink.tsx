"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const { locale } = useParams<{ locale: Locale }>();

  const isActive = pathname.startsWith(`/${locale}${href}`);

  return (
    <Link
      href={`/${locale}${href}`}
      className={cn(
        "border-b border-transparent px-2 py-1 text-sm",
        "transition duration-300 outline-none",
        {
          [cn(
            "bg-neutral-900 text-neutral-50",
            "focus:border-neutral-50",
            "hover:border-neutral-50",
            "active:border-neutral-200 active:text-neutral-200",
            { "border-neutral-50": isActive },
          )]: variant === "def",
          [cn(
            "focus:border-neutral-900",
            "hover:border-neutral-900",
            "active:border-neutral-700 active:text-neutral-700",
            { "border-neutral-900": isActive },
          )]: variant === "alt",
        },
        className,
      )}
    >
      {title}
    </Link>
  );
};
