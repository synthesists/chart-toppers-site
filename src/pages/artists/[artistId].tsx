import React, { useEffect, useState } from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import { getArtist } from "~modules/Artists/api";
import { Artist } from "~modules/Artists/data/Artist";
import ArtistHeroBanner from "~modules/Artists/components/ArtistHeroBanner";
import { Track } from "~modules/Tracks/data/Track";
import { getTracksForArtist } from "~modules/Tracks/api";
import TrackCardsContainer from "~modules/Tracks/components/TrackCardsContainer";

type Props = {
  artist: Artist | null;
};

const createEmptyTrack = (id: string): Track => ({
  id,
  name: "loading",
  images: [],
  previewUrl: null,
  artistIds: [],
  albumId: "",
  albumName: "still loading",
  weeksInTop100: -1,
});

const ArtistDetail: NextPage<Props> = ({ artist }: Props) => {
  const [tracks, setTracks] = useState<Track[]>([createEmptyTrack("1"), createEmptyTrack("2"), createEmptyTrack("3")]);

  useEffect(() => {
    if (artist) {
      getTracksForArtist(artist.id).then(setTracks);
    }
  }, [artist]);

  return (
    <>
      <Head>
        <title>{`${artist?.name ?? "artist page"} | Chart Toppers`}</title>
      </Head>
      <ArtistHeroBanner artist={artist} />
      <TrackCardsContainer tracks={tracks} />
    </>
  );
};

export default ArtistDetail;

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
): Promise<{ props: Props }> => {
  const { artistId } = context.query;

  const artist = await getArtist(artistId as string);

  return { props: { artist } };
};
