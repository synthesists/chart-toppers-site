import faker from "faker";
import { Track } from "../../../src/Tracks/data/Track";

const generateName = () =>
  `The ${faker.commerce.productAdjective} ${faker.commerce.product} from  ${faker.address.city}`;

const generatePreviewUrl = () => faker.random.arrayElement([faker.internet.url(), null]);

export const createFakeTrack = (): Track => ({
  id: faker.random.alphaNumeric(15),
  name: generateName(),
  previewUrl: generatePreviewUrl(),
  artistIds: [faker.random.uuid()],
  albumId: faker.random.uuid(),
});
