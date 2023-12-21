import { AppState } from "core/store";
import {
  onSetCorrectAnswer,
  onSetCurrentQuestion,
  onSetListAnswer,
} from "core/store/reducer/courses/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { onThunkUpdateLesson } from "views/example/store/thunk";

type Props = {
  lessonId: string;
  reviewing: boolean;
  onSubmit: (pass: any) => void;
  completed: boolean;
};

const QuestionComponent: React.FC<Props> = ({
  lessonId,
  completed,
  reviewing,
  onSubmit,
}: Props) => {
  const dispatch = useDispatch();
  const [answerSelected, setAnswerSelected] = useState<string | null>(null);
  const {
    totalCorrectAnswer,
    lessonDetails,
    currentQuestionIndex,
    currentQuestion,
    listAnswer,
  } = useSelector((state: AppState) => state.course);
  const { session_id } = useSelector((state: AppState) => state.app);
  const [error, setError] = useState<any[]>([]);

  useEffect(() => {
    if (reviewing) {
      if (currentQuestion?.answerId !== listAnswer[currentQuestionIndex]) {
        setError(listAnswer[currentQuestionIndex]);
      }
    }
  }, [currentQuestionIndex, reviewing]);

  const onClickNextQuestion = async () => {
    if (!answerSelected && !reviewing) {
      toast.error("Please select an answer");
      return;
    }

    const answer = currentQuestion?.answerId ?? "";
    let total = totalCorrectAnswer;
    if (answerSelected === answer) {
      total += 1;
      dispatch(onSetCorrectAnswer(total));
    }

    const tempoList = listAnswer;
    tempoList[currentQuestionIndex] = answerSelected;
    dispatch(onSetListAnswer(tempoList));

    const indexNext = currentQuestionIndex + 1;
    if (indexNext === lessonDetails.length) {
      // Check submit
      if (total === lessonDetails.length) {
        const payload = {
          usrId: session_id,
          lessonId,
        };
        dispatch(
          onThunkUpdateLesson(payload, () => {
            onSubmit({
              result: `${lessonDetails.length}/${lessonDetails.length}`,
              pass: true,
            });
          })
        );
      } else {
        onSubmit({
          result: `${total}/${lessonDetails.length}`,
          pass: false,
        });
      }
    } else {
      // Go to next question
      dispatch(
        onSetCurrentQuestion({
          index: indexNext,
          question: lessonDetails[indexNext],
        })
      );

      const answer = listAnswer[indexNext];
      setAnswerSelected(answer);
    }
  };

  const onClickPreviousQuestion = () => {
    const indexNext = currentQuestionIndex - 1;
    if (indexNext < 0) {
      return;
    }

    dispatch(
      onSetCurrentQuestion({
        index: indexNext,
        question: lessonDetails[indexNext],
      })
    );

    const answer = listAnswer[indexNext];
    setAnswerSelected(answer);
  };

  return (
    <>
      <div className="text-zinc-900 mt-8 flex w-fit max-w-full flex-col items-stretch text-2xl font-bold">
        {`Question ${currentQuestionIndex + 1}:`}
      </div>

      <div className="text-zinc-900 mt-8 w-full text-2xl">
        {currentQuestion?.quizDesc ?? ""}
      </div>

      {currentQuestion?.listAnswer?.map((item: any, index: number) => {
        return (
          <div
            key={index}
            role={"button"}
            aria-hidden={"true"}
            onClick={() => {
              if (!reviewing) {
                setAnswerSelected(item.answerId);
              }
            }}
            className={`mt-8 w-full cursor-pointer rounded-lg border-4 border-solid border-primary-green py-5 px-6  ${
              answerSelected === item.answerId ? "bg-primary-green" : ""
            } ${reviewing ? "" : "hover:bg-secondary-green-400"}
            ${
              completed && currentQuestion.answerId === item.answerId
                ? "border-primary-green bg-primary-green"
                : ""
            }
            ${
              error === item.answerId
                ? "!border-red-600"
                : "border-primary-green"
            }`}
          >
            <div className="flex gap-5">
              <div className="flex h-10 flex-col items-center justify-center rounded-lg border-4 border-solid border-primary-green bg-white px-4 text-2xl font-semibold text-green-500 hover:border-white">
                {index + 1}
              </div>
              <div className="text-zinc-900 my-auto ml-5 flex w-[82%] flex-col text-2xl">
                {item.answerDesc}
              </div>
            </div>
          </div>
        );
      })}

      <div className="mt-8 mb-5 flex w-full items-stretch justify-between gap-5 self-center">
        <div className="flex items-start justify-between gap-5">
          <button
            onClick={onClickPreviousQuestion}
            type="button"
            className={`text-zinc-900 justify-center rounded-lg  py-5 px-12 text-center text-2xl font-semibold 
              ${
                currentQuestionIndex > 0
                  ? "bg-primary-green hover:bg-secondary-green-400"
                  : "bg-neutral-gray-300 hover:bg-neutral-gray-200"
              }
            `}
          >
            Previous
          </button>
          <button
            disabled={
              reviewing && currentQuestionIndex + 1 === lessonDetails.length
            }
            type="button"
            onClick={onClickNextQuestion}
            className={`text-zinc-900 justify-center rounded-lg  px-12 py-5 text-center text-2xl font-semibold  
                ${
                  answerSelected || reviewing
                    ? "bg-primary-green hover:bg-secondary-green-400"
                    : "bg-neutral-gray-300 hover:bg-neutral-gray-200"
                }`}
          >
            {`${
              currentQuestionIndex + 1 === lessonDetails.length
                ? "Submit"
                : "Next"
            }`}
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionComponent;
