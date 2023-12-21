import { PagingVM } from "core/view-models/paging-vm";
// import { ExampleDataVM } from "../../view-models/user-role/user-role-vm";
import { ApiResult } from "../api-result";

export class GetExampleDataApiResult extends ApiResult {
  data: any[];
  meta: PagingVM;

  constructor() {
    super();
    this.data = [];
    this.meta = new PagingVM();
  }
}
