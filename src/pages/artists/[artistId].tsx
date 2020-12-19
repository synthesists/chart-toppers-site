import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { getArtist } from "../../Artists/api";
import { useRouter } from "next/router";
import { Artist } from "../../Artists/data/Artist";
import ArtistHeroBanner from "../../Artists/components/ArtistHeroBanner";
import { Track } from "../../Tracks/data/Track";
import { getTracksForArtist } from "../../Tracks/api";
import TrackCardsContainer from "../../Tracks/components/TrackCardsContainer";

const ArtistDetail: NextPage = () => {
  const router = useRouter();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);

  const { artistId } = router.query;

  useEffect(() => {
    if (artistId) {
      getArtist(artistId as string).then(setArtist);
    }
  }, [artistId]);

  useEffect(() => {
    if (artistId) {
      getTracksForArtist(artistId as string).then(setTracks);
    }
  }, [artistId]);

  return (
    <div>
      <ArtistHeroBanner artist={artist} />
      <TrackCardsContainer tracks={tracks} />
    </div>
  );
};

export default ArtistDetail;
