import { useToggleMeridiemContext } from "./ToggleMeridiemContext";

const ToggleAmPm = () => {
  const { handleToggleAmPm, isAm, disabled, amPmAriaLabel } =
    useToggleMeridiemContext();

  return (
    <button
      id="toggle-am-pm"
      aria-label={amPmAriaLabel}
      onClick={handleToggleAmPm}
      disabled={disabled}
      title="AM/PM button"
      type="button"
    >
      {isAm ? "AM" : "PM"}
    </button>
  );
};

export default ToggleAmPm;
