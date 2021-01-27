import faker from "faker";
import { Track } from "~modules/Tracks/data/Track";
import { createFakeImage } from "./Image";

const generateName = () =>
  `The ${faker.commerce.productAdjective()} ${faker.commerce.product()} from ${faker.address.city()}`;

const generatePreviewUrl = () => faker.random.arrayElement([faker.internet.url(), null]);

export const createFakeTrack = (): Track => ({
  id: faker.random.alphaNumeric(15),
  name: generateName(),
  previewUrl: generatePreviewUrl(),
  artistIds: [faker.random.uuid()],
  albumId: faker.random.uuid(),
  albumName: generateName(),
  weeksInTop100: faker.random.number(100),
  images: [createFakeImage(), createFakeImage()],
});
