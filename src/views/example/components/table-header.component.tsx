/* eslint-disable array-callback-return */
/* eslint-disable react/no-unused-prop-types */
import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { masterBlTableData } from "core/data/example-header";

export const ExampleTableHeader: React.FunctionComponent = () => {
  const { t } = useTranslation();

  const header = (): React.ReactElement[] => {
    return masterBlTableData.map((item) => {
      return (
        <th
          key={item.name}
          className={`border-b border-blue-gray-50 py-3 px-5 text-left ${
            item.className || ""
          }`}
        >
          <Typography
            variant={"small"}
            className={"text-[11px] font-bold uppercase text-blue-gray-400"}
          >
            {item.name}
          </Typography>
        </th>
      );
    });
  };

  return (
    <thead>
      <tr>{header()}</tr>
    </thead>
  );
};
