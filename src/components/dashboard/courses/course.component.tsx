import { badges } from "assets/badges";
import { icons } from "assets/icons";
import { images } from "assets/images";
import { routePaths } from "core/navigation/route-paths";
import React from "react";
import { useHistory } from "react-router-dom";

type Props = {
  showBadges: boolean;
  title: string;
};

const CourseComponent: React.FC<Props> = ({ showBadges, title }: Props) => {
  const history = useHistory();

  return (
    <div className="mt-6 rounded-lg bg-primary-green px-10 py-3">
      <div className="flex w-full flex-col items-stretch rounded-lg">
        <div className="max-md:max-w-full max-md:flex-wrap flex w-full items-stretch justify-between gap-5">
          <div className="flex items-stretch justify-between gap-4">
            <img
              alt=""
              loading="lazy"
              src={images.ship}
              className="aspect-square w-[76px] max-w-full shrink-0 overflow-hidden object-contain object-center"
            />
            <div className="my-auto flex grow basis-[0%] flex-col items-stretch self-center">
              <div className="text-zinc-900 text-base font-semibold">
                Course 1
              </div>
              <div className="text-zinc-900 mt-4 text-3xl font-semibold">
                {title}
              </div>
            </div>
          </div>
          <img
            onClick={() => {
              history.push(routePaths.quizz.basePath);
            }}
            role={"img"}
            aria-hidden={"true"}
            alt=""
            loading="lazy"
            src={icons.arrowRight}
            className="my-auto aspect-square w-16 max-w-full shrink-0 cursor-pointer self-center overflow-hidden rounded-circle bg-secondary-green-500 object-contain object-center p-3"
          />
        </div>
        <div className="max-md:max-w-full max-md:flex-wrap mt-5 flex w-full items-stretch justify-between gap-5">
          <div className="max-md:justify-center flex items-center justify-between gap-0 px-px">
            <div className="text-zinc-900 my-auto text-center text-xl font-light">
              <span className="font-bold">400</span>
              <span className="font-light"> </span>
            </div>
            <img
              alt=""
              loading="lazy"
              src={images.star}
              className="aspect-square w-8 max-w-full shrink-0 self-start overflow-hidden object-contain object-center"
            />
            {showBadges && <badges.yellow />}
          </div>
          <div className="text-zinc-900 my-auto shrink grow basis-auto self-center text-right text-base font-light">
            Completed questions / Total questions
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
