import React, { ReactNode } from "react";
import { act, render } from "@testing-library/react";
import { GetServerSidePropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

export const renderAct = async (Component: ReactNode) => {
  await act(async () => {
    render(<>{Component}</>);
  });
};

export const renderPageWithServerSideProps = async <Props,>(
  Page: NextPage<Props>,
  getServerSideProps: (context: GetServerSidePropsContext<ParsedUrlQuery>) => Promise<{ props: Props }>,
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const { props } = await getServerSideProps(context);
  await renderAct(<Page {...props} />);
};
