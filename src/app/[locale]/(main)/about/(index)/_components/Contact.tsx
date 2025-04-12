import { PropsWithDict } from "@/types/common";

import { CONTACTS, SOCIALS } from "@/constants/common";

import { cn } from "@/utils/cn";

import { ContactForm } from "@/components/ContactForm";
import { Heading, Paragraph, Section } from "@/components/Typography";

export const Contact = ({ dict }: PropsWithDict) => {
  return (
    <Section>
      <Heading className="mb-6">{dict["headings"]["contact_us"]}</Heading>

      <div className={cn("grid grid-cols-1 gap-20", "md:grid-cols-2")}>
        <div>
          <Paragraph className="mb-2">
            {dict["about"]["index"]["contact"][0]}
          </Paragraph>

          <ul className="mb-8 flex list-inside list-disc flex-col gap-1">
            <li>
              <Link href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</Link>
            </li>
          </ul>

          <Paragraph className="mb-2">
            {dict["about"]["index"]["contact"][1]}
          </Paragraph>

          <ul className="flex list-inside list-disc flex-col gap-1">
            <li>
              <Link href={SOCIALS.instagram}>Instagram</Link>
            </li>

            <li>
              <Link href={SOCIALS.threads}>Threads</Link>
            </li>
          </ul>
        </div>

        <ContactForm dict={dict} />
      </div>
    </Section>
  );
};

const Link = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      target="_blank"
      className="underline underline-offset-2"
      {...props}
    />
  );
};
