import { CurrentQuestionPayload } from "core/types/question.type";
import { CourseVM } from "core/view-models/course-vm";
import { Question } from "core/view-models/courses/question-vm";

export interface CoursesState {
  courses: any[];
  lessonDetails: any[];
  courseDetail: CourseVM | null;
  lessonList: any[];
  lessonParent: any;
  currentQuestion: Question | null;
  totalCorrectAnswer: number;
  currentQuestionIndex: any;
  listAnswer: any[];
}

export const SET_COURSES = "SET_COURSES";
export const SET_LESSION_DETAILS = "SET_LESSION_DETAILS";
export const SET_COURSE_DETAIL = "SET_COURSE_DETAIL";
export const SET_LESSON_LIST = "SET_LESSON_LIST";
export const SET_LESSON_PARENT = "SET_LESSON_PARENT";
export const SET_CURRENT_QUESTION = "SET_CURRENT_QUESTION";
export const SET_CORRECT_ANSWER = "SET_CORRECT_ANSWER";
export const SET_LIST_ANSWER = "SET_LIST_ANSWER";
export const SET_CLEAR_DATA_COURSE = "SET_CLEAR_DATA_COURSE";

export interface SetCoursesData {
  type: typeof SET_COURSES;
  payload: any;
}

export interface SetClearDataCourse {
  type: typeof SET_CLEAR_DATA_COURSE;
  payload: any;
}

export interface SetCorrectAnswer {
  type: typeof SET_CORRECT_ANSWER;
  payload: number;
}

export interface SetListAnswer {
  type: typeof SET_LIST_ANSWER;
  payload: any;
}

export interface SetLessonParent {
  type: typeof SET_LESSON_PARENT;
  payload: any;
}

export interface SetCurrentQuestion {
  type: typeof SET_CURRENT_QUESTION;
  payload: CurrentQuestionPayload;
}

export interface SetLessonList {
  type: typeof SET_LESSON_LIST;
  payload: any;
}

export interface SetLesssonDetails {
  type: typeof SET_LESSION_DETAILS;
  payload: any;
}

export interface SetCourseDetail {
  type: typeof SET_COURSE_DETAIL;
  payload: any;
}

export type CoursesActionTypes =
  | SetCoursesData
  | SetLesssonDetails
  | SetListAnswer
  | SetLessonParent
  | SetClearDataCourse
  | SetCurrentQuestion
  | SetCorrectAnswer
  | SetLessonList
  | SetCourseDetail;
