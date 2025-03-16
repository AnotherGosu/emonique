import { NAVIGATION } from "@/constants/common";

import { NavigationDrawer } from "@/components/Header/NavigationDrawer";
import { NavigationLink } from "@/components/Header/NavigationLink";

export const Header = () => {
  return (
    <header className="grid h-15 grid-cols-2">
      <div className="bg-neutral-900" />

      <div className="flex items-center justify-end px-4">
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            {NAVIGATION.map((item) => (
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

        <NavigationDrawer />
      </div>
    </header>
  );
};
