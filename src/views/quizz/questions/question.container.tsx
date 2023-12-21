import BackButton from "components/buttons/back.button";
import { MessagePopup } from "components/widgets/message.popup";
import { routePaths } from "core/navigation/route-paths";
import { AppState } from "core/store";
import {
  onSetCurrentQuestion,
  onSetLessonParent,
} from "core/store/reducer/courses/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, useHistory, useLocation } from "react-router-dom";
import { onThunkGetDetailLession } from "views/example/store/thunk";
import QuestionComponent from "./question.component";

type Props = RouteComponentProps;

const QuestionContainer: React.FC<Props> = (props: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const lessonId = new URLSearchParams(useLocation().search).get("lessonId");
  const courseId = new URLSearchParams(useLocation().search).get("courseId");
  const { lessonDetails, lessonList, lessonParent } = useSelector(
    (state: AppState) => state.course
  );

  const [reviewing, setReviewing] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [isPass, setIsPass] = useState<any>(null);

  useEffect(() => {
    lessonList.forEach((item: any) => {
      if (item.lessonId === lessonId) {
        dispatch(onSetLessonParent(item));

        if (item.completeYn === "Y") {
          setReviewing(true);
          setCompleted(true);
        }
      }
    });

    dispatch(
      onSetCurrentQuestion({
        index: 0,
        question: lessonDetails[0],
      })
    );
  }, [lessonDetails]);

  useEffect(() => {
    if (!lessonId) {
      history.push(routePaths.dashboard);
      return;
    }
    dispatch(onThunkGetDetailLession(lessonId));
  }, []);

  return (
    <div className="mt-5 flex w-full flex-col px-12">
      <div className="flex gap-4">
        {/* Button */}
        <BackButton courseId={courseId ?? ""} />

        {/* Right side */}
        <div className="flex w-[85%] flex-initial flex-col">
          <div className="mt-1.5 flex grow basis-[0%] flex-col items-stretch">
            <div className="text-zinc-900 text-base font-semibold">
              {`Lesson ${lessonParent?.lessonSeq}`}
            </div>
            <div className="text-zinc-900 mt-3 text-3xl font-semibold">
              {lessonParent?.lessonDesc}
            </div>
          </div>

          {lessonDetails.length < 1 ? (
            // incase there are no question was added
            <div className="mt-10">
              <div className="text-2xl font-semibold">
                Your list of questions currently are null
              </div>
              <div className="mt-5 text-xl">Please upload the questions</div>
            </div>
          ) : (
            <QuestionComponent
              completed={completed}
              reviewing={reviewing}
              lessonId={lessonId ?? ""}
              onSubmit={(data: any) => {
                setIsPass({
                  result: data.result,
                  pass: data.pass,
                });
                setShowPopup(true);
              }}
            />
          )}
        </div>
      </div>

      {showPopup && (
        <MessagePopup
          data={isPass}
          onReview={() => {
            setReviewing(true);
            setShowPopup(false);
          }}
          onClose={() => {
            history.push({
              pathname: routePaths.quizz.basePath,
              search: `?courseId=${courseId}`,
            });
            setShowPopup(false);
          }}
        />
      )}
    </div>
  );
};

export default QuestionContainer;
