import Axios from "axios";
import { SPOTIFY_API_URL } from "../../../../config/Spotify";
import { SearchArtists, GetTopArtists } from "../..";
import { Artist } from "../../../data/Artist";
import { mapToArtist } from "./mapToArtist";

export const searchArtists: SearchArtists = async (query: string): Promise<Artist[]> => {
  if (query === "") {
    return [];
  }

  const { data } = await Axios.get(new URL(`search?q=${query}`, SPOTIFY_API_URL).toString());
  return data.map(mapToArtist);
};

export const getTopArtists: GetTopArtists = async (): Promise<Artist[]> => {
  const { data } = await Axios.get(new URL("artists", SPOTIFY_API_URL).toString());
  return data.map(mapToArtist);
};
