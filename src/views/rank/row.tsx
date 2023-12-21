import React from "react";
import { icons } from "assets/icons";

type Props = {
  name: any;
  point: any;
  rank: any;
};

const Row: React.FC<Props> = (props: Props) => {
  const getPoints = (points: string | number) => {
    return `${points} Points`;
  };

  return (
    <div className="border-zinc-900 mt-5 ml-5 flex items-center justify-between rounded-lg border-2 border-solid">
      <div className="flex items-center">
        <div className="mx-5">{`# ${props.rank}`}</div>
        <div>
          <div className="my-2 flex items-center gap-6">
            <img
              alt=""
              loading="lazy"
              src={icons.personAvatar}
              className="aspect-square w-[54px] max-w-full shrink-0 overflow-hidden object-contain object-center"
            />
            {props.name}
          </div>
        </div>
      </div>
      <div>
        <div className="mr-5">{getPoints(props.point)}</div>
      </div>
    </div>
  );
};

export default Row;
