import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface ComponentProps {
  example?: string;
}

type Props = ComponentProps & RouteComponentProps;

const Page404: React.FunctionComponent<Props> = () => {
  return (
    <div className={"flex min-h-screen flex-col items-center justify-center"}>
      <ExclamationTriangleIcon width={160} color={"red"} />
      <Typography variant={"h2"} color={"blue-gray"}>
        {"PAGE NOT FOUND!"}
      </Typography>
    </div>
  );
};

export default Page404;
