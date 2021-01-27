import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as artistApi from "~modules/Artists/api";
import Homepage from "src/pages";

const spyOnSearchArtists = jest.spyOn(artistApi, "searchArtists");
const spyOnGetTopArtists = jest.spyOn(artistApi, "getTopArtists");

describe("homepage", () => {
  it("should get the top artists", async () => {
    render(<Homepage />);

    await waitFor(() => {
      expect(spyOnGetTopArtists).toHaveBeenCalled();
    });
  });

  it("should search for an artist", async () => {
    const searchTerm = "Artist Name";
    render(<Homepage />);

    const searchArtistInput = screen.getByRole("textbox");
    userEvent.type(searchArtistInput, searchTerm);

    await waitFor(() => {
      expect(spyOnSearchArtists).toHaveBeenCalledWith(searchTerm);
    });
  });
});
