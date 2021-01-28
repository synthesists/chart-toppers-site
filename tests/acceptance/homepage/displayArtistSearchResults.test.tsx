import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as artistApi from "~modules/Artists/api";
import Homepage from "src/pages";
import { createFakeArtist } from "../../helpers/factories/Artist";
import { renderAct } from "tests/helpers/utils/render-act";

const firstSearchResultArtist = createFakeArtist();

jest.spyOn(artistApi, "searchArtists").mockResolvedValue([firstSearchResultArtist]);

test("display artist search results for a search term and link to their page", async () => {
  await renderAct(<Homepage />);

  const searchArtistInput = screen.getByRole("textbox");
  userEvent.type(searchArtistInput, firstSearchResultArtist.name);

  await waitFor(() => {
    const artistCard = screen.getByRole("link", { name: firstSearchResultArtist.name });
    expect(artistCard).toHaveAttribute("href", `/artists/${firstSearchResultArtist.id}`);
    expect(artistCard).toHaveTextContent(firstSearchResultArtist.name);
  });
});
