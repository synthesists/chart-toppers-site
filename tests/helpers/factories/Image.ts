import faker from "faker";
import { Image } from "../../../src/data/Image";

export const createFakeImage = (): Image => ({
  url: `${faker.image.nightlife()}?random=${Math.random()}`,
  width: faker.random.number(),
  height: faker.random.number(),
});
