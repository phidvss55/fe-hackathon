import { SelectListItemVM } from "core/view-models/common-vm";
import ApiService from "./api.service";

export class CommonService extends ApiService {
  public getEventTypeList(coCd: string) {
    return this.apiGet<SelectListItemVM[]>(
      `/visibility/common/getEventTypeList?coCd=${coCd}`,
      null,
      true
    );
  }

  public getContainerTypeSizeList(coCd: string) {
    return this.apiGet<SelectListItemVM[]>(
      `/visibility/common/getContainerTypeSizeList?coCd=${coCd}`,
      null,
      true
    );
  }

  public async getIPAddress() {
    let ipAddress = "";
    await this.apiGet<string>(
      "https://api.ipify.org",
      null,
      false,
      "text",
      true
    )
      .then((ip) => {
        ipAddress = ip;
      })
      .catch((e: any) => {
        // Ignore error
      });

    return ipAddress;
  }
}
