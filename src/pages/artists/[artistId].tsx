import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { getArtist } from "../../Artists/api";
import { useRouter } from "next/router";
import { Artist } from "../../Artists/data/Artist";
import ArtistHeroBanner from "../../Artists/components/ArtistHeroBanner";

const ArtistDetail: NextPage = () => {
  const router = useRouter();
  const [artist, setArtist] = useState<Artist | null>(null);

  const { artistId } = router.query;

  useEffect(() => {
    if (artistId) {
      getArtist(artistId as string).then(setArtist);
    }
  }, [artistId]);

  return (
    <div>
      <ArtistHeroBanner artist={artist} />
    </div>
  );
};

export default ArtistDetail;
