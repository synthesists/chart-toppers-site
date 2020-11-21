import { Image, Artist } from "../../../data/Artist";

const maptoImages = (images: any[]): Image[] => {
  if (images.length === 0) {
    return [];
  }
  return [
    {
      url: images[0].url,
    },
  ];
};

export const mapToArtist = ({ name, id, images }: any): Artist => ({
  name,
  id,
  images: maptoImages(images),
});
