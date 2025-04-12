"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Drawer } from "vaul";

import { PropsWithDict } from "@/types/common";

import { translateNavigation } from "@/utils/i18";

import { Button } from "@/components/Button";
import { Heading } from "@/components/Typography";

import { NavigationLink } from "./NavigationLink";

export const NavigationDrawer = ({ dict }: PropsWithDict) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = translateNavigation(dict);

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Drawer.Trigger asChild>
        <Button className="flex size-8 p-0 md:hidden">
          <MenuIcon />
        </Button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />

        <Drawer.Content
          aria-describedby={undefined}
          className="fixed right-0 bottom-0 left-0 flex h-3/4 flex-col items-center justify-center bg-neutral-900 p-4 text-neutral-50 outline-none"
        >
          <Drawer.Title asChild>
            <Heading
              level="h2"
              className="mb-8"
            >
              {dict["headings"]["menu"]}
            </Heading>
          </Drawer.Title>

          <nav>
            <ul className="flex flex-col items-center gap-6">
              {navigation.map((item) => (
                <li
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <NavigationLink
                    href={item.href}
                    title={item.title}
                    className="text-lg"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
