import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface SearchButtonProps {
  text: string;
  customClass?: string;
  onClick: () => void;
}

const SearchButton: React.FunctionComponent<SearchButtonProps> = ({
  text,
  customClass,
  onClick,
}) => {
  return (
    <button
      type={"button"}
      onClick={() => onClick()}
      className={`${customClass} flex h-[40px] w-full items-center justify-center gap-2 rounded-[4px] border border-primary-blue-500 bg-blue-500 px-[12px] py-0 font-bold text-neutral-white-50 hover:bg-blue-700`}
    >
      <div>
        <MagnifyingGlassIcon className={"text-center"} width={18} height={18} />
      </div>
      <div>
        <span className={" py-[10px] text-sm leading-5"}>{text}</span>
      </div>
    </button>
  );
};

SearchButton.defaultProps = {
  customClass: "",
};

export { SearchButton };
