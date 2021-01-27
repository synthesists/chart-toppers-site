import { Image } from "~modules/common/data/Image";

export type Artist = {
  name: string;
  id: string;
  images: Image[];
  genres: string[];
};
