import { RichTextRaw } from "./common";

export interface ArtworkPreview {
  id: string;
  slug: string;
  name: string;
  images: Array<{ url: string; width: number; height: number }>;
  artist: { name: string; slug: string };
}

export interface Artwork extends ArtworkPreview {
  price: string;
  medium: string;
  yearOfCreation: string;
  dimensions: string[];
  description: { raw: RichTextRaw };
}
