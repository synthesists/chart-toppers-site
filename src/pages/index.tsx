import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Artist } from "../Artists/data/Artist";
import ArtistCard from "../Artists/components/ArtistCard";
import { searchArtists, getTopArtists } from "../Artists/api";
import Input from "../elements/Input";
import HeroBanner from "../components/HeroBanner";

const Page: NextPage = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    getTopArtists().then(setArtists);
  }, []);

  const handleInputChange = (query: string): void => {
    searchArtists(query).then(setArtists);
  };

  return (
    <>
      <HeroBanner>
        <Input handleChange={handleInputChange} />
      </HeroBanner>
      <section role="list" className="card-grid">
        {artists.map((artist) => (
          <ArtistCard artist={artist} key={artist.id} />
        ))}
      </section>
    </>
  );
};

export default Page;
