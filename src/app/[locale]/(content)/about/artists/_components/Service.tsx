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
    heading: "Get in Touch",
    paragraph:
      "If you’re interested in collaborating with us, feel free to reach out. We value each artist’s individuality, so we encourage you to share your background, artistic journey, and portfolio. If your style aligns with our vision, we would be delighted to explore a partnership.",
  },
  {
    heading: "Agreement & Terms",
    paragraph:
      "After a brief discussion of the details, we formalize our collaboration with a contract. This agreement outlines key aspects such as pricing, ownership rights, and specific preferences to ensure a clear and transparent partnership.",
  },
  {
    heading: "Promotion & Exposure",
    paragraph:
      "After preparing your artwork, we showcase it on our website and promote it through our social media channels. Additionally, we actively reach out to potential collectors who may be interested in your work, ensuring it gets the visibility it deserves.",
  },
];
