import { Image } from "../../common/data/Image";

export type Artist = {
  name: string;
  id: string;
  images: Image[];
  genres: string[];
};
