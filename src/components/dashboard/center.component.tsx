import { icons } from "assets/icons";
import { images } from "assets/images";
import React, { useEffect } from "react";
import { randomColors, randomImg, randomStars } from "core/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "core/store";
import { onThunkGetCourses } from "views/example/store/thunk";
import { routePaths } from "core/navigation/route-paths";
import { useHistory } from "react-router-dom";
import StarComponent from "./stars/star.component";

const CenterComponent: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { session_id } = useSelector((state: AppState) => state.app);
  const { courses } = useSelector((state: AppState) => state.course);

  useEffect(() => {
    dispatch(onThunkGetCourses(session_id));
  }, []);

  return (
    <div className="ml-5 flex w-[48%] flex-col items-stretch">
      <div className="flex h-[70vh] flex-col items-stretch overflow-y-scroll px-5">
        <div className="text-zinc-900 max-md:max-w-full text-3xl font-bold">
          Courses
        </div>
        {/* Item */}
        {courses?.map((el: any, index: number) => (
          <div
            key={el.courseId}
            className={`mt-6 rounded-lg ${randomColors(index)} px-10 py-3`}
          >
            <div className="max-md:max-w-full max-md:flex-wrap flex w-full items-stretch justify-between gap-5">
              <div className="flex items-stretch justify-between gap-4">
                <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-white">
                  <div>
                    <img
                      alt=""
                      loading="lazy"
                      src={randomImg(index)}
                      className="aspect-square w-[50px] max-w-full shrink-0 overflow-hidden object-contain object-center"
                    />
                  </div>
                </div>

                <div className="my-auto flex grow basis-[0%] flex-col items-stretch self-center">
                  <div className="text-zinc-900 text-base font-semibold">
                    {`Course ${el.courseSeq ?? index + 1}`}
                  </div>
                  <div
                    role="button"
                    aria-hidden={"true"}
                    onClick={() => {
                      history.push({
                        pathname: routePaths.quizz.basePath,
                        search: `?courseId=${el.courseId}`,
                      });
                    }}
                    className="text-zinc-900 mt-4 cursor-pointer text-3xl font-semibold"
                  >
                    {el.courseTitl}
                  </div>
                </div>
              </div>
              <img
                role="img"
                aria-hidden={"true"}
                onClick={() => {
                  history.push({
                    pathname: routePaths.quizz.basePath,
                    search: `?courseId=${el.courseId}`,
                  });
                }}
                alt=""
                loading="lazy"
                src={icons.arrowRight}
                className="my-auto aspect-square w-16 max-w-full shrink-0 cursor-pointer self-center overflow-hidden rounded-circle bg-secondary-green-600 object-contain object-center p-4"
              />
            </div>

            <div className="mt-5 flex w-full items-stretch justify-between gap-5">
              <div className="flex items-center justify-between gap-0 px-px">
                <div className="text-zinc-900 my-auto text-center text-xl font-light">
                  <span className="font-bold">{el.totalPoint}</span>
                  <span className="font-light"> </span>
                </div>
                <img
                  alt=""
                  loading="lazy"
                  src={images.star}
                  className="aspect-square w-8 max-w-full shrink-0 self-start overflow-hidden object-contain object-center"
                />
              </div>
              <div className="flex gap-5">
                <StarComponent stars={randomStars()} />
                <div className="text-zinc-900 my-auto shrink grow basis-auto self-center text-right text-base font-light">
                  {`${el.completeLesson} / ${el.totalLesson} Lesson`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenterComponent;
