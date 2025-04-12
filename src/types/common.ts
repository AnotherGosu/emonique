import { Dict } from "@/utils/i18";

export type Locale = "en" | "ko";

export interface PropsWithDict {
  dict: Dict;
}

export interface RichTextRaw {
  children: Array<{
    type: string;
    children: Array<{ text: string }>;
  }>;
}
