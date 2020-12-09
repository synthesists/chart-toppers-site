import fc from "fast-check";

export const generateImage = fc.record({
  url: fc.webUrl(),
  width: fc.nat(),
  height: fc.nat(),
});
