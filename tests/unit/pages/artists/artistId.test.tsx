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
import { renderAct } from "tests/helpers/utils/render-act";

const artist = createFakeArtist();
const tracks = [createFakeTrack()];
const spyOnGetArtist = jest.spyOn(artistsApi, "getArtist").mockResolvedValue(artist);
const spyOnGetTracksForArtist = jest.spyOn(tracksApi, "getTracksForArtist").mockResolvedValue(tracks);
mockNextRouter({ query: { artistId: artist.id } });

const spyOnArtistHeroBanner = jest.spyOn(ArtistHeroBanner, "default");
const spyOnTrackCardsContainer = jest.spyOn(TrackCardsContainer, "default");

describe("artistDetail", () => {
  it("should get the artist", async () => {
    await renderAct(<ArtistDetail />);

    expect(spyOnGetArtist).toHaveBeenCalledWith(artist.id);
  });

  it("should render an Artist HeroBanner", async () => {
    await renderAct(<ArtistDetail />);

    expect(spyOnArtistHeroBanner).toHaveBeenCalledWith({ artist }, expect.anything());
  });

  it("should get the tracks for the artist", async () => {
    await renderAct(<ArtistDetail />);

    expect(spyOnGetTracksForArtist).toHaveBeenCalledWith(artist.id);
  });

  it("should render a TrackCardsContainer", async () => {
    await renderAct(<ArtistDetail />);

    expect(spyOnTrackCardsContainer).toHaveBeenCalledWith({ tracks }, expect.anything());
  });
});
