import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Homepage from "../../src/pages";
import * as artistApi from "../../src/artists/api";
import { createFakeArtist } from "../helpers/factories/artist";

const artist = createFakeArtist();
const artists = [artist, createFakeArtist(), createFakeArtist(), createFakeArtist()];

const spyOnSearchArtists = jest.spyOn(artistApi, "searchArtists").mockResolvedValue(artists);

test("display artist search results for a search term and link to their page", async () => {
  render(<Homepage />);

  const searchArtistInput = screen.getByLabelText("Search artists", { selector: "input" });
  userEvent.type(searchArtistInput, artist.name);

  expect(spyOnSearchArtists).toHaveBeenLastCalledWith(artist.name);

  await waitFor(() => {
    const artistCard = screen.getByRole("link", { name: artist.name });
    expect(artistCard).toHaveAttribute("href", `/artists/${artist.id}/chart`);
  });
});
