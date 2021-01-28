import React from "react";

import * as artistsApi from "~modules/Artists/api";
import * as tracksApi from "~modules/Tracks/api";
import ArtistDetail, { getServerSideProps } from "src/pages/artists/[artistId]";
import { createFakeArtist } from "tests/helpers/factories/Artist";
import * as ArtistHeroBanner from "~modules/Artists/components/ArtistHeroBanner";
import * as TrackCardsContainer from "~modules/Tracks/components/TrackCardsContainer";
import { createFakeTrack } from "tests/helpers/factories/Track";
import { renderAct } from "tests/helpers/utils/render-act";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

const artist = createFakeArtist();
const tracks = [createFakeTrack()];
const spyOnGetArtist = jest.spyOn(artistsApi, "getArtist").mockResolvedValue(artist);
const spyOnGetTracksForArtist = jest.spyOn(tracksApi, "getTracksForArtist").mockResolvedValue(tracks);

const spyOnArtistHeroBanner = jest.spyOn(ArtistHeroBanner, "default");
const spyOnTrackCardsContainer = jest.spyOn(TrackCardsContainer, "default");

describe("artistDetail", () => {
  it("should get the artist", async () => {
    const context: Partial<GetServerSidePropsContext<ParsedUrlQuery>> = { query: { artistId: artist.id } };

    await getServerSideProps(context as GetServerSidePropsContext<ParsedUrlQuery>);

    expect(spyOnGetArtist).toHaveBeenCalledWith(artist.id);
  });

  it("should server-side inject the artist", async () => {
    const context: Partial<GetServerSidePropsContext<ParsedUrlQuery>> = { query: { artistId: artist.id } };

    const response = await getServerSideProps(context as GetServerSidePropsContext<ParsedUrlQuery>);

    expect(response).toEqual({ props: { artist } });
  });

  it("should render an Artist HeroBanner", async () => {
    await renderAct(<ArtistDetail artist={artist} />);

    expect(spyOnArtistHeroBanner).toHaveBeenCalledWith({ artist }, expect.anything());
  });

  it("should get the tracks for the artist", async () => {
    await renderAct(<ArtistDetail artist={artist} />);

    expect(spyOnGetTracksForArtist).toHaveBeenCalledWith(artist.id);
  });

  it("should render a TrackCardsContainer", async () => {
    await renderAct(<ArtistDetail artist={artist} />);

    expect(spyOnTrackCardsContainer).toHaveBeenCalledWith({ tracks }, expect.anything());
  });
});
