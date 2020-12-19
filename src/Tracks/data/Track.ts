import type { Image } from "../../data/Image";
export interface Track {
  id: string;
  name: string;
  previewUrl: string | null;
  artistIds: string[];
  albumId: string;
  albumName: string;
  weeksInTop100: number;
  images: Image[];
}
