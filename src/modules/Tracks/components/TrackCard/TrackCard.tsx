import React from "react";
import Link from "next/link";
import { Track } from "../../data/Track";

type Props = {
  track: Track;
};

const TrackCard: React.FC<Props> = ({ track }: Props) => (
  <Link href={`/tracks/${track.id}`}>
    <a className={"c-track-card c-track-card--link"} aria-label={track.name}>
      <div className="c-track-card__image-container">
        {track.images.length > 0 && (
          <img src={track.images[Math.min(1, track.images.length - 1)].url} alt={track.name} />
        )}
      </div>
      <div className="c-track-card__inner">
        <div className="c-track-card__wrapper">
          <div className="c-track-card__title">{track.name}</div>
        </div>
        <div className="c-track-card__wrapper">
          <div className="c-track-card__subtitle">{track.albumName}</div>
        </div>
      </div>
      <div className="c-track-card__highlight">
        <span>{track.weeksInTop100}</span>
      </div>
    </a>
  </Link>
);

export default TrackCard;
