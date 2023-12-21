import { GetExampleApiResult } from "../data-transfer/example/get-example.api-result";
import ApiService from "./api.service";

export class CourseService extends ApiService {
  public getCouresList(userId: string) {
    return this.apiGet<GetExampleApiResult>(
      `/getListCourseByUsrId/${userId}`,
      null,
      false
    );
  }

  public getLessonDetail(lessonId: string) {
    return this.apiGet<GetExampleApiResult>(
      `/getListQuizAndAnswerByLessonId/${lessonId}`,
      null,
      false
    );
  }

  public updateLessonDetail(data: any) {
    return this.apiGet<GetExampleApiResult>(
      `/updateUserLesson?usrId=${data.usrId}&lessonId=${data.lessonId}`,
      null,
      false
    );
  }

  public getCourseById(data: { usrId: string; courseId: string }) {
    return this.apiGet<GetExampleApiResult>(`/getCourseById`, data, false);
  }

  public getLessonList(data: { usrId: string; courseId: string }) {
    return this.apiGet<GetExampleApiResult>(
      `/getListLessonByCourseID`,
      data,
      false
    );
  }

  public getListUsers() {
    return this.apiGet<GetExampleApiResult>(`/getListUsrRanking`, null, false);
  }
}
