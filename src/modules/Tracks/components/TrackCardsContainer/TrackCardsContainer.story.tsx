import React from "react";
import { Story } from "@storybook/react/types-6-0";
import TrackCardsContainer from "./TrackCardsContainer";
import { createFakeTrack } from "../../../../../tests/helpers/factories/Track";

export default {
  title: "Components/Track",
};

const TrackCardsContainerStory: Story = () => {
  return (
    <TrackCardsContainer
      tracks={[createFakeTrack(), createFakeTrack(), createFakeTrack(), createFakeTrack(), createFakeTrack()]}
    />
  );
};

export { TrackCardsContainerStory as CardContainer };
