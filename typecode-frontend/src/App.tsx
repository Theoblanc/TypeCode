import React from "react";
import { ThemeProvider } from "./typed-components";
import theme from "./styles/Theme";
import Routes from "./components/Routes";
import { GlobalStyle } from "./styles/global-styles";
import { ApolloProvider } from "react-apollo";
import client from "./apollo/Clinet";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </ApolloProvider>
    </React.Fragment>
  );
};

export default App;
