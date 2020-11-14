import { mapToArtist } from "../../../../../src/artists/api/adapters/Spotify/mapToArtist";
import { Artist } from "../../../../../src/artists/data/artist";

const spotifyArtist = {
  id: "artist-id",
  images: [
    {
      height: 640,
      url: "https://image.jpeg",
      width: 640,
    },
  ],
  name: "artist name",
};
const spotifyArtistWithNoImage = {
  id: "artist-id-no-image",
  images: [],
  name: "imageless artist name",
};

describe("mapToArtist", () => {
  it("should map the Spotify response to an Artist", () => {
    const artist: Artist = mapToArtist(spotifyArtist);

    expect(artist).toEqual({
      id: "artist-id",
      name: "artist name",
      image: {
        url: "https://image.jpeg",
      },
    });
  });

  it("should map the Spotify response to an Artist with no image", () => {
    const artist: Artist = mapToArtist(spotifyArtistWithNoImage);

    expect(artist).toEqual({
      id: "artist-id-no-image",
      name: "imageless artist name",
      image: null,
    });
  });
});
