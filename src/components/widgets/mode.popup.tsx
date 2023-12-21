import { images } from "assets/images";
import React from "react";
import { toast } from "react-toastify";

interface Props {
  onClick: () => void;
}

const ModePopup: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <div className="fixed top-0 right-0 z-[1000] flex h-full w-full justify-end bg-gray-900/50 backdrop-blur-sm">
      <div className="mx-auto my-[8vh] flex h-[80%] w-8/12 flex-col rounded-xl bg-white ease-in-out">
        <div className="flex flex-col justify-around overflow-auto bg-white pb-10">
          <img
            alt=""
            loading="lazy"
            src={images.mode}
            className="mt-24 w-[400px] self-center object-contain object-center backdrop-blur-[2px]"
          />
          <div className="text-zinc-900  mt-14 max-w-[325px]  self-center text-center text-3xl font-semibold">
            Select Game Mode
          </div>
          <div className=" mt-16 mb-20 flex w-[761px] max-w-full items-stretch justify-between gap-5 self-center">
            <div
              role="button"
              aria-hidden={"true"}
              onClick={onClick}
              className="text-zinc-900 w-[334px] grow cursor-pointer items-center rounded-lg bg-primary-green px-16 pt-6 pb-3.5 text-center text-2xl font-semibold"
            >
              Single mode
            </div>
            <div
              role="button"
              aria-hidden={"true"}
              onClick={() => {
                toast.warning("We are still implementing this feature");
              }}
              className="text-zinc-900 w-[336px] grow cursor-pointer items-center justify-center rounded-lg bg-primary-green px-16 py-6 text-center text-2xl font-semibold"
            >
              Multi mode
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModePopup;
