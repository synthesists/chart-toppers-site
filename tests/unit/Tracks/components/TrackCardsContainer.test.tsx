import React from "react";
import { render } from "@testing-library/react";
import { createFakeTrack } from "tests/helpers/factories/Track";
import TrackCardsContainer from "~modules/Tracks/components/TrackCardsContainer";
import * as TrackCard from "~modules/Tracks/components/TrackCard";

const tracks = [createFakeTrack(), createFakeTrack()];
const spyOnTrackCard = jest.spyOn(TrackCard, "default");

describe("TrackCardsContainer", () => {
  it("should render each Track as a card", () => {
    render(<TrackCardsContainer tracks={tracks} />);

    tracks.forEach((track) => expect(spyOnTrackCard).toHaveBeenCalledWith({ track }, expect.anything()));
  });
});
