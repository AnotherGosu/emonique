import { Locale } from "@/types/common";

export function formatPrice(price: string, locale: Locale) {
  const currency = locale === "ko" ? "KRW" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return formatter.format(Number(price));
}
