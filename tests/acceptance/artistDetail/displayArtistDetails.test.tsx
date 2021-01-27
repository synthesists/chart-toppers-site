import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import * as artistsApi from "~modules/Artists/api";
import * as tracksApi from "~modules/Tracks/api";
import { createFakeArtist } from "../../helpers/factories/Artist";
import { mockNextRouter } from "../../helpers/mocks/NextRouter";
import { createFakeTrack } from "../../helpers/factories/Track";
import ArtistDetail from "src/pages/artists/[artistId]";

const artist = createFakeArtist();
const track = createFakeTrack();

jest.spyOn(artistsApi, "getArtist").mockResolvedValue(artist);
jest.spyOn(tracksApi, "getTracksForArtist").mockResolvedValue([track]);
mockNextRouter({ query: { artistId: artist.id } });

test("display Artist information in Artist Detail page", async () => {
  render(<ArtistDetail />);

  await waitFor(() => {
    expect(screen.getByRole("heading", { name: artist.name })).toBeInTheDocument();
    artist.genres.forEach((genre) => expect(screen.getByText(genre)).toBeInTheDocument());
    expect(screen.getByText(track.name)).toBeInTheDocument();
  });
});
