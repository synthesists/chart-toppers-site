import React, { FC } from "react";
import { Track } from "../../data/Track";
import TrackCard from "../TrackCard";

type Props = {
  tracks: Track[];
};

const TrackCardsContainer: FC<Props> = ({ tracks }: Props) => (
  <section role="list" className="track-card-grid">
    {tracks.map((track) => (
      <TrackCard track={track} key={track.id} />
    ))}
  </section>
);

export default TrackCardsContainer;
