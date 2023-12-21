import { toast } from "react-toastify";
import { AuthService } from "core/services/auth.service";
import { onSetUserProfileAction } from "core/store/reducer/app/actions";
import { SignInReqVM } from "core/view-models/auth/sign-in-vm";
import { CourseService } from "core/services/course.service";
import {
  onSetCourseDetail,
  onSetCourseLists,
  onSetLessionDetail,
  onSetLessonList,
} from "core/store/reducer/courses/actions";
import { ThunkActionTypes } from "../../../../core/store/thunk/types";
import { catchHandle } from "../../../../core/lib/catch-helper";

export const onThunkGetUserProfile =
  (userId: string): ThunkActionTypes =>
  async (dispatch) => {
    try {
      const userService = new AuthService();
      const res: any = await userService.getUserInfo(userId);

      if (res.data) {
        dispatch(onSetUserProfileAction(res.data));
      } else {
        toast.warning("error");
      }
    } catch (e) {
      catchHandle(e, dispatch);
    }
  };

export const onThunkSignIn =
  (data: SignInReqVM, onSuccess: (data: any) => void): ThunkActionTypes =>
  async (dispatch) => {
    try {
      const userService = new AuthService();
      const res: any = await userService.signIn(data);

      if (res.data) {
        onSuccess(res);
      } else {
        toast.error("Your credentials are invalid");
      }
    } catch (e) {
      catchHandle(e, dispatch);
    }
  };

export const onThunkGetCourses =
  (userId: string): ThunkActionTypes =>
  async (dispatch) => {
    try {
      const couresService = new CourseService();
      const res: any = await couresService.getCouresList(userId);

      if (res.data) {
        dispatch(onSetCourseLists(res.data));
      } else {
        toast.warning("error");
      }
    } catch (e) {
      catchHandle(e, dispatch);
    }
  };

export const onThunkGetDetailLession =
  (lessonId: string): ThunkActionTypes =>
  async (dispatch) => {
    try {
      const couresService = new CourseService();
      const res: any = await couresService.getLessonDetail(lessonId);
      if (res.data) {
        dispatch(onSetLessionDetail(res.data));
      } else {
        toast.warning("error");
      }
    } catch (e) {
      catchHandle(e, dispatch);
    }
  };

export const onThunkUpdateLesson =
  (data: any, onSuccess: () => void): ThunkActionTypes =>
  async (dispatch) => {
    try {
      const couresService = new CourseService();
      const res: any = await couresService.updateLessonDetail(data);
      if (res.SUCCESS) {
        onSuccess();
      } else {
        toast.warning("error");
      }
    } catch (e) {
      catchHandle(e, dispatch);
    }
  };

export const onThunkGetTopicDetail =
  (data: any, onSuccess: () => void): ThunkActionTypes =>
  async (dispatch) => {
    try {
      const couresService = new CourseService();
      const res: any = await couresService.getCourseById(data);
      if (res.data) {
        dispatch(onSetCourseDetail(res.data));
        onSuccess();
      } else {
        toast.warning("error");
      }
    } catch (e) {
      catchHandle(e, dispatch);
    }
  };

export const onThunkGetLessonListByCourseID =
  (data: any): ThunkActionTypes =>
  async (dispatch) => {
    try {
      const couresService = new CourseService();
      const res: any = await couresService.getLessonList(data);

      if (res.data) {
        dispatch(onSetLessonList(res.data));
      } else {
        toast.warning("error");
      }
    } catch (e) {
      catchHandle(e, dispatch);
    }
  };

export const onThunkGetListUsers =
  (onSuccess: (data: any) => void): ThunkActionTypes =>
  async (dispatch) => {
    try {
      const couresService = new CourseService();
      const res: any = await couresService.getListUsers();

      if (res.data) {
        onSuccess(res);
      } else {
        toast.warning("error");
      }
    } catch (e) {
      catchHandle(e, dispatch);
    }
  };
