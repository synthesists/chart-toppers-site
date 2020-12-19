import React from "react";
import Link from "next/link";
import { Track } from "../../data/Track";

type Props = {
  track: Track;
};

const TrackCard: React.FC<Props> = ({ track }: Props) => (
  <Link href={`/tracks/${track.id}`}>
    <a className={"c-card c-card--link"} aria-label={track.name}>
      <div className="c-card__image-container">
        {track.images.length > 0 && <img src={track.images[0].url} alt={track.name} />}
      </div>
      <div className="c-card__inner">
        <div className="c-card__title">
          <span>{track.name}</span>
          <span>{track.weeksInTop100}</span>
        </div>
      </div>
    </a>
  </Link>
);

export default TrackCard;
