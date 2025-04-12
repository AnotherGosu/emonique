import { cn } from "@/utils/cn";

import { Heading, Section } from "@/components/Typography";

interface HeroSectionProps extends React.PropsWithChildren {
  heading: string;
  className?: string;
}

export const HeroSection = ({
  heading,
  children,
  className,
}: HeroSectionProps) => {
  return (
    <div className={cn("bg-neutral-900 py-20 text-neutral-50", className)}>
      <Section className="text-center">
        <Heading level="h1">{heading}</Heading>

        {children}
      </Section>
    </div>
  );
};
