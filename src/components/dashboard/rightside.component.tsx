import { icons } from "assets/icons";
import { images } from "assets/images";
import React from "react";

const RightsideDashboard: React.FC = () => {
  return (
    <div className=" ml-5 flex w-[26%] flex-col items-stretch">
      <div className="flex flex-col items-center">
        <div className="border-zinc-900  flex flex-col items-stretch self-stretch rounded-lg border-2 border-solid px-10 pb-5">
          <div className="text-zinc-900  z-[1] mt-0 items-stretch self-center bg-white px-10 pt-3 pb-1.5 text-center text-2xl font-semibold">
            Badges
          </div>
          <img
            alt=""
            loading="lazy"
            src={icons.emptyBadges}
            className="mt-2 w-[150px] max-w-full self-center overflow-hidden object-contain object-center"
          />
          <div className="text-zinc-900 mt-6 text-center text-base">
            You are have no badges
          </div>
        </div>

        <div className="text-zinc-900 z-[1] mt-2 items-stretch justify-center bg-white px-9 py-2 text-center text-2xl font-semibold">
          Leaderboard
        </div>

        <div className="border-zinc-900 flex w-full flex-col items-stretch self-stretch rounded-lg border-2 border-solid px-4 pt-7 pb-4">
          <div className="border-emerald-500 max-md:justify-center mt-2 flex items-start gap-2 rounded-lg border-2 border-solid px-5 py-4">
            <div className="text-zinc-900 my-auto justify-center self-center whitespace-nowrap text-center text-xs font-semibold">
              #1
            </div>
            <img
              alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3801f2146a3ddfbf18d1c6e84b2e0960f415f250c1a52df999570dd332b5f424?"
              className="aspect-square w-6 max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
            />
            <div className="text-zinc-900 my-auto justify-center self-center text-xs font-semibold">
              Eduardo Cambi
            </div>
            <div className="text-zinc-900 my-auto grow justify-center self-center whitespace-nowrap text-center text-xs">
              4/4 course
            </div>
          </div>
          <div className="border-emerald-500 max-md:justify-center mt-2 flex items-start gap-2 rounded-lg border-2 border-solid px-5 py-4">
            <div className="text-zinc-900 my-auto justify-center self-center whitespace-nowrap text-center text-xs font-semibold">
              #2
            </div>
            <img
              alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3801f2146a3ddfbf18d1c6e84b2e0960f415f250c1a52df999570dd332b5f424?"
              className="aspect-square w-6 max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
            />
            <div className="text-zinc-900 my-auto justify-center self-center text-xs font-semibold">
              Eduardo Cambi
            </div>
            <div className="text-zinc-900 my-auto grow justify-center self-center whitespace-nowrap text-center text-xs">
              3/4 course
            </div>
          </div>

          <div className="border-emerald-500 max-md:justify-center mt-2 flex items-start gap-2 rounded-lg border-2 border-solid px-5 py-4">
            <div className="text-zinc-900 my-auto justify-center self-center whitespace-nowrap text-center text-xs font-semibold">
              #3
            </div>
            <img
              alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c26d40c60d5dd3da35e8658caab8d17146b5e8824be98e140fc41d32d7401dc?"
              className="aspect-square w-6 max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
            />
            <div className="text-zinc-900 my-auto justify-center self-center text-xs font-semibold">
              Hugo Penteado
            </div>
            <div className="text-zinc-900 my-auto grow justify-center self-center whitespace-nowrap text-center text-xs">
              3/4 course
            </div>
          </div>

          <div className="border-emerald-500 max-md:justify-center mt-2 flex items-start gap-2 rounded-lg border-2 border-solid px-5 py-4">
            <div className="text-zinc-900 my-auto justify-center self-center whitespace-nowrap text-center text-xs font-semibold">
              #8
            </div>
            <img
              alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c26d40c60d5dd3da35e8658caab8d17146b5e8824be98e140fc41d32d7401dc?"
              className="aspect-square w-6 max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
            />
            <div className="text-zinc-900 my-auto justify-center self-center text-xs font-semibold">
              José Almeida
            </div>
            <div className="text-zinc-900 my-auto grow justify-center self-center whitespace-nowrap text-center text-xs">
              1/4 course
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightsideDashboard;
