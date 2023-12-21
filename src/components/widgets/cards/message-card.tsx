/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";
import { RouteComponentProps } from "react-router-dom";

interface ComponentProps {
  img: string;
  name: string;
  message: any;
  action: any;
}

type Props = RouteComponentProps & ComponentProps;

const MessageCard: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Avatar
          src={props.img}
          alt={props.name}
          className="shadow-lg shadow-blue-gray-500/25"
        />
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 font-semibold"
          >
            {props.name}
          </Typography>
          <Typography className="text-xs font-normal text-blue-gray-400">
            {props.message}
          </Typography>
        </div>
      </div>
      {props.action}
    </div>
  );
};

MessageCard.defaultProps = {
  action: "",
};

MessageCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  action: PropTypes.node,
};

MessageCard.displayName = "/src/widgets/cards/message-card.jsx";

export default MessageCard;
