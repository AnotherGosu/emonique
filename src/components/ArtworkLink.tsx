import Image from "next/image";
import Link from "next/link";

import { cn } from "@/utils/cn";

interface ArtworkLinkProps {
  id: string;
  image: string;
  name: string;
  artist: string;
  className?: string;
}

export const ArtworkLink = ({
  id,
  image,
  name,
  artist,
  className,
}: ArtworkLinkProps) => {
  return (
    <Link
      href={`/gallery/${id}`}
      className={cn(
        "rounded-xs p-3 transition duration-200 ease-in outline-none",
        "hover:bg-neutral-900 hover:text-neutral-50",
        "focus:bg-neutral-900 focus:text-neutral-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        "active:bg-neutral-800 active:text-neutral-50",
        className,
      )}
    >
      <div className="relative mb-2 aspect-square rounded-xs">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className={cn("text-sm font-medium", "sm:text-base")}>{name}</div>

      <div className={cn("text-xs text-neutral-500", "sm:text-sm")}>
        {`by ${artist}`}
      </div>
    </Link>
  );
};
