import { CurrentQuestionPayload } from "core/types/question.type";
import {
  SET_CLEAR_DATA_COURSE,
  SET_CORRECT_ANSWER,
  SET_COURSES,
  SET_COURSE_DETAIL,
  SET_CURRENT_QUESTION,
  SET_LESSION_DETAILS,
  SET_LESSON_LIST,
  SET_LESSON_PARENT,
  SET_LIST_ANSWER,
  SetClearDataCourse,
  SetCorrectAnswer,
  SetCourseDetail,
  SetCoursesData,
  SetCurrentQuestion,
  SetLessonList,
  SetLessonParent,
  SetLesssonDetails,
  SetListAnswer,
} from "./types";

export const onSetCourseLists = (payload: any[]): SetCoursesData => ({
  type: SET_COURSES,
  payload,
});

export const onSetLessionDetail = (payload: any[]): SetLesssonDetails => ({
  type: SET_LESSION_DETAILS,
  payload,
});

export const onSetCourseDetail = (payload: any): SetCourseDetail => ({
  type: SET_COURSE_DETAIL,
  payload,
});

export const onSetLessonList = (payload: any): SetLessonList => ({
  type: SET_LESSON_LIST,
  payload,
});

export const onSetLessonParent = (payload: any): SetLessonParent => ({
  type: SET_LESSON_PARENT,
  payload,
});

export const onSetCurrentQuestion = (
  payload: CurrentQuestionPayload
): SetCurrentQuestion => ({
  type: SET_CURRENT_QUESTION,
  payload,
});

export const onSetCorrectAnswer = (payload: number): SetCorrectAnswer => ({
  type: SET_CORRECT_ANSWER,
  payload,
});

export const onSetListAnswer = (payload: any): SetListAnswer => ({
  type: SET_LIST_ANSWER,
  payload,
});

export const onClearDataCourses = (payload: any): SetClearDataCourse => ({
  type: SET_CLEAR_DATA_COURSE,
  payload,
});
