import { Locale } from "@/types/common";

import { Dict } from "@/utils/i18";

export const IMAGE_BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8Ug8AAi0BVVnWL7QAAAAASUVORK5CYII=";

export const LOCALES: Locale[] = ["en", "ko"];

export const NAVIGATION: Array<{
  title: keyof Dict["headings"];
  href: string;
}> = [
  { title: "gallery", href: "/gallery" },
  { title: "artists", href: "/artists" },
  { title: "blog", href: "/blog" },
  { title: "about_us", href: "/about" },
];

export const CONTACTS = {
  email: "contact@emonique.com",
};

export const SOCIALS = {
  instagram: "https://www.instagram.com/emonique.art/",
  threads: "https://www.threads.net/@emonique.art/",
};
