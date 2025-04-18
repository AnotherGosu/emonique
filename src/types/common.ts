import { Dict } from "@/utils/i18";

export type Locale = "en" | "ko";

export type SearchParams = { [key: string]: string | undefined };

export interface PropsWithDict {
  dict: Dict;
}

export interface RichTextRaw {
  children: Array<{ type: string; children: Array<{ text: string }> }>;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginationResponse<T> {
  edges: Array<{ node: T }>;
  pageInfo: PageInfo;
}
