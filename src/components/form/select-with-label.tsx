import { Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";

type Props = {
  className?: string;
  paramKey: string;
  value: any;
  label: string;
  onSelectChange: (key: string, value: string) => void;
  selectOptions: any[];
};

const SelectWithLabel = ({
  className = "",
  onSelectChange,
  selectOptions,
  paramKey,
  value,
  label,
}: Props) => {
  const [showLabel, setShowLabel] = useState<boolean>(true);

  if (!selectOptions || selectOptions.length === 0) return <></>;

  return (
    <div tabIndex={0} role={"button"} className={"relative flex w-full"}>
      <Select
        className={`${
          className ||
          "!h-[40px] !border !border-blue-gray-200 bg-white p-3 text-sm font-normal text-blue-gray-500 placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500"
        }`}
        value={value}
        onChange={(e: any) => {
          onSelectChange(paramKey, e);
          setShowLabel(false);
        }}
        labelProps={{ className: "hidden" }}
      >
        {selectOptions.map((item) => {
          return (
            <Option key={item.code} value={item.code}>
              {item.name}
            </Option>
          );
        })}
      </Select>
      {(showLabel || !value) && (
        <span
          className={
            "pointer-events-none absolute top-2.5 left-3 font-primary text-sm text-neutral-black-400"
          }
        >
          {label}
        </span>
      )}
    </div>
  );
};

SelectWithLabel.defaultProps = {
  className: "",
};

export default SelectWithLabel;
