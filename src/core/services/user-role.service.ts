import { PagingVM } from "core/view-models/paging-vm";
import { ExampleSearchCaseVM } from "core/view-models/example/example-vm";
import { GetExampleDataApiResult } from "core/data-transfer/user-role/get-example-data.api-result";
import ApiService from "./api.service";

export class UserRoleService extends ApiService {
  public getExampleData(paging: PagingVM, searchData?: ExampleSearchCaseVM) {
    return this.apiGet<GetExampleDataApiResult>(
      `/visibility/shipment/?isSearch=true&currentPage=${
        paging.currentPage
      }&perPage=${
        paging.perPage
      }&trdPrnr=SH&trspModTpCd=All&trspModCd=All&shpStsCd=All&refOfcCd=All&shpTpCd=All&mblNo=${
        searchData?.mlbNumber || ""
      }`,
      null,
      true
    );
  }
}
