import { JSX } from "react";
import { TimeInputActions, TimeInputProps } from "../types";
import styles from "../styles/styles.module.css";
import {
  handleOnBlur,
  handleOnKeyDown,
  handleStepTime,
  setFocusOnInput,
} from "../helpers";
import { cn } from "../utils";
import { useState } from "react";

interface CommonInputProps {
  disabled: TimeInputProps["disabled"];
  required: TimeInputProps["required"];
  readOnly: TimeInputProps["readOnly"];
  className: TimeInputProps["className"];
  inputClassName: TimeInputProps["inputClassName"];
  hour12: TimeInputProps["hour12"];
  name: TimeInputProps["name"];
  id: TimeInputProps["id"];
  ref: React.RefObject<HTMLInputElement | null>;
  setZeroOnBlur: TimeInputProps["setZeroOnBlur"];
  format: TimeInputProps["format"];
  value: string;
  hasSeconds: TimeInputProps["hasSeconds"];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, key?: string) => void;
  updateTime: (
    hoursVal: string,
    minutesVal: string,
    secondsVal: string,
  ) => void;
  dispatch: (action: TimeInputActions) => void;
  hours: string;
  minutes: string;
  seconds: string;
}

interface HoursInputProps extends CommonInputProps {
  type: "hours";
  hoursPlaceholder?: TimeInputProps["hoursPlaceholder"];
  hoursAriaLabel?: TimeInputProps["hoursAriaLabel"];
  hoursInputTitle?: TimeInputProps["hoursInputTitle"];
  readOnlyHours?: TimeInputProps["readOnlyHours"];
  minutes: string;
  seconds: string;
  disabledHours: TimeInputProps["disabledHours"];
  stepHours: TimeInputProps["stepHours"];
}

interface MinutesInputProps extends CommonInputProps {
  type: "minutes";
  minutesPlaceholder?: TimeInputProps["minutesPlaceholder"];
  minutesAriaLabel?: TimeInputProps["minutesAriaLabel"];
  minutesInputTitle?: TimeInputProps["minutesInputTitle"];
  readOnlyMinutes?: TimeInputProps["readOnlyMinutes"];
  hours: string;
  seconds: string;
  disabledMinutes: TimeInputProps["disabledMinutes"];
  stepMinutes: TimeInputProps["stepMinutes"];
}

interface SecondsInputProps extends CommonInputProps {
  type: "seconds";
  secondsPlaceholder?: TimeInputProps["secondsPlaceholder"];
  secondsAriaLabel?: TimeInputProps["secondsAriaLabel"];
  secondsInputTitle?: TimeInputProps["secondsInputTitle"];
  readOnlySeconds?: TimeInputProps["readOnlySeconds"];
  hours: string;
  minutes: string;
  disabledSeconds: TimeInputProps["disabledSeconds"];
  stepSeconds: TimeInputProps["stepSeconds"];
}

type InputProps = HoursInputProps | MinutesInputProps | SecondsInputProps;

const typeInputProps = (
  type: "hours" | "minutes" | "seconds",
  props: InputProps,
) => {
  if (type === "minutes") {
    const {
      inputClassName,
      minutesPlaceholder,
      minutesAriaLabel,
      minutesInputTitle,
      readOnlyMinutes,
      disabledMinutes,
      stepMinutes,
      hour12,
      name,
      required,
      id,
      ref,
      value,
      readOnly,
    } = props as MinutesInputProps;

    return {
      id,
      ref,
      step: handleStepTime(stepMinutes, false, hour12),
      min: 0,
      max: 59,
      readOnly: readOnlyMinutes || readOnly,
      placeholder: minutesPlaceholder,
      value,
      className: cn(disabledMinutes ? styles.ti__disabled : "", inputClassName),
      pattern: "^([0-5]?[0-9])$",
      required: required,
      title: minutesInputTitle,
      ariaLabel: minutesAriaLabel,
      name: `minutes-${name}`,
      disabled: disabledMinutes,
    };
  }

  if (type === "seconds") {
    const {
      inputClassName,
      secondsPlaceholder,
      secondsAriaLabel,
      secondsInputTitle,
      readOnlySeconds,
      disabledSeconds,
      stepSeconds,
      hour12,
      name,
      required,
      id,
      ref,
      value,
      readOnly,
    } = props as SecondsInputProps;

    return {
      id,
      ref,
      step: handleStepTime(stepSeconds, false, hour12),
      min: 0,
      max: 59,
      readOnly: readOnlySeconds || readOnly,
      placeholder: secondsPlaceholder,
      value,
      className: cn(disabledSeconds ? styles.ti__disabled : "", inputClassName),
      pattern: "^([0-5]?[0-9])$",
      required: required,
      title: secondsInputTitle,
      ariaLabel: secondsAriaLabel,
      name: `seconds-${name}`,
      disabled: disabledSeconds,
    };
  }

  const {
    inputClassName,
    hoursPlaceholder,
    hoursAriaLabel,
    hoursInputTitle,
    readOnlyHours,
    disabledHours,
    stepHours,
    hour12,
    name,
    required,
    id,
    ref,
    value,
    readOnly,
    format,
  } = props as HoursInputProps;

  const maxHours = hour12 && format?.includes("hh") ? 12 : 23;
  const minHours = hour12 && format?.includes("hh") ? 1 : 0;

  return {
    id,
    ref,
    step: handleStepTime(stepHours, false, hour12),
    min: minHours,
    max: maxHours,
    readOnly: readOnlyHours || readOnly,
    placeholder: hoursPlaceholder,
    value,
    className: cn(disabledHours ? styles.ti__disabled : "", inputClassName),
    pattern: "^([0-9]{1,2})$",
    required: required,
    title: hoursInputTitle,
    ariaLabel: hoursAriaLabel,
    name: `hours-${name}`,
    disabled: disabledHours,
  };
};

const Input = (props: InputProps): JSX.Element => {
  const [key, setKey] = useState<string>("");
  const {
    type,
    disabled,
    onChange,
    ref,
    setZeroOnBlur,
    updateTime,
    hour12,
    dispatch,
    hasSeconds,
    hours,
    minutes,
    seconds,
    format,
  } = props;

  const {
    id,
    step,
    min,
    max,
    readOnly,
    placeholder,
    value,
    className,
    pattern,
    required,

    ...inputProps
  } = typeInputProps(type, props);

  return (
    <input
      type="number"
      id={id}
      autoComplete={"off"}
      step={step}
      min={min}
      max={max}
      readOnly={readOnly}
      placeholder={placeholder}
      value={value}
      className={className}
      pattern={pattern}
      required={required}
      inputMode={"numeric"}
      onChange={(e) => {
        onChange(e, key);
      }}
      onBlur={() => {
        if (!setZeroOnBlur) return;
        handleOnBlur({ hours, minutes, seconds }, type, updateTime, hour12);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          setKey(e.key);
        } else {
          setKey("");
        }

        handleOnKeyDown(
          e,
          type,
          dispatch,
          updateTime,
          { hours, minutes, seconds },
          hasSeconds,
          format,
        );
      }}
      onClick={(e) => {
        e.preventDefault();
        setFocusOnInput(ref);
        dispatch({ type: "INPUT_TYPE", payload: type });
      }}
      tabIndex={0}
      disabled={disabled || inputProps.disabled}
      ref={ref}
      aria-label={inputProps.ariaLabel}
      name={inputProps.name}
      title={inputProps.title}
    />
  );
};

export default Input;
