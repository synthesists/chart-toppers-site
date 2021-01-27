import { GetArtist, GetTopArtists, SearchArtists } from "..";
import { createFakeArtist } from "tests/helpers/factories/Artist";

export const searchArtists: SearchArtists = async () => [];
export const getTopArtists: GetTopArtists = async () => [];
export const getArtist: GetArtist = async () => createFakeArtist();
