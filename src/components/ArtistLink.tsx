import Image from "next/image";
import Link from "next/link";

import { cn } from "@/utils/cn";

interface ArtistLinkProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const ArtistLink = ({
  id,
  name,
  image,
  description,
}: ArtistLinkProps) => {
  return (
    <Link
      href={`/artists/${id}`}
      className={cn(
        "flex flex-col gap-4 rounded-xs p-3 transition duration-200 ease-in outline-none",
        "hover:bg-neutral-900 hover:text-neutral-50",
        "focus:bg-neutral-900 focus:text-neutral-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        "active:bg-neutral-800 active:text-neutral-50",
      )}
    >
      <div className="text-lg font-medium">{name}</div>

      <div className="relative aspect-square">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <p className="line-clamp-3 text-sm">{description}</p>
    </Link>
  );
};
