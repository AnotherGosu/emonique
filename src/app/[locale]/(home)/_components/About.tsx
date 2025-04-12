import { PropsWithDict } from "@/types/common";

import { cn } from "@/utils/cn";

import { ButtonLink } from "@/components/ButtonLink";
import { Heading, Paragraph, Section } from "@/components/Typography";

export const About = ({ dict }: PropsWithDict) => {
  return (
    <div className="bg-neutral-900 pt-50 pb-20 text-neutral-50">
      <Section className="flex flex-col gap-8">
        <div className="flex items-center justify-between gap-2">
          <Heading>{dict["headings"]["art_agency"]}</Heading>

          <ButtonLink
            href="/about"
            variant="alt"
          >
            {dict["buttons"]["about_us"]}
          </ButtonLink>
        </div>

        <Paragraph>{dict["home"]["agency"]}</Paragraph>

        <div className="my-8 h-px w-full bg-neutral-50" />

        <div
          className={cn(
            "grid grid-cols-1 gap-x-16 gap-y-8",
            "sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          <article>
            <Heading
              level="h3"
              className="mb-4"
            >
              {dict["headings"]["hidden_talents"]}
            </Heading>

            <Paragraph className="text-sm leading-loose">
              {dict["home"]["benefit_1"]}
            </Paragraph>
          </article>

          <article>
            <Heading
              level="h3"
              className="mb-4"
            >
              {dict["headings"]["beyond_canvas"]}
            </Heading>

            <Paragraph className="text-sm leading-loose">
              {dict["home"]["benefit_2"]}
            </Paragraph>
          </article>

          <article>
            <Heading
              level="h3"
              className="mb-4"
            >
              {dict["headings"]["focus_on_art"]}
            </Heading>

            <Paragraph className="text-sm leading-loose">
              {dict["home"]["benefit_3"]}
            </Paragraph>
          </article>
        </div>
      </Section>
    </div>
  );
};
