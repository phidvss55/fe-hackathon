import * as React from "react";
import CenterComponent from "components/dashboard/center.component";
import LeftsideDashboard from "components/dashboard/leftside.component";
import RightsideDashboard from "components/dashboard/rightside.component";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onClearDataCourses } from "core/store/reducer/courses/actions";

type Props = RouteComponentProps;

const DashboardContainer: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(onClearDataCourses(null));
  }, []);

  return (
    <div className="mt-5 flex w-full self-center">
      <LeftsideDashboard />
      <CenterComponent />
      <RightsideDashboard />
    </div>
  );
};

export default DashboardContainer;
