import faker from "faker";
import { Artist } from "../../../src/Artists/data/Artist";
import { createFakeImage } from "./Image";

export const createFakeArtist = (): Artist => ({
  name: `The ${faker.hacker.adjective()} ${faker.company.bsNoun()}`,
  id: faker.random.alphaNumeric(15),
  images: [createFakeImage(), createFakeImage()],
});
