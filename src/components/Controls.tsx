import ChevronUp from "../assets/upArrow.svg?react";
import ChevronDown from "../assets/downArrow.svg?react";
import styles from "../styles/styles.module.css";
import { useControlsContext } from "../contexts/ControlsContext";
import { cn } from "../utils";

const Controls = () => {
  const {
    controlsClassName,
    disabled,
    handleAddTime,
    handleRemoveTime,
    inputType,
  } = useControlsContext();

  return (
    <div
      className={cn(styles.ti__arrowsContainer, controlsClassName)}
      aria-label={`${inputType}-controls`}
    >
      <button
        onClick={(e) => handleAddTime(e)}
        disabled={disabled}
        aria-label="add-time"
        tabIndex={0}
      >
        <ChevronUp />
      </button>
      <button
        disabled={disabled}
        onClick={(e) => handleRemoveTime(e)}
        aria-label="remove-time"
        tabIndex={0}
      >
        <ChevronDown />
      </button>
    </div>
  );
};

export default Controls;
