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
  const { setIsAm, amPmAriaLabel, disabled, isAm } = props;

  const handleToggleAmPm = () => {
    setIsAm((prev) => !prev);
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
