export function formatPrice(price: string, currency: string) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return formatter.format(Number(price));
}
