import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { getArtist } from "~modules/Artists/api";
import { Artist } from "~modules/Artists/data/Artist";
import ArtistHeroBanner from "~modules/Artists/components/ArtistHeroBanner";
import { Track } from "~modules/Tracks/data/Track";
import { getTracksForArtist } from "~modules/Tracks/api";
import TrackCardsContainer from "~modules/Tracks/components/TrackCardsContainer";

const ArtistDetail: NextPage = () => {
  const router = useRouter();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);

  const { artistId } = router.query;

  useEffect(() => {
    if (artistId) {
      getArtist(artistId as string).then(setArtist);
      getTracksForArtist(artistId as string).then(setTracks);
    }
  }, [artistId]);

  return (
    <>
      <ArtistHeroBanner artist={artist} />
      <TrackCardsContainer tracks={tracks} />
    </>
  );
};

export default ArtistDetail;
