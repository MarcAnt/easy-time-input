import { createContext, useContext } from "react";
import UseControls from "./Hooks/UseControls";
import { ControlProps, ControlsContextType } from "../Types/types";

const ControlsContext = createContext<ControlsContextType | null>(null);

export const ControlsProvider = ({
  children,
  props,
}: {
  children: React.ReactNode;
  props: ControlProps;
}) => {
  const { handleAddTime, handleRemoveTime } = UseControls(props);
  const { controlsClassName, disabled, inputType } = props;

  return (
    <ControlsContext
      value={{
        controlsClassName,
        disabled,
        handleAddTime,
        handleRemoveTime,
        inputType,
      }}
    >
      {children}
    </ControlsContext>
  );
};

export const useControlsContext = () => {
  const context = useContext(ControlsContext);

  if (!context) {
    throw new Error("useContext must be used within a ControlsProvider");
  }

  return context;
};

export default ControlsContext;
