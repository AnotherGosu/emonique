"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { Locale } from "@/types/common";

import { cn } from "@/utils/cn";

export const TitleLink = () => {
  const { locale } = useParams<{ locale: Locale }>();

  return (
    <Link
      href={`/${locale}`}
      className={cn(
        "font-heading border-b border-transparent pb-1 text-2xl font-bold text-neutral-50",
        "transition duration-300 outline-none",
        "focus-visible:border-neutral-50",
        "hover:border-neutral-50",
        "active:border-neutral-50",
      )}
    >
      Emonique
    </Link>
  );
};
