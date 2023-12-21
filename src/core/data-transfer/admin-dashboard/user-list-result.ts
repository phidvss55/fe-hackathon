import { PagingVM } from "core/view-models/paging-vm";
import { ApiResult } from "../api-result";

export class GetUserListApiResult extends ApiResult {
  data: any[];
  meta: PagingVM;

  constructor() {
    super();
    this.data = [];

    this.meta = {
      currentPage: 0,
      perPage: 0,
      count: 0,
      totalItems: 0,
      totalPages: 0,
    };
  }
}
