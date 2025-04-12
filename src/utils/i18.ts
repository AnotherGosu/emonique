import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

import { Locale } from "@/types/common";

import { LOCALES, NAVIGATION } from "@/constants/common";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ko: () => import("@/dictionaries/ko.json").then((module) => module.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export type Dict = Awaited<ReturnType<typeof getDictionary>>;

export function translateNavigation(dict: Dict) {
  return NAVIGATION.map(({ title, href }) => ({
    title: dict["headings"][title],
    href,
  }));
}

export function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    LOCALES,
  );

  return match(languages, LOCALES, LOCALES[0]);
}
