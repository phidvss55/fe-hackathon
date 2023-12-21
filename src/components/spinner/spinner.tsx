import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../core/store";

interface ComponentProps {
  show?: boolean;
}

type Props = ComponentProps;
// function formatNumber(number, decPlaces) {
const Spinner: React.FunctionComponent<Props> = ({ show }: any) => {
  const appReducer = useSelector((state: AppState) => state.app);

  if (appReducer.isEnabledSpinner || show) {
    return (
      <div className="c-spinner flex items-center justify-center">
        <div className="lds-facebook">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
  return null;
};

export default Spinner;
