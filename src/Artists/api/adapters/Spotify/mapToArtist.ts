import { Image, Artist } from "../../../data/Artist";

const maptoImage = (images: any): Image | null => {
  if (images.length === 0) {
    return null;
  }
  return {
    url: images[0].url,
  };
};

export const mapToArtist = ({ name, id, images }: any): Artist => ({
  name,
  id,
  image: maptoImage(images),
});
