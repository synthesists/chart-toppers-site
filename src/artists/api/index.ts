import { Artist } from "../data/artist";
import {
  searchArtists as searchArtistsFromSpotify,
  getTopArtists as getTopArtistsFromSpotify,
} from "./adapters/Spotify/spotify-content-api";

export type SearchArtists = (query: string) => Promise<Artist[]>;
export const searchArtists = searchArtistsFromSpotify;

export type GetTopArtists = () => Promise<Artist[]>;
export const getTopArtists = getTopArtistsFromSpotify;
