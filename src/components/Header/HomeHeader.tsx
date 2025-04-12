import { PropsWithDict } from "@/types/common";

import { translateNavigation } from "@/utils/i18";

import { NavigationDrawer } from "./NavigationDrawer";
import { NavigationLink } from "./NavigationLink";

export const HomeHeader = ({ dict }: PropsWithDict) => {
  const navigation = translateNavigation(dict);

  return (
    <header className="grid h-15 grid-cols-2">
      <div className="bg-neutral-900" />

      <div className="flex items-center justify-end px-4">
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <NavigationLink
                  href={item.href}
                  title={item.title}
                  variant="alt"
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
