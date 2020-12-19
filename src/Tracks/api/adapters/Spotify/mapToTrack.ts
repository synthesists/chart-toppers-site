import { maptoImage } from "../../../../api/adapters/Spotify/mapToImage";
import { Track } from "../../../data/Track";

export const mapToTrack = ({ id, name, artists, album, preview_url, weeksInTop100 }: any): Track => ({
  id,
  name,
  previewUrl: preview_url,
  artistIds: artists.map(({ id }: any) => id),
  albumId: album.id,
  weeksInTop100,
  images: album.images.map(maptoImage),
});
