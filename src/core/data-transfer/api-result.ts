/* eslint-disable max-classes-per-file */
export class ApiResult {
  success: boolean;
  message?: string;
  errorCode?: string;
  data?: unknown;
  meta?: unknown;

  constructor() {
    this.success = false;
    this.message = "";
    this.errorCode = "";
  }
}
