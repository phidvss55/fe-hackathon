import React from "react";
import { icons } from "assets/icons";

interface Props {
  data: any;
  onClose: () => void;
  onReview: () => void;
}

export const MessagePopup: React.FC<Props> = ({
  data,
  onClose,
  onReview,
}: Props) => {
  return (
    <div className="fixed top-0 right-0 z-[1000] flex h-full w-full justify-end bg-gray-900/50 backdrop-blur-sm">
      <div className="mx-auto my-[8vh] flex w-6/12 flex-col rounded-xl bg-gray-100 ease-in-out">
        <div className="flex flex-1 flex-col overflow-auto p-2">
          <div className="flex flex-col bg-white pb-10">
            <img
              alt=""
              loading="lazy"
              src={icons.win}
              className="mt-6 w-7/12 max-w-6xl self-center overflow-hidden object-contain object-center"
            />
            {/* <icons.Loose className="mt-6 w-7/12 max-w-6xl self-center overflow-hidden object-contain object-center" /> */}
            <div className="text-zinc-900 max-md:max-w-full max-md:mt-10 mt-14 max-w-[590px] self-center text-center text-3xl font-semibold">
              {`Your answered correctly ${data.result} quizzes`}
            </div>
            <div className="text-zinc-900 max-md:max-w-full mt-5 max-w-[1077px] self-center text-center text-2xl">
              Try again or play more lessons to get more points and unlock more
              reward !!!
            </div>
            {/* {data.pass ? (
              
            ) : (
              <div className="text-zinc-900 max-md:max-w-full mt-5 max-w-[1077px] self-center text-center text-2xl">
                You could try again to get the highest score and unlock more
                reward !!!
              </div>
            )} */}
            <button
              type="button"
              onClick={() => onClose()}
              className="text-zinc-900 mt-8 w-[533px] max-w-full cursor-pointer items-center justify-center self-center rounded-lg bg-primary-green px-16 py-6 text-center text-2xl font-semibold hover:bg-secondary-green-400"
            >
              Return to Lesson
            </button>
            <button
              type="button"
              onClick={() => onReview()}
              className="text-zinc-900 mt-4 w-[533px] max-w-full cursor-pointer items-center justify-center self-center rounded-lg border border-primary-green bg-white px-16 py-6 text-center text-2xl font-semibold hover:bg-primary-green"
            >
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
