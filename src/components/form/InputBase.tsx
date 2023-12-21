/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
import React from "react";
import { Input } from "@material-tailwind/react";

export type ContainerProps = {
  [key: string]: any;
};

interface InputProp {
  label: string | null;
  value?: string | ReadonlyArray<string> | number | undefined;
  onChange: (value: any) => void;
  customClass?: string;
  classNameProps?: string;
  name?: string | undefined;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  defaultValue?: string | number | ReadonlyArray<string> | undefined;
  isRequired?: boolean;
  type?: string;
  containerProps?: ContainerProps;
  title?: string;
  onEventKeyUp?: (event: any) => void;
}

const InputBase: React.FunctionComponent<InputProp> = ({
  label,
  value = undefined,
  name,
  placeholder = "",
  customClass = "",
  classNameProps = "",
  containerProps = {},
  readOnly = false,
  disabled = false,
  isRequired = false,
  type = "text",
  title = undefined,
  onEventKeyUp,
  onChange,
}) => {
  return (
    <div className="" {...containerProps}>
      {label && (
        <label className="text-neutral-black-700 mb-2 block text-lg font-semibold leading-[22px]">
          {label}
        </label>
      )}
      <Input
        readOnly={readOnly}
        disabled={disabled}
        name={name}
        id={`input_${label}`}
        labelProps={{
          className: "hidden",
        }}
        value={value}
        onChange={(e: any) => onChange(e)}
        className={`rounded-base text-neutral-black-700 placeholder:text-neutral-black-400 !h-[56px] w-full !border !border-blue-gray-200 bg-white p-3 text-lg font-normal focus:!border-blue-500 focus:!border-t-blue-500 ${customClass}`}
        containerProps={{ className: `${classNameProps}` }}
        placeholder={placeholder || "Enter your text here"}
        required={isRequired}
        type={type}
        onKeyUp={(e) => {
          if (onEventKeyUp) {
            onEventKeyUp(e);
          }
        }}
        title={title}
      />
    </div>
  );
};

InputBase.defaultProps = {
  name: "",
  containerProps: {},
  placeholder: "",
  customClass: "",
  classNameProps: "",
  readOnly: false,
  disabled: false,
  defaultValue: undefined,
  value: undefined,
};

export default InputBase;
