import React from "react";
import { render, waitFor } from "@testing-library/react";
import * as nextRouter from "next/router";
import { NextRouter } from "next/router";

import * as artistApi from "../../../../src/Artists/api";
import ArtistDetail from "../../../../src/pages/artists/[artistId]";

const artistId = "artist-id";
const spyOnGetArtist = jest.spyOn(artistApi, "getArtist");
jest.spyOn(nextRouter, "useRouter").mockReturnValue(({ query: { artistId } } as unknown) as NextRouter);

describe("artistDetail", () => {
  it("should get the artist", async () => {
    render(<ArtistDetail />);

    await waitFor(() => {
      expect(spyOnGetArtist).toHaveBeenCalledWith(artistId);
    });
  });
});
