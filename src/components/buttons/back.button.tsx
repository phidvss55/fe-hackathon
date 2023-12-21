import React from "react";
import { icons } from "assets/icons";
import { useHistory } from "react-router-dom";
import { routePaths } from "core/navigation/route-paths";

interface AddButtonProps {
  courseId: string;
}

const BackButton: React.FunctionComponent<AddButtonProps> = ({ courseId }) => {
  const history = useHistory();

  return (
    <div className="w-[15%] flex-none text-white">
      <div
        role={"button"}
        aria-hidden={"true"}
        onClick={() => {
          history.push({
            pathname: routePaths.quizz.basePath,
            search: `?courseId=${courseId}`,
          });
        }}
        className="border-emerald-500 flex w-40 cursor-pointer justify-around gap-2 rounded-3xl border border-solid bg-primary-green py-2.5 pl-4 pr-8 hover:bg-secondary-green-400"
      >
        <icons.LeftArrowIcon className="aspect-[0.97] w-[29px] max-w-full shrink-0 overflow-hidden object-contain object-center font-bold text-white" />
        <button
          type="button"
          className="text-zinc-900 whitespace-nowrap text-2xl font-semibold"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default BackButton;
