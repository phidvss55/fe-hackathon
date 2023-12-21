/* eslint-disable import/no-named-as-default */
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardContainer from "views/dashboard/dashboard.container";
import QuestionContainer from "views/quizz/questions/question.container";
import RankContainer from "views/rank/rank.container";
import ProfileContainer from "views/profile/profile.container";
import TopicContainer from "views/quizz/topic/topic.container";
import SignoutButton from "components/buttons/signout.button";
import { onThunkGetUserProfile } from "views/example/store/thunk";
import Spinner from "../spinner/spinner";
import { routePaths } from "../../core/navigation/route-paths";
import { AppState } from "../../core/store";
import SideBar from "./sidenav";

type Props = RouteComponentProps;

const TheLayout: React.FunctionComponent<Props> = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoggedIn, session_id } = useSelector(
    (state: AppState) => state.app
  );
  const [loading, setLoading] = useState<boolean>(true);

  const [showSignout, setShowSignout] = useState<boolean>(true);
  useEffect(() => {
    if (location.pathname.startsWith(routePaths.quizz.basePath)) {
      setShowSignout(false);
    } else {
      setShowSignout(true);
    }
  }, [location]);

  useEffect(() => {
    if (!isLoggedIn) {
      history.push(routePaths.auth.SignIn);
    } else {
      dispatch(onThunkGetUserProfile(session_id));
      setLoading(false);
    }
  }, [isLoggedIn]);

  return (
    <div className="flex min-h-[102px] flex-col bg-white shadow-sm">
      <SideBar />
      <section className="px-8 pt-4 pb-0">
        <Suspense fallback={<Spinner show />}>
          <Switch>
            {loading ? (
              <Spinner show />
            ) : (
              <>
                <Switch>
                  <Redirect exact from="/" to={routePaths.dashboard} />
                  <Route
                    exact
                    path={routePaths.dashboard}
                    render={(props) => <DashboardContainer {...props} />}
                  />
                </Switch>
                <Route
                  exact
                  path={routePaths.quizz.basePath}
                  render={(props) => <TopicContainer {...props} />}
                />
                <Route
                  exact
                  path={routePaths.quizz.quizzPlay}
                  render={(props) => <QuestionContainer {...props} />}
                />
                <Route
                  exact
                  path={routePaths.ranking}
                  render={(props) => <RankContainer {...props} />}
                />
                <Route
                  exact
                  path={routePaths.profile}
                  render={(props) => <ProfileContainer {...props} />}
                />
              </>
            )}
          </Switch>
        </Suspense>
      </section>

      {showSignout && <SignoutButton />}
    </div>
  );
};

export default TheLayout;
