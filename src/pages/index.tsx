import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";

import { Artist } from "~modules/Artists/data/Artist";
import ArtistCard from "~modules/Artists/components/ArtistCard";
import { searchArtists, getTopArtists } from "~modules/Artists/api";
import Input from "../modules/common/components/Input";
import HeroBanner from "~modules/common/components/HeroBanner";

const Homepage: NextPage = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    getTopArtists().then(setArtists);
  }, []);

  const handleInputChange = (query: string): void => {
    searchArtists(query).then(setArtists);
  };

  return (
    <>
      <Head>
        <title>Chart Toppers</title>
      </Head>
      <HeroBanner>
        <Input handleChange={handleInputChange} placeholder="Search for your favourite artists..." />
        <h4>
          <span className="bold">Top searches: </span>Ed Sheeran, Kanye West, The Weeknd
        </h4>
      </HeroBanner>
      <section role="list" className="card-grid">
        {artists.map((artist) => (
          <ArtistCard artist={artist} key={artist.id} />
        ))}
      </section>
    </>
  );
};

export default Homepage;
