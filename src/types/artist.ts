import { RichTextRaw } from "./common";

export interface ArtistPreview {
  id: string;
  slug: string;
  name: string;
  quote: string;
  photo: { url: string; width: number; height: number };
}

export interface Artist extends ArtistPreview {
  highlights: string[];
  biography: { raw: RichTextRaw };
}
