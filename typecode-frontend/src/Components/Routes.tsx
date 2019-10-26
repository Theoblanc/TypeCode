import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Chat from "../Routes/Chat";

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <LoggedInRoutes></LoggedInRoutes>
  </BrowserRouter>
);

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"/chat/:chatId"} exact={true} component={Chat} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

export default AppPresenter;
