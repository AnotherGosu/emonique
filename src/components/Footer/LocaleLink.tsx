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
        "uppercase transition",
        "hover:text-neutral-300",
        "active:text-neutral-400",
      )}
    >
      {locale}
    </Link>
  );
};
