import {
  CoursesActionTypes,
  CoursesState,
  SET_CLEAR_DATA_COURSE,
  SET_CORRECT_ANSWER,
  SET_COURSES,
  SET_COURSE_DETAIL,
  SET_CURRENT_QUESTION,
  SET_LESSION_DETAILS,
  SET_LESSON_LIST,
  SET_LESSON_PARENT,
  SET_LIST_ANSWER,
} from "./types";

const initialState: CoursesState = {
  courses: [],
  lessonDetails: [],
  courseDetail: null,
  lessonList: [],
  lessonParent: null,
  currentQuestion: null,
  currentQuestionIndex: null,
  totalCorrectAnswer: 0,
  listAnswer: [],
};

export const courseReducer = (
  state = initialState,
  action: CoursesActionTypes
): CoursesState => {
  switch (action.type) {
    case SET_COURSES: {
      return {
        ...state,
        courses: action.payload,
      };
    }
    case SET_CLEAR_DATA_COURSE: {
      return {
        ...state,
        listAnswer: [],
        totalCorrectAnswer: 0,
        currentQuestionIndex: null,
        currentQuestion: null,
        lessonParent: null,
        lessonList: [],
      };
    }
    case SET_LESSON_LIST: {
      return {
        ...state,
        lessonList: action.payload,
      };
    }
    case SET_LIST_ANSWER: {
      return {
        ...state,
        listAnswer: action.payload,
      };
    }
    case SET_CORRECT_ANSWER: {
      return {
        ...state,
        totalCorrectAnswer: action.payload,
      };
    }
    case SET_CURRENT_QUESTION: {
      return {
        ...state,
        currentQuestion: action.payload.question,
        currentQuestionIndex: action.payload.index,
      };
    }
    case SET_LESSION_DETAILS: {
      return {
        ...state,
        lessonDetails: action.payload,
      };
    }
    case SET_COURSE_DETAIL: {
      return {
        ...state,
        courseDetail: action.payload,
      };
    }
    case SET_LESSON_PARENT: {
      return {
        ...state,
        lessonParent: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
