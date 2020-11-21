import { Image, Artist } from "../../../data/Artist";

const maptoImage = (image: any): Image => ({
  url: image.url,
  width: image.width,
  height: image.height,
});

export const mapToArtist = ({ name, id, images }: any): Artist => ({
  name,
  id,
  images: images.map(maptoImage),
});
