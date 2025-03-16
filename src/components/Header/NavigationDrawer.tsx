"use client";

import { Heading } from "../Typography";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Drawer } from "vaul";

import { NAVIGATION } from "@/constants/common";

import { Button } from "@/components/Button";

import { NavigationLink } from "./NavigationLink";

export const NavigationDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          className="fixed right-0 bottom-0 left-0 flex h-3/4 flex-col items-center justify-center bg-neutral-50 p-4 outline-none"
        >
          <Drawer.Title asChild>
            <Heading
              level="h2"
              className="mb-8"
            >
              Navigation
            </Heading>
          </Drawer.Title>

          <nav>
            <ul className="flex flex-col items-center gap-4">
              {NAVIGATION.map((item) => (
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
