import "server-only";

import { Locale } from "@/types/common";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ko: () => import("@/dictionaries/ko.json").then((module) => module.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
