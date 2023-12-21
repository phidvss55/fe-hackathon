/* eslint-disable react/require-default-props */
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useClickOutside } from "core/lib/hook-helpers";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface ComponentProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  containerClassName?: string;
  isUseClickOutSide?: boolean;
  bodyClassName?: string;
}

type Props = ComponentProps;

export const Popup: React.FunctionComponent<Props> = (props) => {
  const { t } = useTranslation();
  const divRef = useRef(null);

  useClickOutside(divRef, (e) => {
    if (props.isUseClickOutSide) {
      props.onClose();
    }
  });

  if (!props.show) {
    return <div />;
  }

  return (
    <div className="fixed top-0 right-0 z-[1000] flex h-full w-full justify-end bg-gray-900/50 backdrop-blur-sm">
      <div
        className={`mx-auto my-[8vh] flex w-6/12 flex-col rounded-xl bg-gray-100 ease-in-out ${props.containerClassName}`}
        ref={divRef}
      >
        {/* Popup header */}
        <div className="sticky top-0 z-[999] flex w-full items-center justify-between rounded-t-xl bg-gray-100 p-2 md:p-4">
          <p className="font-primary text-2xl font-semibold">{props.title}</p>
          <button
            type="button"
            className="h-7 w-7 cursor-pointer"
            onClick={props.onClose}
          >
            <XCircleIcon />
          </button>
        </div>

        {/* Popup body */}
        <div
          className={`flex flex-1 flex-col overflow-auto p-2 !pt-0 md:p-4 ${props.bodyClassName}`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};
Popup.defaultProps = {
  isUseClickOutSide: true,
};
