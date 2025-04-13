import { PropsWithDict } from "@/types/common";

import { Disclosure } from "@/components/Disclosure";
import { Heading, Paragraph, Section } from "@/components/Typography";

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
              <div className="flex flex-col gap-3 border-l border-neutral-900 px-2">
                {answer.map((sentence, idx) => (
                  <Paragraph
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: sentence }}
                  />
                ))}
              </div>
            }
          />
        ))}
      </ol>
    </Section>
  );
};
