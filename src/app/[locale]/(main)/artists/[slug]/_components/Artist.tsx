import Image from "next/image";

import { PropsWithDict } from "@/types/common";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

import { cn } from "@/utils/cn";

import { Heading, Section } from "@/components/Typography";

interface ArtistProps extends PropsWithDict {
  name: string;
  quote: string;
  highlights: string[];
  photo: { url: string; width: number; height: number };
}

export const Artist = ({
  name,
  quote,
  highlights,
  photo,
  dict,
}: ArtistProps) => {
  return (
    <Section
      className={cn("grid grid-cols-1 gap-20", "md:grid-cols-[350px_1fr]")}
    >
      <Image
        src={photo.url}
        alt=""
        width={photo.width}
        height={photo.height}
        priority
        placeholder={IMAGE_PLACEHOLDER}
        className="rounded-xs"
      />

      <div className="@container">
        <Heading className="mb-6">{name}</Heading>

        <p className="mb-6 italic">{`“${quote}”`}</p>

        <div>
          <Heading
            level="h3"
            className="mb-3"
          >
            {dict["headings"]["highlights"]}
          </Heading>

          <ul className="flex list-inside list-disc flex-col gap-2">
            {highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
