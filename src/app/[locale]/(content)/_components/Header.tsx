import { NAVIGATION } from "@/constants/common";

import { NavigationDrawer } from "@/components/Header/NavigationDrawer";
import { NavigationLink } from "@/components/Header/NavigationLink";

import { TitleLink } from "./TitleLink";

export const Header = () => {
  return (
    <header className="flex h-15 items-center justify-between bg-neutral-900 px-4">
      <TitleLink />

      <div className="flex items-center justify-end">
        <nav className="hidden md:block">
          <ul className="flex gap-4">
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

        <NavigationDrawer />
      </div>
    </header>
  );
};
