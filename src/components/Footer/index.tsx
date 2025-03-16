import { NAVIGATION } from "@/constants/common";

import { cn } from "@/utils/cn";

import { Instagram, Threads, YouTube } from "@/components/Icons";

import { LocaleLink } from "./LocaleLink";
import { NavigationLink } from "./NavigationLink";
import { SocialLink } from "./SocialLink";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-4 text-neutral-50">
      <div
        className={cn(
          "mx-auto grid grid-cols-1 gap-x-4 gap-y-8 px-4",
          "md:grid-cols-3",
        )}
      >
        <div
          className={cn("flex flex-col items-center gap-2", "md:items-start")}
        >
          <h2 className="text-xl">Emonique</h2>
          <div className="text-sm">© 2025 Emonique. All rights reserved.</div>
        </div>

        <div className="flex flex-col gap-2">
          <nav>
            <ul className="flex items-center justify-center gap-4">
              {NAVIGATION.map((item) => (
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
              href={"/about/privacy"}
              title=" Privacy Policy"
            />

            <div>•</div>

            <NavigationLink
              href={"/about/terms"}
              title="Terms of Service"
            />
          </div>
        </div>

        <div className={cn("flex flex-col items-center gap-2", "md:items-end")}>
          <div className="flex items-center gap-2">
            <SocialLink href="https://www.instagram.com/emonique.art">
              <Instagram />
            </SocialLink>

            <SocialLink href="https://www.threads.net/">
              <Threads />
            </SocialLink>

            <SocialLink href="https://www.youtube.com/">
              <YouTube />
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
