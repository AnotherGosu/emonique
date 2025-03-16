import Link from "next/link";

import { cn } from "@/utils/cn";

import { formatPrice } from "@/lib/formatPrice";

import { Button } from "@/components/Button";
import { Heading } from "@/components/Typography";

interface InfoProps {
  name: string;
  artist: string;
  artistId: string;
  size: string;
  style: string;
  dateOfCreation: string;
  price: string;
}

export const Info = ({
  name,
  artist,
  artistId,
  size,
  style,
  dateOfCreation,
  price,
}: InfoProps) => {
  return (
    <section className="flex flex-col gap-8">
      <Heading>{name}</Heading>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Heading
            level="h3"
            className="mb-2"
          >
            Artist
          </Heading>

          <Link
            href={`/artists/${artistId}`}
            className={cn(
              "underline underline-offset-2",
              "hover:text-neutral-700",
            )}
          >
            {artist}
          </Link>
        </div>

        <div>
          <Heading
            level="h3"
            className="mb-2"
          >
            Date
          </Heading>

          <span>{dateOfCreation}</span>
        </div>

        <div>
          <Heading
            level="h3"
            className="mb-2"
          >
            Size
          </Heading>

          <span>{size}</span>
        </div>

        <div>
          <Heading
            level="h3"
            className="mb-2"
          >
            Style
          </Heading>

          <span>{style}</span>
        </div>
      </div>

      <span className="text-xl font-medium">{formatPrice(price, "USD")}</span>

      <Button>Inquire</Button>
    </section>
  );
};
