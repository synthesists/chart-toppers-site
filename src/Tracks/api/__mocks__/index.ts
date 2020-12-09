import { GetTrack } from "..";
import { createFakeTrack } from "../../../../tests/helpers/factories/Track";

export const getTrack: GetTrack = async () => createFakeTrack();
