import { UserProfileVM } from "core/view-models/menu-tree-vm";
import { ApiResult } from "../api-result";

export class UserProfileApiResult extends ApiResult {
  data: UserProfileVM;

  constructor() {
    super();
    this.data = new UserProfileVM();
  }
}
