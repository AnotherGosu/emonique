import Image from "next/image";
import Link from "next/link";

import { Locale } from "@/types/common";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

import { cn } from "@/utils/cn";

interface CardProps {
  slug: string;
  image: string;
  name: string;
  artist: string;
  locale: Locale;
  className?: string;
}

export const Card = ({
  slug,
  image,
  name,
  artist,
  locale,
  className,
}: CardProps) => {
  return (
    <Link
      href={`/${locale}/gallery/${slug}`}
      className={cn(
        "group grid grid-rows-[1fr_36px] gap-3 rounded-xs p-3 transition duration-200 ease-in outline-none",
        "hover:bg-neutral-900 hover:text-neutral-50",
        "active:bg-neutral-800 active:text-neutral-50",
        "focus-visible:bg-neutral-900 focus-visible:text-neutral-50",
        className,
      )}
    >
      <div className="relative">
        <Image
          src={image}
          alt=""
          fill
          placeholder={IMAGE_PLACEHOLDER}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="rounded-xs object-cover"
        />
      </div>

      <div>
        <div className="text-sm font-medium">{name}</div>

        <div
          className={cn(
            "text-xs text-neutral-600 transition duration-200 ease-in",
            "group-hover:text-neutral-200",
            "group-active:text-neutral-200",
            "group-focus-visible:text-neutral-200",
          )}
        >{`by ${artist}`}</div>
      </div>
    </Link>
  );
};
