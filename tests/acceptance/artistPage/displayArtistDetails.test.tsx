import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import * as nextRouter from "next/router";
import { NextRouter } from "next/router";

import * as artistApi from "../../../src/Artists/api";
import ArtistDetail from "../../../src/pages/artists/[artistId]";
import { createFakeArtist } from "../../helpers/factories/Artist";

const artist = createFakeArtist();

jest.spyOn(artistApi, "getArtist").mockResolvedValue(artist);
jest.spyOn(nextRouter, "useRouter").mockReturnValue(({ query: { artistId: artist.id } } as unknown) as NextRouter);

test("display top artists by default on homepage", async () => {
  render(<ArtistDetail />);

  await waitFor(() => {
    expect(screen.getByText(artist.name)).toBeInTheDocument();
  });
});
