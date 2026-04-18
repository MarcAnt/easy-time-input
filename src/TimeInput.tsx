/// <reference types="vite-plugin-svgr/client" />
import { handleStepTime, setFocusOnInput } from "./helpers";
import Controls from "./components/Controls";
import Clock from "./assets/Clock.svg?react";
import { JSX } from "react";
import ToggleAmPm from "./components/ToggleAmPm";
import TimeInputContextWrapper from "./contexts/TimeInputContextWrapper";
import { cn } from "./utils";
import styles from "./styles/styles.module.css";
import { TimeInputProps } from "./types";
import useTimeInput from "./hooks/useTimeInput";
import { Separator } from "./components/Separator";
import Input from "./components/Input";

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
  inputsContainerClassName,
  colonClassName,
  iconClockClassName,
  amPmButtonClassName,
  controlsClassName,
  inputClassName,
  dividerClassName,
  ariaLabel = "time",
  iconAriaLabel = "clock",
  hoursAriaLabel = "hours",
  minutesAriaLabel = "minutes",
  secondsAriaLabel = "seconds",
  amPmAriaLabel = "am-pm",
  hasSeconds = false,
  hour12 = false,
  disableFocusOnIcon = false,
  hideIcon = false,
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
  stepHours = 1,
  stepMinutes = 1,
  stepSeconds = 1,
  readOnly = false,
  readOnlyHours = false,
  readOnlyMinutes = false,
  readOnlySeconds = false,
  hoursId,
  minutesId,
  secondsId,
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
  } = useTimeInput({
    value,
    onChange,
    hasSeconds,
    hour12,
    maxTime,
    minTime,
    format,
    stepHours,
    stepMinutes,
    stepSeconds,
  });

  const hoursClassName = cn(
    styles.ti__timerContainer,
    styles.ti__hourContainer,
    hoursPlaceholder === "--" ? styles.hyphen : styles.hh,
    hours === "" ? styles.noValue : "",
    hour12 && +hours < 10 ? styles.noZero : "",
  );

  const minutesClassName = cn(
    styles.ti__timerContainer,
    styles.ti__minutesContainer,
    hasSeconds ? styles.withSeconds : "",
    minutesPlaceholder === "--" ? styles.hyphen : styles.mm,
    minutes === "" ? styles.noValue : "",
    +minutes > 9 ? styles.noZero : "",
  );

  const secondsClassName = cn(
    styles.ti__timerContainer,
    styles.ti__secondsContainer,
  );

  const hasSecondsInFormat = format?.includes("ss") || hasSeconds;
  const hourFormat = format?.includes("hh");

  const disabledHoursClassName = cn(
    styles.ti__disabled,
    disabled || disabledHours || disabledMinutes ? styles.ti__disabled : "",
  );
  const disabledMinutesClassName = cn(
    styles.ti__disabled,
    disabled || disabledMinutes || disabledSeconds ? styles.ti__disabled : "",
  );

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
        stepHours,
        stepMinutes,
        stepSeconds,
        readOnly,
        readOnlyHours,
        readOnlyMinutes,
        readOnlySeconds,
      }}
    >
      <div
        className={cn(
          `${styles.ti__mainContainer} ${disabled ? styles.ti__disabled : ""}`,
          className,
        )}
        data-testid={dataTestId}
        role="textbox"
        tabIndex={0}
        id={id}
      >
        {!hideIcon && (
          <div
            className={cn(styles.ti__iconContainer, iconClockClassName)}
            role="button"
            onClick={() => {
              dispatch({ type: "INPUT_TYPE", payload: "hours" });
              !disableFocusOnIcon && setFocusOnInput(hoursRef);
            }}
            aria-label={iconAriaLabel}
          >
            <Clock />
          </div>
        )}

        <div
          className={cn(styles.ti__inputsContainer, inputsContainerClassName)}
        >
          <div
            className={cn(hoursClassName)}
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

            <Input
              type="hours"
              value={hours}
              readOnly={readOnly}
              readOnlyHours={readOnlyHours}
              setZeroOnBlur={setZeroOnBlur}
              stepHours={handleStepTime(stepHours, true, hour12)}
              hour12={hour12}
              name={`hours-${name}`}
              hoursAriaLabel={hoursAriaLabel}
              hoursPlaceholder={hoursPlaceholder}
              inputClassName={inputClassName || ""}
              disabledHours={disabledHours}
              disabled={disabled}
              required={required}
              format={format}
              hoursInputTitle={hoursInputTitle}
              className={cn(
                disabledHours ? styles.ti__disabled : "",
                inputClassName,
              )}
              updateTime={updateTime}
              dispatch={dispatch}
              onChange={handleHours}
              ref={hoursRef}
              hasSeconds={hasSeconds}
              id={hoursId}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          </div>

          <Separator
            className={cn(
              dividerClassName,
              disabledHoursClassName,
              colonClassName,
            )}
          />

          <div
            className={cn(minutesClassName)}
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "INPUT_TYPE", payload: "minutes" });
              setFocusOnInput(minutesRef);
            }}
          >
            <Input
              type="minutes"
              value={minutes}
              setZeroOnBlur={setZeroOnBlur}
              stepMinutes={stepMinutes}
              hour12={hour12}
              name={`minutes-${name}`}
              minutesAriaLabel={minutesAriaLabel}
              minutesPlaceholder={minutesPlaceholder}
              readOnly={readOnly || readOnlyMinutes}
              inputClassName={inputClassName || ""}
              disabledMinutes={disabledMinutes}
              disabled={disabled}
              required={required}
              format={format}
              minutesInputTitle={minutesInputTitle}
              className={cn(
                disabledMinutes ? styles.ti__disabled : "",
                inputClassName,
              )}
              updateTime={updateTime}
              dispatch={dispatch}
              onChange={handleMinutes}
              ref={minutesRef}
              hasSeconds={hasSeconds}
              id={minutesId}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          </div>

          {hasSecondsInFormat ? (
            <>
              <Separator
                className={cn(
                  dividerClassName,
                  disabledMinutesClassName,
                  colonClassName,
                )}
              />

              <div
                className={cn(secondsClassName)}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "INPUT_TYPE", payload: "seconds" });
                  setFocusOnInput(secondsRef);
                }}
              >
                <Input
                  type="seconds"
                  value={seconds}
                  setZeroOnBlur={setZeroOnBlur}
                  stepSeconds={stepSeconds}
                  hour12={hour12}
                  name={`seconds-${name}`}
                  ref={secondsRef}
                  onChange={handleSeconds}
                  secondsAriaLabel={secondsAriaLabel}
                  secondsPlaceholder={secondsPlaceholder}
                  readOnly={readOnly || readOnlySeconds}
                  inputClassName={inputClassName || ""}
                  disabledSeconds={disabledSeconds}
                  disabled={disabled}
                  required={required}
                  format={format}
                  secondsInputTitle={secondsInputTitle}
                  id={secondsId}
                  seconds={seconds}
                  minutes={minutes}
                  hours={hours}
                  dispatch={dispatch}
                  updateTime={updateTime}
                  className={cn(
                    disabledSeconds ? styles.ti__disabled : "",
                    inputClassName,
                  )}
                  hasSeconds={hasSeconds}
                />
              </div>
            </>
          ) : null}

          {hour12 && (
            <div
              className={cn(
                styles.ti__toggleAmPmContainer,
                amPmButtonClassName,
              )}
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
