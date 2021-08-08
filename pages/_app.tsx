import React from "react";
import { Provider } from "next-auth/client";
import { Grommet } from "grommet";
import type { AppProps } from "next/app";

import "../styles/globals.css";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "20px",
    },
    input: {
      font: {
        weight: "standard",
      },
    },
  },
};

const App = ({ Component, pageProps }: AppProps) => (
  <Provider session={pageProps.session}>
    <Grommet theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  </Provider>
);
export default App;
