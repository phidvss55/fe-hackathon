export class Answer {
  answerId: string;
  answerDesc: string;

  constructor() {
    this.answerId = "";
    this.answerDesc = "";
  }
}

export class Question {
  quizId: string;
  quizDesc: string;
  lessonId: string;
  answerId: string;
  quizType: string;
  listAnswer: Answer[];

  constructor() {
    this.quizId = "";
    this.quizDesc = "";
    this.lessonId = "";
    this.answerId = "";
    this.quizType = "";
    this.listAnswer = [new Answer()];
  }
}
