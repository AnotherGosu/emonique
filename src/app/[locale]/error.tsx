"use client";

import { useDictionary } from "@/hooks/useDictionary";

import { ButtonLink } from "@/components/ButtonLink";
import { Loader } from "@/components/Status";
import { Heading, Section } from "@/components/Typography";

export default function Error() {
  const dict = useDictionary();

  return (
    <Section className="flex h-svh items-center justify-center">
      {dict ? (
        <div className="flex flex-col items-center gap-8 text-center">
          <Heading level="h1">{dict["headings"]["error"]}</Heading>

          <p>{dict["phrases"]["error"]}</p>

          <ButtonLink href="/">{dict["buttons"]["home"]}</ButtonLink>
        </div>
      ) : (
        <Loader />
      )}
    </Section>
  );
}
