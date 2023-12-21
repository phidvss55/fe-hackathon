import { icons } from "assets/icons";
import { routePaths } from "core/navigation/route-paths";
import { AppState } from "core/store";
import { onSetActiveNavItem } from "core/store/reducer/app/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const LeftsideDashboard: React.FC = () => {
  const history = useHistory();
  const { activeItem, user } = useSelector((state: AppState) => state.app);
  const dispatch = useDispatch();

  return (
    <div className="flex w-[26%] grow flex-col items-start">
      <div className="flex items-center gap-4">
        <img
          alt=""
          loading="lazy"
          src={icons.personAvatar}
          className="aspect-square w-[54px] max-w-full shrink-0 cursor-pointer overflow-hidden object-contain object-center"
        />
        <div className="text-zinc-900 mt-2 cursor-pointer text-2xl font-semibold">
          {user?.usrNm}
        </div>
      </div>

      <div
        role={"button"}
        aria-hidden={"true"}
        onClick={() => {
          dispatch(onSetActiveNavItem(1));
          history.push(routePaths.dashboard);
        }}
        className={`border-emerald-500 max-md:pr-5 mt-8 flex cursor-pointer items-stretch justify-between gap-4 self-stretch rounded-lg border border-solid bg-opacity-30 py-5 pl-4 pr-16 ${
          activeItem === 1 ? "bg-primary-green" : ""
        }`}
      >
        <icons.Courses />
        <div
          className={`my-auto grow self-center whitespace-nowrap text-3xl font-semibold  ${
            activeItem === 1 ? "text-green-600" : ""
          }`}
        >
          Courses
        </div>
      </div>

      <div
        role={"button"}
        aria-hidden={"true"}
        className={`mt-4 flex cursor-pointer justify-between gap-4 self-stretch rounded-lg border border-solid bg-opacity-30 py-5 pl-4 pr-16 ${
          activeItem === 2 ? "bg-primary-green" : ""
        }`}
        onClick={() => {
          dispatch(onSetActiveNavItem(2));
          history.push(routePaths.ranking);
        }}
      >
        <img
          alt=""
          loading="lazy"
          src={icons.ranking}
          className="aspect-square w-[35px] max-w-full shrink-0 overflow-hidden object-contain object-center"
        />
        <div className="text-neutral-600 mt-2 grow self-start whitespace-nowrap text-3xl font-semibold">
          Leaderboard
        </div>
      </div>

      <div
        role={"button"}
        aria-hidden={"true"}
        onClick={() => {
          dispatch(onSetActiveNavItem(3));
          history.push(routePaths.profile);
        }}
        className={`mt-4 flex cursor-pointer justify-between gap-4 self-stretch rounded-lg border border-solid bg-opacity-30 py-5 pl-4 pr-16 ${
          activeItem === 3 ? "bg-primary-green" : ""
        }`}
      >
        <img
          alt=""
          loading="lazy"
          src={icons.personal}
          className="aspect-square w-[35px] max-w-full shrink-0 overflow-hidden object-contain object-center"
        />
        <div className="text-neutral-600 mt-2 grow self-start whitespace-nowrap text-3xl font-semibold">
          Profile
        </div>
      </div>
    </div>
  );
};

export default LeftsideDashboard;
