import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import * as artistApi from "../../../src/Artists/api";
import ArtistDetail from "../../../src/pages/artists/[artistId]";
import { createFakeArtist } from "../../helpers/factories/Artist";
import { mockNextRouter } from "../../helpers/mocks/NextRouter";

const artist = createFakeArtist();

jest.spyOn(artistApi, "getArtist").mockResolvedValue(artist);
mockNextRouter({ query: { artistId: artist.id } });

test("display Artist information in Artist Detail page", async () => {
  render(<ArtistDetail />);

  await waitFor(() => {
    expect(screen.getByRole("heading", { name: artist.name })).toBeInTheDocument();
    artist.genres.forEach((genre) => expect(screen.getByText(genre)).toBeInTheDocument());
  });
});
