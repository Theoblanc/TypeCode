import React from "react";
import { ThemeProvider } from "./typed-components";
import theme from "./styles/Theme";
import Routes from "./components/Routes";
import { GlobalStyle } from "./styles/global-styles";
import { ApolloProvider } from "react-apollo";
import Client from "./apollo/Client";
// import Loading from "./pages/Loading";

const App: React.FC = () => {
  // const [loading, setLoading] = useState(false);

  return (
    <React.Fragment>
      <ApolloProvider client={Client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </ApolloProvider>
    </React.Fragment>
  );
};

export default App;
