import { memo } from "react";
import ChevronUp from "../../assets/upArrow.svg?react";
import ChevronDown from "../../assets/downArrow.svg?react";
import styles from "../Styles/styles.module.scss";
import { useControlsContext } from "./ControlsContext";

const Controls = memo(function Controls() {
  const {
    controlsClassName,
    disabled,
    handleAddTime,
    handleRemoveTime,
    inputType,
  } = useControlsContext();

  return (
    <div
      className={styles.arrowsContainer || controlsClassName}
      aria-label={`${inputType}-controls`}
    >
      <button
        onClick={(e) => handleAddTime(e)}
        disabled={disabled}
        aria-label="add-time"
      >
        <ChevronUp />
      </button>
      <button
        disabled={disabled}
        onClick={(e) => handleRemoveTime(e)}
        aria-label="remove-time"
      >
        <ChevronDown />
      </button>
    </div>
  );
});

export default Controls;
