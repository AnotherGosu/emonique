import { cn } from "@/utils/cn";

import { Heading, Paragraph } from "./Typography";

interface ArticleListProps {
  items: Array<{ heading: string; paragraph: string }>;
  className?: string;
}

export const ArticleList = ({ items, className }: ArticleListProps) => {
  return (
    <ol className={cn("grid grid-cols-3 gap-8", className)}>
      {items.map(({ heading, paragraph }, idx) => (
        <li key={heading}>
          <article>
            <div className="mb-4 flex items-center gap-2">
              <Index idx={idx + 1} />

              <Heading level="h3">{heading}</Heading>
            </div>

            <Paragraph variant="small">{paragraph}</Paragraph>
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
