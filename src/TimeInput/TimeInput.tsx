/// <reference types="vite-plugin-svgr/client" />
import { setFocusOnInput } from "./Controls/Helpers";
import UseTimeInput from "./Hooks/UseTimeInput";
import Controls from "./Controls/Controls";
import { TimeInputProps } from "./Types/types";
import Clock from "../assets/Clock.svg?react";
import styles from "./Styles/styles.module.scss";
import { JSX } from "react";
import ToggleAmPm from "./Controls/ToggleAmPm";
import TimeInputContextWrapper from "./Contexts/TimeInputContextWrapper";

/**
 * TimeInput component provides a time input field to control hours and minutes.
 * Display time in 24 hours or 12 hours format. Can be handle with keyboard (arrow up or down)
 *
 * @param {TimeInputProps} props - Props for the TimeInput component.
 * @returns {JSX.Element}
 */

const TimeInput = ({
  id,
  value,
  dataTestId,
  hoursPlaceholder = "--",
  minutesPlaceholder = "--",
  secondsPlaceholder = "--",
  name = "time",
  disabled,
  required,
  onChange,
  className,
  iconClockClassName,
  amPmButtonClassName,
  controlsClassName,
  ariaLabel = "time",
  iconAriaLabel = "clock",
  hoursAriaLabel = "hours",
  minutesAriaLabel = "minutes",
  secondsAriaLabel = "seconds",
  amPmAriaLabel = "am-pm",
  hasSeconds = false,
  hour12 = false,
  disableFocusOnIcon = false,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
  maxTime,
  minTime,
  hideControls = false,
  hoursInputTitle = "Hours input",
  minutesInputTitle = "Minutes input",
  secondsInputTitle = "Seconds input",
  setZeroOnBlur = false,
  format,
}: TimeInputProps): JSX.Element => {
  const {
    hoursRef,
    minutesRef,
    secondsRef,
    inputType,
    updateTime,
    handleHours,
    handleMinutes,
    handleSeconds,
    hours,
    minutes,
    seconds,
    isAm,
    state,
    dispatch,
  } = UseTimeInput({
    value,
    onChange,
    hasSeconds,
    hour12,
    maxTime,
    minTime,
    format,
  });

  const hoursClassName = `${styles.timerContainer} ${styles.hourContainer}
  ${hoursPlaceholder === "--" ? styles.hyphen : styles.hh} 
  ${hours === "" ? styles.noValue : ""} 
  ${+hours > 9 ? styles.noZero : ""}`;

  const minutesClassName = `${styles.timerContainer} ${
    styles.minutesContainer
  } ${hasSeconds ? styles.withSeconds : ""}
  ${minutesPlaceholder === "--" ? styles.hyphen : styles.mm}  
  ${minutes === "" ? styles.noValue : ""}  
  ${+minutes > 9 ? styles.noZero : ""}`;

  const secondsClassName = `${styles.timerContainer} ${styles.secondsContainer}`;

  const hasSecondsInFormat = format?.includes("ss") || hasSeconds;
  const hourFormat = format?.includes("hh");

  return (
    <TimeInputContextWrapper
      props={{
        hours,
        minutes,
        seconds,
        isAm,
        inputType,
        disabled,
        controlsClassName,
        hour12,
        amPmAriaLabel,
        updateTime,
        format: hourFormat ? "hh" : "HH",
        disabledHours,
        disabledMinutes,
        disabledSeconds,
        state,
        dispatch,
      }}
    >
      <div
        className={`${styles.inputContainer} ${className || ""} ${
          disabled ? styles.disabled : ""
        }`}
        data-testid={dataTestId}
        role="textbox"
        tabIndex={0}
      >
        {!disableFocusOnIcon && (
          <div
            className={styles.iconContainer || iconClockClassName}
            role="button"
            onClick={() => {
              dispatch({ type: "INPUT_TYPE", payload: "hours" });
              setFocusOnInput(hoursRef);
            }}
            aria-label={iconAriaLabel}
          >
            <Clock />
          </div>
        )}
        <div className={styles.timeInputMainContainer}>
          <div
            className={hoursClassName}
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "INPUT_TYPE", payload: "hours" });
              setFocusOnInput(hoursRef);
            }}
          >
            <input
              type="hidden"
              name={name}
              aria-label={ariaLabel}
              value={
                hasSecondsInFormat
                  ? `${hours}:${minutes}:${seconds}`
                  : `${hours}:${minutes}`
              }
            />

            <input
              type="number"
              id={id}
              autoComplete={"off"}
              minLength={1}
              maxLength={2}
              step={1}
              min={hour12 ? 1 : 0}
              max={hour12 ? 12 : 23}
              inputMode="numeric"
              value={hours}
              onChange={handleHours}
              pattern={"^(2[0-3]|[01]?[0-9]){1,1}$"}
              placeholder={hoursPlaceholder}
              required={required}
              onBlur={() => {
                if (!setZeroOnBlur) return;
                if (hours.length < 2) {
                  if (hour12) {
                    updateTime(
                      +hours > 12 ? "12" : isAm ? hours : `${+hours + 12}`,
                      minutes,
                      seconds,
                    );
                    return;
                  }
                  updateTime(`0${hours}`, minutes, seconds);
                  return;
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Tab") {
                  dispatch({ type: "INPUT_TYPE", payload: "minutes" });

                  if (hours === "") {
                    updateTime("00", minutes, seconds);
                    return;
                  }

                  if (hours.length < 2) {
                    updateTime(`0${hours}`, minutes, seconds);
                    return;
                  }
                }

                if (e.key === "Backspace") {
                  updateTime("", minutes, seconds);
                  return;
                }

                return (
                  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                );
              }}
              onClick={(e) => {
                e.preventDefault();
                setFocusOnInput(hoursRef);
                dispatch({ type: "INPUT_TYPE", payload: "hours" });
              }}
              tabIndex={0}
              disabled={disabled || disabledHours}
              aria-label={hoursAriaLabel}
              name={`hours-${name}`}
              ref={hoursRef}
              title={hoursInputTitle}
            />
          </div>

          <span>:</span>

          <div
            className={minutesClassName}
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "INPUT_TYPE", payload: "minutes" });
              setFocusOnInput(minutesRef);
            }}
          >
            <input
              type="number"
              autoComplete={"off"}
              min={0}
              max={59}
              step={1}
              size={2}
              placeholder={minutesPlaceholder}
              value={minutes}
              inputMode={"numeric"}
              onChange={handleMinutes}
              pattern={"/^([0-5]){1,1}([0-9]){1,1}$/"}
              required={required}
              onBlur={() => {
                if (!setZeroOnBlur) return;
                if (minutes === "") {
                  updateTime(hours, "00", seconds);
                  return;
                }
                if (minutes.length < 2) {
                  updateTime(hours, `0${minutes}`, seconds);
                  return;
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Tab" && hasSeconds) {
                  if (minutes === "") {
                    updateTime(hours, "00", seconds);
                    return;
                  }
                  if (minutes.length < 2) {
                    updateTime(hours, `0${minutes}`, seconds);
                    return;
                  }
                  dispatch({ type: "INPUT_TYPE", payload: "seconds" });
                }

                if (e.key === "Backspace") {
                  updateTime(hours, "", seconds);
                  return;
                }

                return (
                  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                );
              }}
              onClick={(e) => {
                e.preventDefault();
                setFocusOnInput(minutesRef);
                dispatch({ type: "INPUT_TYPE", payload: "minutes" });
              }}
              ref={minutesRef}
              tabIndex={0}
              disabled={disabled || disabledMinutes}
              aria-label={minutesAriaLabel}
              name={`minutes-${name}`}
              title={minutesInputTitle}
            />
          </div>

          {hasSecondsInFormat ? (
            <>
              <span>:</span>

              <div
                className={secondsClassName}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "INPUT_TYPE", payload: "seconds" });
                  setFocusOnInput(secondsRef);
                }}
              >
                <input
                  type="number"
                  autoComplete={"off"}
                  step={1}
                  size={2}
                  min={0}
                  max={59}
                  placeholder={secondsPlaceholder}
                  value={seconds}
                  pattern={"/^([0-5]){1,1}([0-9]){1,1}$/"}
                  required={required}
                  onBlur={() => {
                    if (!setZeroOnBlur) return;
                    if (seconds === "") {
                      updateTime(hours, minutes, "00");
                      return;
                    }
                    if (seconds.length < 2) {
                      updateTime(hours, minutes, `0${seconds}`);
                      return;
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Tab") {
                      if (seconds === "") {
                        updateTime(hours, minutes, "00");
                        return;
                      }
                      if (seconds.length < 2) {
                        updateTime(hours, minutes, `0${seconds}`);
                        return;
                      }
                      dispatch({ type: "INPUT_TYPE", payload: "seconds" });
                    }

                    if (e.key === "Backspace") {
                      updateTime(hours, minutes, "");
                      return;
                    }

                    return (
                      ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                    );
                  }}
                  onChange={handleSeconds}
                  onClick={(e) => {
                    e.preventDefault();
                    setFocusOnInput(secondsRef);
                    dispatch({ type: "INPUT_TYPE", payload: "seconds" });
                  }}
                  tabIndex={0}
                  disabled={disabled || disabledSeconds}
                  ref={secondsRef}
                  aria-label={secondsAriaLabel}
                  name={`seconds-${name}`}
                  title={secondsInputTitle}
                />
              </div>
            </>
          ) : null}

          {hour12 && (
            <div
              className={styles.toggleAmPmContainer || amPmButtonClassName}
              title={"AM/PM button"}
            >
              <ToggleAmPm />
            </div>
          )}
        </div>
        {hideControls ? null : <Controls />}
      </div>
    </TimeInputContextWrapper>
  );
};

export default TimeInput;
