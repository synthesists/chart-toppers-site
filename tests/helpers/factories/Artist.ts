import faker from "faker";
import { Artist } from "../../../src/Artists/data/Artist";
import { createFakeImage } from "./Image";

const musicGenres = ["rap", "pop", "rock", "jazz", "R&B"];
const fakeGenre = () => `${faker.commerce.productAdjective()} ${faker.random.arrayElement(musicGenres)}`;

export const createFakeArtist = (): Artist => ({
  name: `The ${faker.hacker.adjective()} ${faker.company.bsNoun()}`,
  id: faker.random.alphaNumeric(15),
  images: [createFakeImage(), createFakeImage()],
  genres: [fakeGenre(), fakeGenre(), fakeGenre()],
});
