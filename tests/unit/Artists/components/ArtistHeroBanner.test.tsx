import React from "react";
import { render, screen } from "@testing-library/react";
import ArtistHeroBanner from "~modules/Artists/components/ArtistHeroBanner";
import { createFakeArtist } from "tests/helpers/factories/Artist";

const artist = createFakeArtist();

describe("ArtistHeroBanner", () => {
  it("should render the Artist name as a header", () => {
    render(<ArtistHeroBanner artist={artist} />);

    expect(screen.getByRole("heading", { name: artist.name })).toBeInTheDocument();
  });

  it("should render the Artist image", () => {
    render(<ArtistHeroBanner artist={artist} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should render all genres that an Artist is associated with", () => {
    render(<ArtistHeroBanner artist={artist} />);

    artist.genres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });
});
