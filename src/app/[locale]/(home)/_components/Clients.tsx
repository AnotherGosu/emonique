import { cn } from "@/utils/cn";

import { ButtonLink } from "@/components/ButtonLink";
import { Heading, Paragraph, Section } from "@/components/Typography";

export const Clients = () => {
  return (
    <div className="bg-neutral-900 py-20 text-neutral-50">
      <Section
        className={cn(
          "grid grid-cols-1 gap-x-16 gap-y-8",
          "lg:grid-cols-[1fr_max-content_1fr]",
        )}
      >
        <section className="flex flex-col gap-8">
          <Heading>For Collectors</Heading>

          <Paragraph variant="small">
            Interested in acquiring one of our artworks? Learn more about how we
            make the process simple, from discovery to bringing the piece into
            your space.
          </Paragraph>

          <ButtonLink
            href="/about/collectors"
            variant="alt"
          >
            Learn more
          </ButtonLink>
        </section>

        <div className={cn("h-px w-full bg-neutral-50", "lg:h-full lg:w-px")} />

        <section className="flex flex-col items-end gap-8 text-right">
          <Heading>For Artists</Heading>

          <Paragraph variant="small">
            Looking for an opportunity to present your artwork to a global
            audience? Our agency offers artists a platform to gain visibility
            and connect with buyers. Showcase your work to those who truly value
            it.
          </Paragraph>

          <ButtonLink
            href="/about/artists"
            variant="alt"
          >
            Learn more
          </ButtonLink>
        </section>
      </Section>
    </div>
  );
};
