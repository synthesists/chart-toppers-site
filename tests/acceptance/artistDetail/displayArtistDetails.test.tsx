import { screen } from "@testing-library/react";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

import * as artistsApi from "~modules/Artists/api";
import * as tracksApi from "~modules/Tracks/api";
import { createFakeArtist } from "../../helpers/factories/Artist";
import { createFakeTrack } from "../../helpers/factories/Track";
import ArtistDetail, { getServerSideProps } from "src/pages/artists/[artistId]";
import { renderPageWithServerSideProps } from "tests/helpers/utils/render-act";

const artist = createFakeArtist();
const track = createFakeTrack();

jest.spyOn(artistsApi, "getArtist").mockResolvedValue(artist);
jest.spyOn(tracksApi, "getTracksForArtist").mockResolvedValue([track]);

test("display Artist information in Artist Detail page", async () => {
  const context: Partial<GetServerSidePropsContext<ParsedUrlQuery>> = { query: { artistId: artist.id } };

  await renderPageWithServerSideProps(
    ArtistDetail,
    getServerSideProps,
    context as GetServerSidePropsContext<ParsedUrlQuery>
  );

  expect(screen.getByRole("heading", { name: artist.name })).toBeInTheDocument();
  artist.genres.forEach((genre) => expect(screen.getByText(genre)).toBeInTheDocument());
  expect(screen.getByText(track.name)).toBeInTheDocument();
});
