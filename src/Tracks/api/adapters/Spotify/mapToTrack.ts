import { Track } from "../../../data/Track";

export const mapToTrack = ({ id, name, artists, album, preview_url }: any): Track => ({
  id,
  name,
  previewUrl: preview_url,
  artistIds: artists.map(({ id }: any) => id),
  albumId: album.id,
});
