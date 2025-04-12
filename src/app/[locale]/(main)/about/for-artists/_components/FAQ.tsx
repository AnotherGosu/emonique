import { PropsWithDict } from "@/types/common";

import { Disclosure } from "@/components/Disclosure";
import { Heading, Section } from "@/components/Typography";

export const FAQ = ({ dict }: PropsWithDict) => {
  const items = dict["about"]["for_artists"]["faq"];

  return (
    <Section>
      <Heading className="mb-6">FAQ</Heading>

      <ol className="flex flex-col gap-3">
        {items.map(({ question, answer }, idx) => (
          <Disclosure
            key={idx}
            buttonContent={<span>{`${idx + 1}. ${question}`}</span>}
            panelContent={
              <p className="border-l border-neutral-900 px-2">{answer}</p>
            }
          />
        ))}
      </ol>
    </Section>
  );
};
