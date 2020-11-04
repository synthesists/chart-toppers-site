import { Artist } from "src/artists/data/artist";

export const mapToArtist = (artist: any): Artist => {
  return {
    name: artist.name,
    id: artist.id,
    image: artist.images[0] ? { url: artist.images[0].url } : null,
  };
};
