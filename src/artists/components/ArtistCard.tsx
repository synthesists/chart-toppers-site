import React from "react";
import Link from "next/link";
import { Artist } from "../data/artist";

type Props = {
  artist: Artist;
};

const ArtistCard: React.FC<Props> = ({ artist }: Props) => (
  <Link href={`/artists/${artist.id}/chart`}>
    <a className={"c-card"} aria-label={artist.name}>
      <div className="c-card__image-container">{artist.image && <img src={artist.image.url} alt={artist.name} />}</div>
      <div className="c-card__inner">
        <div className="c-card__title">{artist.name}</div>
      </div>
    </a>
  </Link>
);

export default ArtistCard;
