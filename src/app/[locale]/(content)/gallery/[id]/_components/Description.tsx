import { Heading, Paragraph, Section } from "@/components/Typography";

interface DescriptionProps {
  description: string;
}

export const Description = ({ description }: DescriptionProps) => {
  return (
    <Section>
      <Heading className="mb-8">Description</Heading>

      <Paragraph>{description}</Paragraph>
    </Section>
  );
};
