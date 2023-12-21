export class SignInVM {
  username: string;
  password: string;
  company: string;

  constructor() {
    this.username = "";
    this.password = "";
    this.company = "";
  }
}

export class SignInReqVM {
  usrId: string;
  usrPwd: string;

  constructor() {
    this.usrId = "";
    this.usrPwd = "";
  }
}
