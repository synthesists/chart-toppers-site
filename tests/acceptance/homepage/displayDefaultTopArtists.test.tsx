import React from "react";
import { screen, waitFor } from "@testing-library/react";

import * as artistApi from "~modules/Artists/api";
import Homepage from "src/pages";
import { createFakeArtist } from "../../helpers/factories/Artist";
import { renderAct } from "tests/helpers/utils/render-act";

const firstDefaultArtist = createFakeArtist();

jest
  .spyOn(artistApi, "getTopArtists")
  .mockResolvedValue([firstDefaultArtist, createFakeArtist(), createFakeArtist(), createFakeArtist()]);

test("display top artists by default on homepage", async () => {
  await renderAct(<Homepage />);

  const artistCard = screen.getByRole("link", { name: firstDefaultArtist.name });
  expect(artistCard).toHaveAttribute("href", `/artists/${firstDefaultArtist.id}`);
  expect(artistCard).toHaveTextContent(firstDefaultArtist.name);
});
