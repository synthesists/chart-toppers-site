import React from "react";
import { render, screen } from "@testing-library/react";
import { createFakeTrack } from "../../../helpers/factories/Track";
import TrackCard from "../../../../src/Tracks/components/TrackCard";

const track = createFakeTrack();

describe("TrackCard", () => {
  it("should render the Track name", () => {
    render(<TrackCard track={track} />);

    expect(screen.getByText(track.name)).toBeInTheDocument();
  });

  it("should render the album name", () => {
    render(<TrackCard track={track} />);

    expect(screen.getByText(track.albumName)).toBeInTheDocument();
  });

  it("should render the number of weeks a track was in top 100", () => {
    render(<TrackCard track={track} />);

    expect(screen.getByText(`${track.weeksInTop100}`)).toBeInTheDocument();
  });

  it("should render the album image for a track", () => {
    render(<TrackCard track={track} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", track.images[0].url);
  });
});
