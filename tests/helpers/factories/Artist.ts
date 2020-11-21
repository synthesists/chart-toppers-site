import faker from "faker";
import { Artist, Image } from "../../../src/Artists/data/Artist";

const createFakeImage = (): Image => ({
  url: `${faker.image.nightlife()}?random=${Math.random()}`,
});

export const createFakeArtist = (): Artist => ({
  name: `The ${faker.hacker.adjective()} ${faker.company.bsNoun()}`,
  id: faker.random.alphaNumeric(15),
  images: [createFakeImage(), createFakeImage()],
});
