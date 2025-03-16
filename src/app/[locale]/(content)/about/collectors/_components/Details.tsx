import { ArticleList } from "@/components/ArticleList";
import { Heading, Section } from "@/components/Typography";

export const Details = () => {
  return (
    <Section>
      <Heading className="mb-8">Details</Heading>

      <ArticleList items={ITEMS} />
    </Section>
  );
};

const ITEMS = [
  {
    heading: "Estimated Timelines",
    paragraph:
      "Invoices are typically issued within 24 hours, and shipping is arranged within [X] business days after payment is received. Delivery times may vary based on location and shipping method.",
  },
  {
    heading: "Packaging & Insurance",
    paragraph:
      "We take great care in packaging each piece to ensure it arrives safely. If you would like to add insurance for extra protection, please let us know.",
  },
  {
    heading: "Returns & Guarantees",
    paragraph:
      "In the rare case of damage during transit, please contact us immediately. We will work with you to find a suitable resolution.",
  },
];
