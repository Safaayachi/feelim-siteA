import React from "react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <SessionProvider session={pageProps.session}>
	<Component {...pageProps} />
  </SessionProvider>
);

export default App;
