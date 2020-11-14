import { Artist } from "../data/Artist";
import {
  searchArtists as searchArtistsFromSpotify,
  getTopArtists as getTopArtistsFromSpotify,
} from "./adapters/Spotify/spotify-content-api";

export type SearchArtists = (query: string) => Promise<Artist[]>;
export const searchArtists: SearchArtists = searchArtistsFromSpotify;

export type GetTopArtists = () => Promise<Artist[]>;
export const getTopArtists: GetTopArtists = getTopArtistsFromSpotify;
