import Axios from "axios";
import URI from "urijs";
import { SPOTIFY_API_URL } from "../../config/Spotify";
import { Record } from "../data/Record";

export const getRecordsForArtist = async (id: string): Promise<Record[]> => {
  const url = URI(SPOTIFY_API_URL).segment("artist").segment(id).segment("charthistory").toString();
  const { data } = await Axios.get(url);
  console.log(data.records);
  return data.records;
};
