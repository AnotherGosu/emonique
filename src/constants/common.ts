import { Locale } from "@/types/common";

import { Dict } from "@/utils/i18";

export const IMAGE_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Wg8AAk8BZuQcWLwAAAAASUVORK5CYII=";

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

export const ROUTES: Array<{
  key: keyof Dict["headings"];
  path: RegExp;
}> = [
  { key: "gallery", path: /^gallery$/ },
  { key: "artwork", path: /^gallery\/[a-z0-9-]+$/i },
  { key: "artists", path: /^artists$/ },
  { key: "artist", path: /^artists\/[a-z0-9-]+$/i },
  { key: "blog", path: /^blog$/ },
  { key: "about_us", path: /^about$/ },
  { key: "for_collectors", path: /^about\/for-collectors$/ },
  { key: "for_artists", path: /^about\/for-artists$/ },
  { key: "privacy_policy", path: /^about\/privacy-policy$/ },
  { key: "terms_of_service", path: /^about\/terms-of-service$/ },
];

export const CONTACTS = {
  email: "contact@emonique.com",
};

export const SOCIALS = {
  instagram: "https://www.instagram.com/emonique.art/",
  threads: "https://www.threads.net/@emonique.art/",
};
