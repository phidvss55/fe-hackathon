import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface ComponentProps {
  example?: string;
}

type Props = ComponentProps & RouteComponentProps;

const Page403: React.FunctionComponent<Props> = () => {
  return (
    <div
      className={
        "flex h-[calc(100vh-100px)] flex-col items-center justify-center"
      }
    >
      <ExclamationTriangleIcon width={160} color={"red"} />
      <Typography variant={"h2"} color={"blue-gray"}>
        {"NOT THIS TIME, ACCESS FORBIDDEN!"}
      </Typography>
    </div>
  );
};

export default Page403;
