import faker from "faker";
import { Artist } from "~modules/Artists/data/Artist";
import { createFakeImage } from "./Image";

const musicGenres = ["rap", "pop", "rock", "jazz", "R&B", "folk", "classical", "EDM"];
const fakeGenre = () => `${faker.commerce.productAdjective()} ${faker.random.arrayElement(musicGenres)}`;

export const createFakeArtist = (): Artist => ({
  name: `The ${faker.hacker.adjective()} ${faker.company.bsNoun()}`,
  id: faker.random.alphaNumeric(15),
  images: [createFakeImage(), createFakeImage()],
  genres: [fakeGenre(), fakeGenre(), fakeGenre()],
});
