import type { Image } from "~modules/common/data/Image";
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
