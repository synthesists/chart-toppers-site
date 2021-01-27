import React from "react";
import Link from "next/link";
import { Artist } from "../../data/Artist";

type Props = {
  artist: Artist;
};

const ArtistCard: React.FC<Props> = ({ artist }: Props) => (
  <Link href={`/artists/${artist.id}`}>
    <a className={"c-card c-card--full"} aria-label={artist.name}>
      <div className="c-card__image-container">
        <div id="dummy"></div>
        {artist.images.length > 0 && <img src={artist.images[0].url} alt={artist.name} />}
      </div>
      <div className="c-card__inner">
        <div className="c-card__title">{artist.name}</div>
      </div>
    </a>
  </Link>
);

export default ArtistCard;
