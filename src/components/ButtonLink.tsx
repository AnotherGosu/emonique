"use client";

import { MoveRightIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useParams } from "next/navigation";
import { PropsWithChildren } from "react";

import { Locale } from "@/types/common";

import { cn } from "@/utils/cn";

export interface ButtonLinkProps extends LinkProps, PropsWithChildren {
  variant?: "def" | "alt";
  className?: string;
}

export const ButtonLink = ({
  href,
  children,
  variant = "def",
  className,
  ...props
}: ButtonLinkProps) => {
  const { locale } = useParams<{ locale: Locale }>();

  return (
    <Link
      href={`/${locale}${href}`}
      className={cn(
        "group relative flex w-max items-center justify-center gap-2 py-1",
        "border-b border-transparent font-medium transition duration-300 outline-none",
        {
          [cn("hover:border-neutral-900", "focus-visible:border-neutral-900")]:
            variant === "def",
          [cn(
            "text-neutral-50",
            "hover:border-neutral-50",
            "focus-visible:border-neutral-50",
          )]: variant === "alt",
        },
        className,
      )}
      {...props}
    >
      {children}

      <div className="relative size-4">
        <MoveRightIcon
          className={cn(
            "absolute top-0 -left-0.5 size-4 transition-all ease-in",
            "group-hover:left-0",
            "group-focus:left-0",
            "group-active:left-0",
          )}
        />
      </div>
    </Link>
  );
};
