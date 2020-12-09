import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { getArtist } from "../../Artists/api";
import { useRouter } from "next/router";
import { Artist } from "../../Artists/data/Artist";
import ChartHistory from "../../components/ChartHistory";

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
      {artist?.name}
      {artist && <ChartHistory artist={artist} />}
    </div>
  );
};

export default ArtistDetail;
