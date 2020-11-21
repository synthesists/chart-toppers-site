import React, { ReactNode } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/import.scss";

const App = ({ Component, pageProps }: AppProps): ReactNode => <Component {...pageProps} />;

export default App;
