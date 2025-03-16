import { MoveRightIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

export interface ButtonLinkProps extends LinkProps, PropsWithChildren {
  variant?: "def" | "alt";
  className?: string;
}

export const ButtonLink = ({
  children,
  variant = "def",
  className,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      className={cn(
        "group flex h-8 w-max items-center justify-center gap-2 rounded-2xl border px-3 text-sm",
        "sm:h-10 sm:text-base",
        "transition duration-300 outline-none [&>svg]:size-5",
        "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        {
          [cn(
            "border-neutral-900",
            "hover:bg-neutral-900 hover:text-neutral-50",
            "focus:bg-neutral-900 focus:text-neutral-50",
            "active:bg-neutral-800",
          )]: variant === "def",
          [cn(
            "border-neutral-50 text-neutral-50",
            "hover:bg-neutral-50 hover:text-neutral-900",
            "focus:bg-neutral-50 focus:text-neutral-900",
            "active:bg-neutral-100",
          )]: variant === "alt",
        },
        className,
      )}
      {...props}
    >
      {children}
      <MoveRightIcon />
    </Link>
  );
};
