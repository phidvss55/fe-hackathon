export class TradePartnerVM {
  id: string;
  trdPrnrId: string;
  trdPrnrCd: string;
  trdPrnrNm: string;
  trdPrnrTpCd: string;
  trdPrnrTpNm: string;
  optTrdPrnrTpCd: string;
  optTrdPrnrTpNm: string;
  optTrdPrnrCd: string;
  optTrdPrnrNm: string;

  constructor() {
    this.id = "";
    this.trdPrnrId = "";
    this.trdPrnrTpCd = ""; // type
    this.trdPrnrTpNm = "";
    this.trdPrnrCd = ""; // code + name
    this.trdPrnrNm = "";
    this.optTrdPrnrTpCd = ""; // other type
    this.optTrdPrnrTpNm = "";
    this.optTrdPrnrCd = ""; // other code + name
    this.optTrdPrnrNm = "";
  }
}

export class TradePartnerSearchVM {
  coCd: string;
  trdPrnrTpCd: string;
  trdPrnrNm: string;
  usrId: string;
  limit?: number;

  constructor() {
    this.coCd = "";
    this.trdPrnrTpCd = "";
    this.usrId = "";
    this.trdPrnrNm = "";
  }
}

export class UpdateTradePartnerItem {
  trdPrnrCd: string;
  optTrdPrnrCd: string;
  trdPrnrTpCd: string;
  optTrdPrnrTpCd: string;

  constructor() {
    this.trdPrnrCd = "";
    this.optTrdPrnrCd = "";
    this.trdPrnrTpCd = "";
    this.optTrdPrnrTpCd = "";
  }
}

export class UpdateTradePartnerSearchVM {
  updateList: TradePartnerVM[];
  usrId: string;
  coCd: string;

  constructor() {
    this.updateList = [];
    this.usrId = "";
    this.coCd = "";
  }
}

export class CreateTradePartnerItem {
  trdPrnrCd: string;
  optTrdPrnrCd: string;
  coCd: string;

  constructor() {
    this.trdPrnrCd = "";
    this.optTrdPrnrCd = "";
    this.coCd = "";
  }
}

export class CreateTradePartnerSearchVM {
  createList: CreateTradePartnerItem[];
  usrId: string;

  constructor() {
    this.createList = [];
    this.usrId = "";
  }
}

export class DeleteTradePartnerItem {
  usrId: string;
  trdPrnrCd: string;
  trdPrnrTpCd: string;
  optTrdPrnrCd: string;
  optTrdPrnrTpCd: string;
  coCd: string;

  constructor() {
    this.usrId = "";
    this.trdPrnrCd = "";
    this.optTrdPrnrCd = "";
    this.coCd = "";
    this.trdPrnrTpCd = "";
    this.optTrdPrnrTpCd = "";
  }
}

export class PartnerTypeCodeItem {
  value: string;
  label: string;

  constructor() {
    this.value = "";
    this.label = "";
  }
}

export class PartnerCodeItem {
  code: string;
  name: string;

  constructor() {
    this.code = "";
    this.name = "";
  }
}
