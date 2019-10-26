import React from "react";
import { ThemeProvider } from "./typed-components";
import theme from "./Styles/Theme";
import Routes from "./Components/Routes";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
