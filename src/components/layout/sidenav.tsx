import React from "react";
import { useHistory } from "react-router-dom";
import { routePaths } from "core/navigation/route-paths";
import { images } from "../../assets/images";

const SideBar: React.FC = () => {
  const history = useHistory();

  return (
    <div className="max-md:max-w-full max-md:px-5 flex w-full flex-col items-start justify-center bg-white py-2 px-12 shadow-md">
      <img
        onClick={() => {
          history.push(routePaths.dashboard);
        }}
        role="img"
        aria-hidden={"true"}
        alt=""
        loading="lazy"
        src={images.logo}
        style={{ zoom: 1.5 }}
        className="aspect-[2.21] w-[124px] max-w-full cursor-pointer items-center justify-center overflow-hidden object-contain object-center"
      />
    </div>
  );
};

export default SideBar;
