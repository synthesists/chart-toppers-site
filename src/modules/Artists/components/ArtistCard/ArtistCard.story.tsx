import React from "react";
import { Story } from "@storybook/react/types-6-0";
import ArtistCard from ".";
import { createFakeArtist } from "../../../../../tests/helpers/factories/Artist";

export default {
  title: "Components/Artist",
};

const ArtistCardStory: Story = () => {
  return (
    <section role="list" className="card-grid">
      <ArtistCard artist={createFakeArtist()} />
      <ArtistCard artist={createFakeArtist()} />
      <ArtistCard artist={createFakeArtist()} />
      <ArtistCard artist={createFakeArtist()} />
      <ArtistCard artist={createFakeArtist()} />
      <ArtistCard artist={createFakeArtist()} />
      <ArtistCard artist={createFakeArtist()} />
      <ArtistCard artist={createFakeArtist()} />
    </section>
  );
};

export { ArtistCardStory as Card };
