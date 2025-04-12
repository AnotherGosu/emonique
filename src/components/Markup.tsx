import { cn } from "@/utils/cn";

import { Heading, List, Paragraph, Section } from "./Typography";

interface MarkupProps {
  idx?: string;
  isSubSection?: boolean;
  heading?: string;
  paragraph?: string | string[];
  list?: string[];
  note?: string;
  sections?: MarkupProps[];
}

export const Markup = ({
  idx,
  isSubSection,
  heading,
  paragraph,
  list,
  note,
  sections,
}: MarkupProps) => {
  return (
    <Section>
      {heading && (
        <Heading
          level={isSubSection ? "h3" : "h2"}
          className={isSubSection ? "mb-3" : "mb-6"}
        >
          {`${idx}. ${heading}`}
        </Heading>
      )}

      {typeof paragraph === "string" && (
        <Paragraph className="mb-3">{paragraph}</Paragraph>
      )}

      {Array.isArray(paragraph) &&
        paragraph.map((text, idx) => (
          <Paragraph
            key={idx}
            className={cn({ "mb-3": idx !== paragraph.length - 1 })}
          >
            {text}
          </Paragraph>
        ))}

      {list && (
        <List
          items={list}
          className="mb-3"
        />
      )}

      {note && (
        <Paragraph className="mb-3 text-sm leading-loose">{note}</Paragraph>
      )}

      {sections?.map((section, subIdx) => (
        <Markup
          key={subIdx}
          {...section}
          isSubSection
          idx={`${idx}.${subIdx + 1}`}
        />
      ))}
    </Section>
  );
};
