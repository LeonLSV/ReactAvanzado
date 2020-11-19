import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Context from "./Context";
import { App } from "./App";

const client = new ApolloClient({
  uri: "https://petgramm-server-vercel-leon-9ep5ag4so.vercel.app/graphql",
});

ReactDOM.render(
  <Context.Provider value={{ isAuth: true }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
