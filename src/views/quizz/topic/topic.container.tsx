import { icons } from "assets/icons";
import { images } from "assets/images";
import DocumentPopup from "components/widgets/documents.popup";
import { routePaths } from "core/navigation/route-paths";
import { AppState } from "core/store";
import {
  onSetCorrectAnswer,
  onSetListAnswer,
} from "core/store/reducer/courses/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, useHistory, useLocation } from "react-router-dom";
import {
  onThunkGetLessonListByCourseID,
  onThunkGetTopicDetail,
} from "views/example/store/thunk";

type Props = RouteComponentProps;

const TopicContainer: React.FC<Props> = (props: Props) => {
  const history = useHistory();
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { courseDetail, lessonList } = useSelector(
    (state: AppState) => state.course
  );

  const courseId = new URLSearchParams(useLocation().search).get("courseId");
  const { session_id } = useSelector((state: AppState) => state.app);
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    const param = { usrId: session_id, courseId };
    dispatch(onSetCorrectAnswer(0));
    dispatch(onSetListAnswer([]));
    dispatch(
      onThunkGetTopicDetail(param, () => {
        dispatch(onThunkGetLessonListByCourseID(param));
      })
    );
  }, []);

  useEffect(() => {
    const comp = courseDetail?.completeLesson ?? 0;
    const total = courseDetail?.totalLesson ?? 10;
    const percentage = (+comp / +total) * 100;
    setPercent(+percentage.toFixed());
  }, [courseDetail]);

  return (
    <div className="mt-5 flex w-full flex-col px-12">
      <div className="flex gap-4">
        {/* left side */}
        <div className="w-[15%] flex-none text-white">
          <div
            role={"button"}
            aria-hidden={"true"}
            onClick={() => {
              history.push(routePaths.dashboard);
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

          <div className="fixed">
            <div className="mt-[65vh] flex w-56 cursor-pointer justify-around gap-2 rounded-3xl border border-solid bg-primary-green py-2.5 pl-4 pr-8 hover:bg-secondary-green-400">
              <img alt="" src={images.chat} className="w-10" />
              <button
                type="button"
                className="text-zinc-900 whitespace-nowrap text-2xl font-semibold"
              >
                Feedback
              </button>
            </div>
          </div>
        </div>

        {/* main content */}
        <div className="flex w-[85%] flex-initial flex-col">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold">Course Summary</p>
            <p className="text-3xl font-bold">{courseDetail?.courseTitl}</p>
            <p className="text-xl font-medium">{courseDetail?.courseDesc}</p>
            <button
              type="button"
              onClick={() => setShow(true)}
              className="my-5 w-72 rounded-lg bg-primary-green px-8 py-4 text-lg font-semibold hover:bg-secondary-green-400"
            >
              Reference Document
            </button>
            {/* Progress  */}
            <div className="mb-4 flex items-center justify-between rounded-xl bg-[#C7CBD1] px-5 py-3">
              <div>
                <p className="mb-3 text-2xl font-bold">Progress</p>
                <p className="text-sm font-semibold">
                  {
                    "Finish all quizzes in the course to unlock the next course!"
                  }
                </p>
              </div>
              <div className="w-[50%]">
                <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
                    style={{ width: `${percent}%` }}
                  >
                    {" "}
                    {`${percent}%`}
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="w-full">
              <p className="mb-1 text-2xl font-bold">Lesson</p>
              <p className="text-sm font-semibold">
                {`${courseDetail?.completeLesson} / ${courseDetail?.totalLesson} Completed lesson`}
              </p>
              <div className="mt-4 flex flex-col gap-5">
                {lessonList?.map((el: any, index: number) => (
                  <div
                    key={index}
                    className="flex w-full items-center justify-between rounded-lg bg-[#00E272] p-5"
                  >
                    <div className="mr-5 flex h-7 w-7 items-center justify-center rounded-full bg-white p-5">
                      <span className="text-[#00E272]">
                        {el.completeYn === "Y" && <icons.CheckIcon />}
                      </span>
                    </div>
                    <div className="mr-auto">
                      <p className="text-sm font-semibold">
                        Lesson&nbsp;
                        {el.lessonSeq}
                      </p>
                      <p className="mb-1 text-2xl font-bold">{el.lessonDesc}</p>
                    </div>
                    <button
                      onClick={() => {
                        history.push({
                          pathname: routePaths.quizz.quizzPlay,
                          search: `?lessonId=${el.lessonId}&courseId=${courseId}`,
                        });
                      }}
                      type="button"
                      className="min-w-[100px] rounded-3xl bg-white p-4 text-lg font-semibold"
                    >
                      {el.completeYn === "Y" ? "Review" : "Take Quiz"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {show && (
        <DocumentPopup
          referenceLink={courseDetail?.docUrl}
          onClose={() => {
            setShow(false);
          }}
        />
      )}
    </div>
  );
};

export default TopicContainer;
