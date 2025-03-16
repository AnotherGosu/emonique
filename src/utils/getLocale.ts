import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

import { LOCALES } from "@/constants/common";

export function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    LOCALES,
  );

  return match(languages, LOCALES, LOCALES[0]);
}
