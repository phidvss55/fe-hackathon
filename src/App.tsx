import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/scss/style.scss";
import "./assets/scss/App.css";
import { routePaths } from "./core/navigation/route-paths";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

// Pages
const SignIn = React.lazy(
  () => import("./views/auth/signin/sign-in.container")
);
const SignUp = React.lazy(
  () => import("./views/auth/signup/sign-up.container")
);
const Page404 = React.lazy(() => import("./views/error-pages/page404/page404"));
const Page500 = React.lazy(() => import("./views/error-pages/page500/page500"));
const TheLayout = React.lazy(() => import("./components/layout/the-layout"));

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path={routePaths.auth.SignIn}
            render={(props) => <SignIn {...props} />}
          />
          <Route
            exact
            path={routePaths.auth.SignUp}
            render={(props) => <SignUp {...props} />}
          />
          <Route exact path="/404" render={(props) => <Page404 {...props} />} />
          <Route exact path="/500" render={(props) => <Page500 {...props} />} />
          <Route path="/" render={(props) => <TheLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default App;
