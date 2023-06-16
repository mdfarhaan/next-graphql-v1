import React from "react";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/apollo-client";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
