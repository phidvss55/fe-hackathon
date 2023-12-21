import { UserProfileApiResult } from "core/data-transfer/auth/user-profile-result";
import { ApiResult } from "core/data-transfer/api-result";
import { SignInApiResult } from "../data-transfer/auth/sign-in.api-result";
import { SignInReqVM } from "../view-models/auth/sign-in-vm";
import ApiService from "./api.service";

export class AuthService extends ApiService {
  public signIn(data: SignInReqVM) {
    return this.apiGet<SignInApiResult>(
      `/checkUsrPwd?usrId=${data.usrId}&usrPwd=${data.usrPwd}`,
      null
    );
  }

  public getUserInfo(userId: string) {
    return this.apiGet<UserProfileApiResult>(
      `/getUsrById/${userId}`,
      null,
      true
    );
  }

  public logout(ipAddress: string) {
    return this.apiPost<ApiResult>(
      `/visibility/auth/logout`,
      null,
      null,
      true,
      true,
      ipAddress
    );
  }
}
