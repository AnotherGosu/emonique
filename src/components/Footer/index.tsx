import { PropsWithDict } from "@/types/common";

import { SOCIALS } from "@/constants/common";

import { cn } from "@/utils/cn";
import { translateNavigation } from "@/utils/i18";

import { Instagram, Threads } from "@/components/Icons";

import { LocaleLink } from "./LocaleLink";
import { NavigationLink } from "./NavigationLink";
import { SocialLink } from "./SocialLink";

export const Footer = ({ dict }: PropsWithDict) => {
  const navigation = translateNavigation(dict);

  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 py-4 text-neutral-50">
      <div
        className={cn(
          "mx-auto grid grid-cols-1 gap-x-4 gap-y-8 px-4",
          "md:grid-cols-[1fr_2fr_1fr]",
        )}
      >
        <div
          className={cn("flex flex-col items-center gap-2", "md:items-start")}
        >
          <h2 className="text-xl">Emonique</h2>

          <div className="text-xs">
            {`© ${year}. ${dict["phrases"]["all_rights_reserved"]}`}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <nav>
            <ul className="flex items-center justify-center gap-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <NavigationLink
                    href={item.href}
                    title={item.title}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-center gap-2 text-sm">
            <NavigationLink
              href="/about/privacy-policy"
              title={dict["headings"]["privacy_policy"]}
            />

            <div>•</div>

            <NavigationLink
              href="/about/terms-of-service"
              title={dict["headings"]["terms_of_service"]}
            />
          </div>
        </div>

        <div className={cn("flex flex-col items-center gap-2", "md:items-end")}>
          <div className="flex items-center gap-2">
            <SocialLink href={SOCIALS.instagram}>
              <Instagram />
            </SocialLink>

            <SocialLink href={SOCIALS.threads}>
              <Threads />
            </SocialLink>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm">
            <LocaleLink locale="en" />

            <div>|</div>

            <LocaleLink locale="ko" />
          </div>
        </div>
      </div>
    </footer>
  );
};
