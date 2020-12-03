import { Track } from "../data/Track";
import { getTrack as getTrackFromSpotify } from "./adapters/Spotify/spotifyTracksApi";

export type GetTrack = (id: string) => Promise<Track>;
export const getTrack: GetTrack = getTrackFromSpotify;
