export const cardNumberFormatter = (value: string): string => {
  return value
    .replace(/\s?/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
};

// 21/08/2019 => 21-08-2019
export const dateFormatterV1 = (date: string): string => {
  return date.split("/").join("-");
};

// 21-08-2019 => 21/08/2019
export const dateFormatterV2 = (date: string): string => {
  return date.split("-").join("/");
};

export const yyyymmddToDate = (date: string): Date => {
  if (date) {
    const year = parseInt(date.substring(0, 4), 10);
    const month = parseInt(date.substring(4, 2), 10) - 1; // Subtract 1 because months are zero-based (0 = January, 11 = December)
    const day = parseInt(date.substring(6, 2), 10);

    const newDate = new Date(year, month, day);
    // Check if the date is valid
    if (newDate.getTime()) {
      return newDate;
    }
  }
  return new Date();
};

type UnitByte = {
  KB: number;
  MB: number;
  GB: number;
};

export function convertBytes(byteSize: number, toUnit: keyof UnitByte = "MB") {
  const units: UnitByte = {
    KB: 1024 ** 1,
    MB: 1024 ** 2,
    GB: 1024 ** 3,
  };

  if (!units[toUnit]) {
    throw new Error("Invalid unit. Use 'KB', 'MB', or 'GB'.");
  }

  if (byteSize < 0) {
    throw new Error("Byte size must be a non-negative number.");
  }

  const result = (byteSize / units[toUnit]).toFixed(2);
  return result;
}
