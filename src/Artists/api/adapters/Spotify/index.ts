import Axios from "axios";
import URI from "urijs";

import { SPOTIFY_API_URL } from "../../../../config/Spotify";
import { SearchArtists, GetTopArtists, GetArtist } from "../..";
import { Artist } from "../../../data/Artist";
import { mapToArtist } from "./mapToArtist";

export const searchArtists: SearchArtists = async (query: string): Promise<Artist[]> => {
  if (query === "") {
    return [];
  }

  const url = URI(SPOTIFY_API_URL).segment("search").addQuery({ q: query }).toString();
  const { data } = await Axios.get(url);
  return data.map(mapToArtist);
};

export const getTopArtists: GetTopArtists = async (): Promise<Artist[]> => {
  const url = URI(SPOTIFY_API_URL).segment("artists").toString();
  const { data } = await Axios.get(url);
  return data.map(mapToArtist);
};

export const getArtist: GetArtist = async (id: string): Promise<Artist> => {
  const url = URI(SPOTIFY_API_URL).segment("artists").segment(id).toString();
  const { data } = await Axios.get(url);
  return mapToArtist(data);
};
