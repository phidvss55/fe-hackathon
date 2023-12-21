import { Question } from "core/view-models/courses/question-vm";

export interface CurrentQuestionPayload {
  question: Question;
  index: number;
}
