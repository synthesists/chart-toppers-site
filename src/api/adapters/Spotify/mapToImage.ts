import { Image } from "../../../data/Image";

export const maptoImage = (image: any): Image => ({
  url: image.url,
  width: image.width,
  height: image.height,
});
