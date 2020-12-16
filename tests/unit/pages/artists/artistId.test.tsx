import React from "react";
import { render, waitFor } from "@testing-library/react";

import * as artistApi from "../../../../src/Artists/api";
import ArtistDetail from "../../../../src/pages/artists/[artistId]";
import { createFakeArtist } from "../../../helpers/factories/Artist";
import * as ArtistHeroBanner from "../../../../src/Artists/components/ArtistHeroBanner";
import { mockNextRouter } from "../../../helpers/mocks/NextRouter";

const artist = createFakeArtist();
const spyOnGetArtist = jest.spyOn(artistApi, "getArtist").mockResolvedValue(artist);
mockNextRouter({ query: { artistId: artist.id } });

const spyOnArtistHeroBanner = jest.spyOn(ArtistHeroBanner, "default");

describe("artistDetail", () => {
  it("should get the artist", async () => {
    render(<ArtistDetail />);

    await waitFor(() => {
      expect(spyOnGetArtist).toHaveBeenCalledWith(artist.id);
    });
  });

  it("should render an Artist HeroBanner", async () => {
    render(<ArtistDetail />);

    await waitFor(() => {
      expect(spyOnArtistHeroBanner).toHaveBeenCalledWith({ artist }, expect.anything());
    });
  });
});
