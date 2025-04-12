import { PropsWithDict } from "@/types/common";

import { cn } from "@/utils/cn";

import { ButtonLink } from "@/components/ButtonLink";
import { Heading, Paragraph, Section } from "@/components/Typography";

export const Clients = ({ dict }: PropsWithDict) => {
  return (
    <div className="bg-neutral-900 py-20 text-neutral-50">
      <Section
        className={cn(
          "grid grid-cols-1 gap-x-16 gap-y-8",
          "md:grid-cols-[1fr_max-content_1fr]",
        )}
      >
        <section className="flex flex-col gap-8">
          <Heading>{dict["headings"]["for_collectors"]}</Heading>

          <Paragraph className="text-sm leading-loose">
            {dict["home"]["for_collectors"]}
          </Paragraph>

          <ButtonLink
            href="/about/for-collectors"
            variant="alt"
          >
            {dict["buttons"]["learn_more"]}
          </ButtonLink>
        </section>

        <div className={cn("h-px w-full bg-neutral-50", "md:h-full md:w-px")} />

        <section className="flex flex-col items-end gap-8 text-right">
          <Heading>{dict["headings"]["for_artists"]}</Heading>

          <Paragraph className="text-sm leading-loose">
            {dict["home"]["for_artists"]}
          </Paragraph>

          <ButtonLink
            href="/about/for-artists"
            variant="alt"
          >
            {dict["buttons"]["learn_more"]}
          </ButtonLink>
        </section>
      </Section>
    </div>
  );
};
