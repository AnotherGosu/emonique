import { Heading, Paragraph } from "@/components/Typography";

interface ArticleListProps {
  items: Array<{ heading: string; paragraph: string }>;
}

export const ArticleList = ({ items }: ArticleListProps) => {
  return (
    <ol className="flex flex-col gap-6">
      {items.map(({ heading, paragraph }, idx) => (
        <li key={heading}>
          <article>
            <div className="mb-3 flex items-center gap-2">
              <Index idx={idx + 1} />

              <Heading level="h3">{heading}</Heading>
            </div>

            <Paragraph>{paragraph}</Paragraph>
          </article>
        </li>
      ))}
    </ol>
  );
};

const Index = ({ idx }: { idx: number }) => {
  return (
    <div className="flex size-5 items-center justify-center rounded-sm bg-neutral-900 font-semibold text-neutral-50">
      {idx}
    </div>
  );
};
