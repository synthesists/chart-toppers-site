import React, { ChangeEvent, useEffect, useState } from "react";
import { NextPage } from "next";
import { Artist } from "../artists/data/artist";
import ArtistCard from "../artists/components/ArtistCard";
import { searchArtists, getTopArtists } from "../artists/api";

const Page: NextPage = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    getTopArtists().then(setArtists);
  }, []);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => searchArtists(e.target.value).then(setArtists);

  return (
    <>
      <input aria-label="Search artists" onChange={onInputChange} />
      <section role="list" className="card-grid">
        {artists.map((artist) => (
          <ArtistCard artist={artist} key={artist.id} />
        ))}
      </section>
    </>
  );
};

export default Page;
