import { PropsWithDict } from "@/types/common";

import { cn } from "@/utils/cn";

import { ContactForm } from "@/components/ContactForm";
import { Heading, Paragraph, Section } from "@/components/Typography";

export const Contact = ({ dict }: PropsWithDict) => {
  return (
    <Section className={cn("grid gap-x-20 gap-y-8", "md:grid-cols-2")}>
      <div>
        <Heading className="mb-8">{dict["headings"]["contact_us"]}</Heading>

        <Paragraph>{dict["home"]["contact"]}</Paragraph>
      </div>

      <ContactForm dict={dict} />
    </Section>
  );
};
