"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { Locale } from "@/types/common";

import { cn } from "@/utils/cn";

interface NavigationLinkProps {
  title: string;
  href: string;
}

export const NavigationLink = ({ title, href }: NavigationLinkProps) => {
  const { locale } = useParams<{ locale: Locale }>();

  return (
    <Link
      href={`/${locale}${href}`}
      className={cn(
        "rounded-xs transition outline-none",
        "hover:text-neutral-300",
        "active:text-neutral-400",
        "focus-visible:ring-2 focus-visible:ring-blue-500",
      )}
    >
      {title}
    </Link>
  );
};
