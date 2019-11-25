import React from "react";
import { ThemeProvider } from "./typed-components";
import theme from "./Styles/Theme";
import Routes from "./Components/Routes";
import { GlobalStyle } from "./Styles/global-styles";
import { ApolloProvider } from "react-apollo";
import client from "./Apollo/Clinet";

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
