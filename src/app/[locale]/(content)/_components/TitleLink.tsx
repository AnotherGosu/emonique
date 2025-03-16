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
        "font-heading border-b border-transparent px-2 py-1 text-2xl font-bold text-neutral-50",
        "transition duration-300 outline-none",
        "focus:border-neutral-50",
        "hover:border-neutral-50",
        "active:border-neutral-200 active:text-neutral-200",
      )}
    >
      Emonique
    </Link>
  );
};
