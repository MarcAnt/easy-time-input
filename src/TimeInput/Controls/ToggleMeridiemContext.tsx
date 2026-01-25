import { createContext, useContext } from "react";
import { ToggleMeridiemContextType, ToggleMeridiemProps } from "../Types/types";

const ToggleMeridiemContext = createContext<ToggleMeridiemContextType | null>(
  null,
);

export const ToggleMeridiemProvider = ({
  children,
  props,
}: {
  children: React.ReactNode;
  props: ToggleMeridiemProps;
}) => {
  const { dispatch, amPmAriaLabel, disabled, isAm } = props;

  const handleToggleAmPm = () => {
    dispatch({ type: "TOGGLE_AM", payload: !isAm });
  };

  return (
    <ToggleMeridiemContext
      value={{
        handleToggleAmPm,
        amPmAriaLabel,
        isAm,
        disabled,
      }}
    >
      {children}
    </ToggleMeridiemContext>
  );
};

export const useToggleMeridiemContext = () => {
  const context = useContext(ToggleMeridiemContext);

  if (!context) {
    throw new Error("useContext must be used within a ControlsProvider");
  }

  return context;
};

export default ToggleMeridiemContext;
