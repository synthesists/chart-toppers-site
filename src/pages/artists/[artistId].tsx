import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  const { artistId } = router.query;

  return (
    <div>
      <span>Chart Toppers: {artistId}</span>
    </div>
  );
};

export default Page;
