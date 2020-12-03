import { Artist } from "../data/Artist";
import {
  searchArtists as searchArtistsFromSpotify,
  getTopArtists as getTopArtistsFromSpotify,
  getArtist as getArtistFromSpotify,
} from "./adapters/Spotify";

export type SearchArtists = (query: string) => Promise<Artist[]>;
export const searchArtists: SearchArtists = searchArtistsFromSpotify;

export type GetTopArtists = () => Promise<Artist[]>;
export const getTopArtists: GetTopArtists = getTopArtistsFromSpotify;

export type GetArtist = (id: string) => Promise<Artist>;
export const getArtist: GetArtist = getArtistFromSpotify;
