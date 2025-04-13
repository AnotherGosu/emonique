"use client";

import { usePathname } from "next/navigation";

import { PropsWithDict } from "@/types/common";

import { ROUTES } from "@/constants/common";

import { Heading } from "./Typography";

export const PageHeading = ({ dict }: PropsWithDict) => {
  const pathname = usePathname();

  const path = pathname.split("/").slice(2).join("/");

  const route = ROUTES.find((route) => route.path.test(path));

  const heading = route ? dict["headings"][route.key] : "Emonique";

  return <Heading level="h1">{heading}</Heading>;
};
