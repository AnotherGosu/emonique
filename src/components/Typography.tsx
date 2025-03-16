import { cn } from "@/utils/cn";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: "h1" | "h2" | "h3";
}

export const Heading = ({
  level = "h2",
  className,
  ...props
}: HeadingProps) => {
  switch (level) {
    case "h1": {
      return (
        <h1
          {...props}
          className={cn("text-6xl font-bold", className)}
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

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "def" | "small";
}

export const Paragraph = ({
  variant = "def",
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      {...props}
      className={cn(
        "text-sm leading-relaxed",
        { "sm:text-base": variant === "def" },
        className,
      )}
    />
  );
};

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = ({ required, className, ...props }: LabelProps) => {
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
