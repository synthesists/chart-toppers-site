import axios from "axios";
import { getTopArtists, searchArtists } from "../../../../src/artists/api/adapters/Spotify/spotify-content-api";
import { assertIsArtist } from "../../../helpers/matchers/Artist";

const spyOnGetRequest = jest.spyOn(axios, "get");

describe("searchArtists", () => {
  it("should not search for an empty string", async () => {
    const artists = await searchArtists("");

    expect(artists).toEqual([]);
    expect(spyOnGetRequest).not.toHaveBeenCalled();
  });

  it("should get a list of artists for a search term", async () => {
    const artists = await searchArtists("Kanye W");

    expect(artists.length).toBeGreaterThan(0);
    expect(spyOnGetRequest).toHaveBeenCalled();
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
