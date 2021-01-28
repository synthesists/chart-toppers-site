import React from "react";
import { Story } from "@storybook/react/types-6-0";
import TrackCard from ".";
import { createFakeTrack } from "../../../../../tests/helpers/factories/Track";

export default {
  title: "Components/Track",
};

const TrackCardStory: Story = () => {
  return (
    <section role="list" className="track-card-grid">
      <TrackCard track={createFakeTrack()} />
      <TrackCard track={createFakeTrack()} />
      <TrackCard track={createFakeTrack()} />
      <TrackCard track={createFakeTrack()} />
    </section>
  );
};

export { TrackCardStory as Card };
