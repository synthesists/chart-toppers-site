import axios from "axios";
import { getTopArtists, searchArtists, getArtist } from "~modules/Artists/api/adapters/Spotify";
import { assertIsArtist } from "tests/helpers/matchers/Artist";

const spyOnGetRequest = jest.spyOn(axios, "get");

describe("Spotify Artist Adapter", () => {
  describe("searchArtists", () => {
    it("should not search for an empty string", async () => {
      const artists = await searchArtists("");

      expect(artists).toEqual([]);
      expect(spyOnGetRequest).not.toHaveBeenCalled();
    });

    it("should get a list of artists for a search term", async () => {
      const artists = await searchArtists("Kanye W");

      expect(artists.length).toBeGreaterThan(0);
      expect(artists[0].name).toEqual("Kanye West");

      artists.forEach(assertIsArtist);
    });
  });

  describe("getTopArtists", () => {
    it("should get a list of the top artists", async () => {
      const artists = await getTopArtists();

      artists.forEach(assertIsArtist);
    });
  });

  describe("getArtist", () => {
    it("should get the artist for an ID", async () => {
      const artistId = "5K4W6rqBFWDnAN6FQUkS6x";

      const artist = await getArtist(artistId);

      assertIsArtist(artist);
    });
  });
});
