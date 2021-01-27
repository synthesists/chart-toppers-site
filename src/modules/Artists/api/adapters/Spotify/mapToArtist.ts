import { Artist } from "~modules/Artists/data/Artist";
import { maptoImage } from "~modules/common/api/adapters/Spotify/mapToImage";

export const mapToArtist = ({ name, id, images, genres }: any): Artist => ({
  name,
  id,
  images: images.map(maptoImage),
  genres,
});
