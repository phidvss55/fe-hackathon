import { GetUserListApiResult } from "core/data-transfer/admin-dashboard/user-list-result";
import ApiService from "./api.service";

export class AdminService extends ApiService {
  public getUsersList(coCd = "CLV") {
    return this.apiGet<GetUserListApiResult>(
      `visibility/admins/list-users?coCd=${coCd}`,
      null,
      true,
      undefined,
      true
    );
  }
}
