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
        "size-5 *:fill-neutral-50 *:transition",
        "*:hover:fill-neutral-300",
        "*:active:fill-neutral-400",
      )}
    >
      {children}
    </a>
  );
};
