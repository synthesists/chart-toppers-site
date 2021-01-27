import React from "react";
import { render, waitFor } from "@testing-library/react";

import * as artistsApi from "~modules/Artists/api";
import * as tracksApi from "~modules/Tracks/api";
import ArtistDetail from "src/pages/artists/[artistId]";
import { createFakeArtist } from "tests/helpers/factories/Artist";
import * as ArtistHeroBanner from "~modules/Artists/components/ArtistHeroBanner";
import * as TrackCardsContainer from "~modules/Tracks/components/TrackCardsContainer";
import { mockNextRouter } from "tests/helpers/mocks/NextRouter";
import { createFakeTrack } from "tests/helpers/factories/Track";

const artist = createFakeArtist();
const tracks = [createFakeTrack()];
const spyOnGetArtist = jest.spyOn(artistsApi, "getArtist").mockResolvedValue(artist);
const spyOnGetTracksForArtist = jest.spyOn(tracksApi, "getTracksForArtist").mockResolvedValue(tracks);
mockNextRouter({ query: { artistId: artist.id } });

const spyOnArtistHeroBanner = jest.spyOn(ArtistHeroBanner, "default");
const spyOnTrackCardsContainer = jest.spyOn(TrackCardsContainer, "default");

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

  it("should render a TrackCardsContainer", async () => {
    render(<ArtistDetail />);

    await waitFor(() => {
      expect(spyOnGetTracksForArtist).toHaveBeenCalledWith(artist.id);
      expect(spyOnTrackCardsContainer).toHaveBeenCalledWith({ tracks }, expect.anything());
    });
  });
});
