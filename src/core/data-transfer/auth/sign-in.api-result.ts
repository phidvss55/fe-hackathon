import { ApiResult } from "../api-result";

export class SignInApiResult extends ApiResult {
  data: any;

  constructor() {
    super();
    this.data = null;
  }
}
