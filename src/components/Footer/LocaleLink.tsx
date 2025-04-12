"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { Locale } from "@/types/common";

import { cn } from "@/utils/cn";

interface LocaleLinkProps {
  locale: Locale;
}

export const LocaleLink = ({ locale }: LocaleLinkProps) => {
  const pathname = usePathname();
  const params = useParams<{ locale: Locale }>();

  return (
    <Link
      href={pathname.replace(params.locale, locale)}
      className={cn(
        "rounded-xs uppercase transition outline-none",
        "hover:text-neutral-300",
        "active:text-neutral-400",
        "focus-visible:ring focus-visible:ring-blue-500",
      )}
    >
      {locale}
    </Link>
  );
};
