import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";

interface ComponentProps {
  color: any;
  icon: any;
  title: any;
  value: any;
  footer: any;
}

type Props = ComponentProps;

const StatisticsCard: React.FunctionComponent<Props> = (props) => {
  return (
    <Card>
      <CardHeader
        variant="gradient"
        color={props.color}
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {props.icon}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {props.title}
        </Typography>
        <Typography variant="h4" color="blue-gray">
          {props.value}
        </Typography>
      </CardBody>
      {props.footer && (
        <CardFooter className="border-t border-blue-gray-50 p-4">
          {props.footer}
        </CardFooter>
      )}
    </Card>
  );
};

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
