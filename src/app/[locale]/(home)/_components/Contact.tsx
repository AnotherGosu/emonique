import { cn } from "@/utils/cn";

import { ContactForm } from "@/components/ContactForm";
import { Heading, Paragraph, Section } from "@/components/Typography";

export const Contact = () => {
  return (
    <Section className={cn("grid gap-x-16 gap-y-8", "lg:grid-cols-2")}>
      <div>
        <Heading className="mb-8">Contact Us</Heading>

        <Paragraph>
          Have inquiries or looking to partner with us? We welcome the
          opportunity to connect. Reach out for information on artists,
          artworks, collaborations, or any other assistance.
        </Paragraph>
      </div>

      <ContactForm />
    </Section>
  );
};
