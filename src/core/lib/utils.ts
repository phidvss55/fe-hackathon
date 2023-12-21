import { MenuTreeVM, PermissionVM } from "core/view-models/menu-tree-vm";
import { images } from "assets/images";
import i18n from "../../assets/i18n";

export const example = (): boolean => {
  return true;
};

export const isEmpty = (value: unknown): boolean => {
  return value === undefined || value === "" || value === null;
};

export const setLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
  localStorage.setItem("language-code", lang);
};

export const uid = (): string =>
  String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ""
  );

export function getValue<DataType, PathType extends string, DefaultType>(
  data: DataType,
  path: PathType,
  defaultValue?: DefaultType
) {
  const value = path
    .split(/[.[\]]/)
    .filter(Boolean)
    .reduce((value, key) => (value as any)?.[key], data as any);

  return value !== undefined ? value : (defaultValue as DefaultType);
}

export const omit = (
  obj: Record<string, unknown>,
  keys: string | string[]
): Record<string, unknown> =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

export const getYears = (start = 1900, end = 2100) => {
  const years = [];
  for (let i = start; i < end; i += 1) {
    years.push(i);
  }
  return years;
};

export const convertURLSearchParams = (obj: any) => {
  const str = `?${Object.keys(obj)
    .map((key) => {
      return `${key}=${encodeURIComponent(obj[key])}`;
    })
    .join("&")}`;

  return str;
};

export const getTypeFile = (name: string) => {
  const nameSplits = name.split(".");
  const ext = nameSplits[nameSplits.length - 1];
  switch (ext) {
    case "xls":
      return "application/vnd.ms-excel";
    case "xlsx":
      return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    case "docx":
      return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    case "doc":
      return "application/msword";
    default:
      return "";
  }
};

export const getDocumentType = (type: string) => {
  switch (type) {
    case "CI":
      return "Commercial Invoice";
    case "PL":
      return "Parking List";
    case "SI":
      return "Shipping Instruction";
    case "BL":
      return "BIll of Lading";
    case "CD":
      return "Custom Declaration";
    default:
      return "Others";
  }
};

export const checkPermission = (
  supperAdmin: boolean,
  permissions: PermissionVM[],
  buttonCode: string | undefined,
  apiCode?: string | undefined
): boolean => {
  if (supperAdmin) {
    return true;
  }

  if (apiCode) {
    const apiAcceptedFoundIndex = permissions.findIndex((item) => {
      return item.apiCode === apiCode;
    });

    return apiAcceptedFoundIndex > -1;
  }

  const buttonFoundIndex = permissions.findIndex((item) => {
    return item.buttonCode === buttonCode;
  });

  return buttonFoundIndex > -1;
};

export const pluck = (array: any[], field: string) => {
  if (!array) {
    return [];
  }
  return array.map((item) => item[field]);
};

export const getPermissions = (permissions: PermissionVM[], id: string) => {
  return (permissions || []).filter((item) => {
    return item.programId === id;
  });
};

export const getTabPermissions = (permissions: MenuTreeVM[], id: string) => {
  return (permissions || []).filter((item) => {
    return item.id === id;
  });
};

const isUnique = <T>(obj: T, index: number, self: T[]) => {
  return (
    index ===
    self.findIndex((o: T) => JSON.stringify(o) === JSON.stringify(obj)) // Check uniqueness based on the "id" property
  );
};

export const uniqueArrayOfObjects = <T>(array: T[]) => array.filter(isUnique);

export const stringFormat = (value: string, offset: number) => {
  let strResult = "";
  if (value === "0") {
    strResult = "0.";
  } else {
    strResult = value ?? "";
  }
  const index = strResult.indexOf(".");
  if (index < 0) {
    strResult += ".";
  }
  const cal = strResult.length - index - offset - 1;
  if (cal < 0) {
    for (let i = 0; i > cal; i -= 1) {
      strResult += "0";
    }
  } else {
    strResult = strResult.slice(0, index + offset + 1);
  }
  for (let i = index - 3; i > 0; i -= 3) {
    strResult = `${strResult.slice(0, i)},${strResult.slice(
      i,
      strResult.length
    )}`;
  }
  return strResult;
};

export const getPoints = (points: string | number) => {
  return `${points} Points`;
};

export const randomColors = (index: number) => {
  const list = [
    "bg-cyan-500",
    "bg-teal-500",
    "bg-primary-green",
    "bg-[#007CEB]",
    "bg-cyan-500",
    "bg-teal-500",
    "bg-primary-green",
    "bg-[#007CEB]",
    "bg-cyan-500",
    "bg-teal-500",
    "bg-primary-green",
    "bg-[#007CEB]",
  ];
  return list[index];
};

export const randomImg = (index: number) => {
  const list = [images.logitic, images.accounting, images.terminal];
  return list[index % 3];
};

export const randomStars = () => {
  const randomValue = Math.random();
  if (randomValue < 0.7) {
    return Math.floor(Math.random() * 3) + 3;
  }
  return Math.floor(Math.random() * 3) + 1;
};
