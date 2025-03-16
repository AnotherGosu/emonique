import { ArticleList } from "@/components/ArticleList";
import { Heading, Section } from "@/components/Typography";

export const Service = () => {
  return (
    <Section>
      <Heading className="mb-8">Service</Heading>

      <ArticleList items={ITEMS} />
    </Section>
  );
};

const ITEMS = [
  {
    heading: "Explore Our Gallery",
    paragraph:
      "Browse our curated collection to find a unique piece that resonates with you. If you’re interested in making a purchase, feel free to contact us for additional details.",
  },
  {
    heading: "Confirm & Invoice",
    paragraph:
      "After a brief discussion about the preferred delivery method, we will issue an invoice for your order. The invoice will include all necessary details regarding payment and delivery.",
  },
  {
    heading: "Secure Payment & Shipping",
    paragraph:
      "Once the payment is processed, we will arrange the shipment and provide you with all the necessary tracking information. Throughout the shipping process, we will keep you informed with regular updates on the status of your order.",
  },
];
