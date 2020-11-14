import faker from "faker";
import { Artist } from "../../../src/artists/data/Artist";

export const createFakeArtist = (): Artist => ({
  name: `The ${faker.hacker.adjective()} ${faker.company.bsNoun()}`,
  id: faker.random.alphaNumeric(15),
  image: { url: `${faker.image.nightlife()}?random=${Math.random()}` },
});
