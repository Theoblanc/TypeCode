import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Room from "../routes/Room";
import Chat from "../routes/Chat";
import { PAGE_PATHS } from "../constants";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"/chat/:chatId"} exact={true} component={Chat} />
    <Route path={"/room"} exact={true} component={Room} />

    {/* <Route path={"/chat/:chatId"} exact={true} component={Chat} /> */}
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

const LogOutRoutes: React.SFC = () => (
  <Switch>
    {/* <Route path={PAGE_PATHS.LOGIN} exact={true} component={Login} /> */}
    <Route path={PAGE_PATHS.SIGNUP} exact={true} component={Home} />
  </Switch>
);

const AppPresenter: React.FC = () => {
  const { data } = useQuery(QUERY);

  return (
    <BrowserRouter>
      {data && data.isLoggedIn ? <LogOutRoutes /> : <LoggedInRoutes />}
    </BrowserRouter>
  );
};

export default AppPresenter;
