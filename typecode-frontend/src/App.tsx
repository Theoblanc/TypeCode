import React from "react";
import { ThemeProvider } from "./typed-components";
import theme from "./styles/Theme";
import Routes from "./components/Routes";
import { GlobalStyle } from "./styles/global-styles";
// import { gql } from "apollo-boost";
// import Loading from "./pages/Loading";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
