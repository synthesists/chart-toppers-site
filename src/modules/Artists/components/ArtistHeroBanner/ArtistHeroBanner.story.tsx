import React from "react";
import { Story } from "@storybook/react/types-6-0";
import ArtistHeroBanner from ".";
import { createFakeArtist } from "../../../../../tests/helpers/factories/Artist";

export default {
  title: "Components/Artist",
};

const ArtistHeroBannerStory: Story = () => {
  return <ArtistHeroBanner artist={createFakeArtist()} />;
};

export { ArtistHeroBannerStory as HeroBanner };
