import React from "react";
import { Redirect, Route } from "react-router-dom";

// interface PrivateRouterProps {
//   authStore?: AuthStore;
//   component: React.ComponentType<any>;
//   redirectTo: string;
//   path: string;
//   exact?: boolean;
// }

const PrivateRouter = ({
  component: Component,
  redirectTo,
  authStore,
  path,
  exact
}) => (
  <Route
    path={path}
    exact={exact}
    render={(props: any) =>
      authStore!.isLoggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirectTo} />
      )
    }
  />
);

export default PrivateRouter;
