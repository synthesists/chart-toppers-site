import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import * as artistApi from "../../../src/artists/api";
import Homepage from "../../../src/pages";
import { createFakeArtist } from "../../helpers/factories/Artist";

const firstDefaultArtist = createFakeArtist();

jest
  .spyOn(artistApi, "getTopArtists")
  .mockResolvedValue([firstDefaultArtist, createFakeArtist(), createFakeArtist(), createFakeArtist()]);

test("display top artists by default on homepage", async () => {
  render(<Homepage />);

  await waitFor(() => {
    const artistCard = screen.getByRole("link", { name: firstDefaultArtist.name });
    expect(artistCard).toHaveAttribute("href", `/artists/${firstDefaultArtist.id}/chart`);
    expect(artistCard).toHaveTextContent(firstDefaultArtist.name);
  });
});
