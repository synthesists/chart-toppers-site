import React, { FC } from "react";
import { Artist } from "../../data/Artist";

type Props = {
  artist: Artist | null;
};

const ArtistHeroBanner: FC<Props> = ({ artist }: Props) => (
  <div className="c-artist-hero">
    <div className="c-artist-hero__inner">
      <h1>
        <span className="c-artist-hero__title">{artist ? artist.name : "artist"}</span>
      </h1>
      <div className="c-artist-hero__tags">
        {artist?.genres.map((genre) => (
          <span className="c-artist-hero__tag" key={genre}>
            {genre}
          </span>
        ))}
      </div>
    </div>
    <div className="c-artist-hero__image-container">
      {artist && <img src={artist.images[0].url} alt={artist.name} />}
    </div>
  </div>
);

export default ArtistHeroBanner;
