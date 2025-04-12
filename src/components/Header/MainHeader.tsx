import { PropsWithDict } from "@/types/common";

import { translateNavigation } from "@/utils/i18";

import { NavigationDrawer } from "./NavigationDrawer";
import { NavigationLink } from "./NavigationLink";
import { TitleLink } from "./TitleLink";

export const MainHeader = ({ dict }: PropsWithDict) => {
  const navigation = translateNavigation(dict);

  return (
    <header className="flex h-15 items-center justify-between bg-neutral-900 px-4">
      <TitleLink />

      <div className="flex items-center justify-end">
        <nav className="hidden md:block">
          <ul className="flex gap-6">
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

        <NavigationDrawer dict={dict} />
      </div>
    </header>
  );
};
