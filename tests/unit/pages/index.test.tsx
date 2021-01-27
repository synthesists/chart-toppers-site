import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as artistApi from "~modules/Artists/api";
import Homepage from "src/pages";
import { renderAct } from "tests/helpers/utils/render-act";

const spyOnSearchArtists = jest.spyOn(artistApi, "searchArtists");
const spyOnGetTopArtists = jest.spyOn(artistApi, "getTopArtists");

describe("homepage", () => {
  it("should get the top artists", async () => {
    await renderAct(<Homepage />);

    expect(spyOnGetTopArtists).toHaveBeenCalled();
  });

  it("should search for an artist", async () => {
    const searchTerm = "Artist Name";
    await renderAct(<Homepage />);

    const searchArtistInput = screen.getByRole("textbox");
    userEvent.type(searchArtistInput, searchTerm);

    await waitFor(() => {
      expect(spyOnSearchArtists).toHaveBeenCalledWith(searchTerm);
    });
  });
});
