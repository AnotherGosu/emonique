import { RichTextRaw } from "@/types/common";

import { cn } from "@/utils/cn";

export const Heading = ({
  level = "h2",
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  level?: "h1" | "h2" | "h3";
}) => {
  switch (level) {
    case "h1": {
      return (
        <h1
          {...props}
          className={cn("text-5xl font-bold", className)}
        />
      );
    }

    case "h2": {
      return (
        <h2
          {...props}
          className={cn("text-4xl font-semibold", className)}
        />
      );
    }

    case "h3": {
      return (
        <h3
          {...props}
          className={cn("text-2xl font-medium", className)}
        />
      );
    }
  }
};

export const Paragraph = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      {...props}
      className={cn("leading-loose", className)}
    />
  );
};

export const Label = ({
  required,
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) => {
  return (
    <label
      {...props}
      className={cn(
        "mb-1 block text-sm",
        { "after:ml-0.5 after:text-red-700 after:content-['*']": required },
        className,
      )}
    />
  );
};

export const Section = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <section
      {...props}
      className={cn("mx-auto w-full max-w-6xl px-4", className)}
    />
  );
};

export const List = ({
  items,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement> & {
  items: string[];
}) => {
  return (
    <ul
      {...props}
      className={cn("flex list-inside list-disc flex-col gap-2", className)}
    >
      {items.map((item, key) => (
        <li key={key}>{item}</li>
      ))}
    </ul>
  );
};

export const RichText = ({
  raw,
  className,
}: {
  raw: RichTextRaw;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {raw.children.map((node, idx) => {
        if (node.type === "paragraph") {
          return <Paragraph key={idx}>{node.children[0].text}</Paragraph>;
        }

        return null;
      })}
    </div>
  );
};
