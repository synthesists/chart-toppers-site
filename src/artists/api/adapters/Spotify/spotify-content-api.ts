import Axios from "axios";
import { SearchArtists, GetTopArtists } from "../..";
import { Artist } from "../../../data/artist";
import { mapToArtist } from "./mapToArtist";

export const searchArtists: SearchArtists = async (query: string): Promise<Artist[]> => {
  if (query === "") {
    return [];
  }

  const { data } = await Axios.get(`https://2ufcgrmwmk.execute-api.eu-west-2.amazonaws.com/dev/search?q=${query}`);
  return data.map(mapToArtist);
};

export const getTopArtists: GetTopArtists = async (): Promise<Artist[]> => {
  const { data } = await Axios.get(`https://2ufcgrmwmk.execute-api.eu-west-2.amazonaws.com/dev/artists`);
  return data.map(mapToArtist);
};
