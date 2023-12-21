export class MenuTreeVM {
  id: string;
  name: string;
  parentId: string;
  order: number;

  constructor() {
    this.id = "";
    this.name = "";
    this.parentId = "";
    this.order = 0;
  }
}

export class PermissionVM {
  apiCode: string;
  apiName: string;
  buttonCode: string;
  buttonName: string;
  programAccessCode: string;
  programId: string;
  programName: string;
  programUrl: string;

  constructor() {
    this.apiCode = "";
    this.apiName = "";
    this.buttonCode = "";
    this.buttonName = "";
    this.programAccessCode = "";
    this.programId = "";
    this.programName = "";
    this.programUrl = "";
  }
}

export class UserProfileVM {
  role: string;
  permissions: PermissionVM[];
  menus: MenuTreeVM[];
  coCd: string;
  username: string;
  fullName: string;
  coNm: string;
  phone: string;
  email: string;
  faxNo: string;
  switchAccount: boolean;
  switchingCoCd: string;
  loggedInFullName: string;
  supperAdmin: boolean;
  staff: boolean;
  logoUrl: string;

  constructor() {
    this.role = "";
    this.permissions = [];
    this.menus = [];
    this.coCd = "";
    this.username = "";
    this.fullName = "";
    this.coNm = "";
    this.phone = "";
    this.email = "";
    this.faxNo = "";
    this.switchAccount = false;
    this.switchingCoCd = "";
    this.loggedInFullName = "";
    this.supperAdmin = false;
    this.staff = false;
    this.logoUrl = "";
  }
}
