import { Artist } from "../../../data/Artist";
import { maptoImage } from "../../../../api/adapters/Spotify/mapToImage";

export const mapToArtist = ({ name, id, images }: any): Artist => ({
  name,
  id,
  images: images.map(maptoImage),
});
