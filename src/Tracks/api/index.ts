import { Track } from "../data/Track";
import { getTracksForArtist as getTracksForArtistFromSpotify } from "./adapters/Spotify";

export type GetTracksForArtist = (artistId: string) => Promise<Track[]>;
export const getTracksForArtist: GetTracksForArtist = getTracksForArtistFromSpotify;
