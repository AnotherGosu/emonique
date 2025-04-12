import Link from "next/link";

import { Locale, PropsWithDict } from "@/types/common";

import { cn } from "@/utils/cn";

import { formatPrice } from "@/lib/formatPrice";

import { Heading } from "@/components/Typography";

interface InfoProps extends PropsWithDict {
  name: string;
  artist: { name: string; slug: string };
  dimensions: string[];
  medium: string;
  yearOfCreation: string;
  locale: Locale;
  price: string;
}

export const Info = ({
  name,
  artist,
  dimensions,
  medium,
  yearOfCreation,
  price,
  locale,
  dict,
}: InfoProps) => {
  return (
    <div>
      <Heading className="mb-6">{name}</Heading>

      <div className="mb-8 grid grid-cols-2 gap-4">
        <div>
          <Heading
            level="h3"
            className="mb-2"
          >
            {dict["headings"]["artist"]}
          </Heading>

          <Link
            href={`/artists/${artist.slug}`}
            className={cn(
              "underline underline-offset-2",
              "hover:text-neutral-700",
            )}
          >
            {artist.name}
          </Link>
        </div>

        <div>
          <Heading
            level="h3"
            className="mb-2"
          >
            {dict["headings"]["year_of_creation"]}
          </Heading>

          <p>{yearOfCreation}</p>
        </div>

        <div>
          <Heading
            level="h3"
            className="mb-2"
          >
            {dict["headings"]["dimensions"]}
          </Heading>

          <p>{dimensions.join(" x ")}</p>
        </div>

        <div>
          <Heading
            level="h3"
            className="mb-2"
          >
            {dict["headings"]["medium"]}
          </Heading>

          <p>{medium}</p>
        </div>

        <div>
          <Heading
            level="h3"
            className="mb-2"
          >
            {dict["headings"]["price"]}
          </Heading>

          <p>{formatPrice(price, locale)}</p>
        </div>
      </div>
    </div>
  );
};
