"use client";

import { useDictionary } from "@/hooks/useDictionary";

import { ButtonLink } from "@/components/ButtonLink";
import { Loader } from "@/components/Status";
import { Heading, Section } from "@/components/Typography";

export default function NotFound() {
  const dict = useDictionary();

  return (
    <Section className="flex h-svh flex-col items-center justify-center gap-8 text-center">
      {dict ? (
        <div>
          <Heading level="h1">{dict["headings"]["not_found"]}</Heading>

          <p>{dict["phrases"]["not_found"]}</p>

          <ButtonLink href="/">{dict["buttons"]["home"]}</ButtonLink>
        </div>
      ) : (
        <Loader />
      )}
    </Section>
  );
}
