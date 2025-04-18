import Image from "next/image";
import Link from "next/link";

import { Locale } from "@/types/common";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

import { cn } from "@/utils/cn";

interface CardProps {
  slug: string;
  name: string;
  photo: string;
  quote: string;
  locale: Locale;
}

export const Card = ({ slug, name, photo, quote, locale }: CardProps) => {
  return (
    <Link
      href={`/${locale}/artists/${slug}`}
      className={cn(
        "group grid grid-rows-[20px_1fr_56px] gap-3 rounded-xs p-3 transition duration-200 ease-in outline-none",
        "hover:bg-neutral-900 hover:text-neutral-50",
        "active:bg-neutral-800 active:text-neutral-50",
        "focus-visible:bg-neutral-900 focus-visible:text-neutral-50",
      )}
    >
      <span className="text-sm font-medium">{name}</span>

      <div className="relative">
        <Image
          src={photo}
          alt=""
          fill
          placeholder={IMAGE_PLACEHOLDER}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="rounded-xs object-cover"
        />
      </div>

      <p
        className={cn(
          "line-clamp-3 text-sm text-neutral-600 transition duration-200 ease-in",
          "group-hover:text-neutral-200",
          "group-active:text-neutral-200",
          "group-focus-visible:text-neutral-200",
        )}
      >
        {`“${quote}”`}
      </p>
    </Link>
  );
};
