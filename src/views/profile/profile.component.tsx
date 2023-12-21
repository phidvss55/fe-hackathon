import { badges } from "assets/badges";
import React from "react";

type Props = {
  //
};

const ProfileComponent: React.FC = (props: Props) => {
  return (
    <>
      <p className="mb-5 mt-10 text-3xl font-bold">Badges</p>
      <div className="flex justify-start gap-5">
        <div className="text-center">
          <div className="h-[173px]">
            <img alt="" src={badges.orangeCompo} className="h-[173px]" />
          </div>
          <p className="mt-4 text-lg font-bold">Terminal Business</p>
          <p className="text-md mt-2 italic">(4/4 completed lesson)</p>
        </div>
        <div className="text-center">
          <div className="h-[173px]">
            <img alt="" src={badges.greenCom} className="h-[173px]" />
          </div>
          <p className="mt-4 text-lg font-bold">Terminal Business</p>
          <p className="text-md mt-2 italic">(4/4 completed lesson)</p>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
