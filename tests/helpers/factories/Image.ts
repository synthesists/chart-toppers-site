import faker from "faker";
import { Image } from "~modules/common/data/Image";

export const createFakeImage = (): Image => ({
  url: `${faker.image.nightlife()}?random=${Math.random()}`,
  width: faker.random.number(),
  height: faker.random.number(),
});
