import { cn } from "@/utils/cn";

interface SocialLinkProps extends React.PropsWithChildren {
  href: string;
}

export const SocialLink = ({ href, children }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        "size-5 rounded-xs transition outline-none",
        "*:fill-neutral-50 *:transition",
        "*:hover:fill-neutral-300",
        "*:active:fill-neutral-400",
        "focus-visible:ring-2 focus-visible:ring-blue-500",
      )}
    >
      {children}
    </a>
  );
};
