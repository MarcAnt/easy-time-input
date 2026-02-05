import { useCallback, useEffect, useReducer, useRef } from "react";
import { UseTimeInputProps } from "../Types/types";
import {
  formatHoursValue,
  formatMinutesValue,
  formatSecondsValue,
} from "../Utils";
import { handleMaxAndMinTime } from "../Controls/Helpers";
import { timeInputReducer } from "../Reducers/timeInputReducer";

const UseTimeInput = ({
  value,
  onChange,
  hasSeconds,
  hour12,
  maxTime,
  minTime,
  format,
  hourStep,
  minuteStep,
  secondStep,
}: UseTimeInputProps) => {
  const [state, dispatch] = useReducer(timeInputReducer, {
    isAm: false,
    inputType: "hours",
    hours: formatHoursValue(value, hour12, format),
    minutes: formatMinutesValue(value),
    seconds: formatSecondsValue(value),
    hour12,
    format,
  });

  const { isAm, inputType, hours, minutes, seconds } = state;

  const hoursRef = useRef<HTMLInputElement | null>(null);
  const minutesRef = useRef<HTMLInputElement | null>(null);
  const secondsRef = useRef<HTMLInputElement | null>(null);
  const fullCurrentTime = `${hours}:${minutes}:${seconds}`;
  const fullTimeValues = `${formatHoursValue(
    value,
    hour12,
    format,
  )}:${formatMinutesValue(value)}:${formatSecondsValue(value)}`;

  useEffect(() => {
    if (!value) return;

    if (typeof value === "string") {
      const hoursValue = value?.split(":")[0];
      if (+hoursValue < 12 && hour12) {
        dispatch({ type: "TOGGLE_AM", payload: true });
      }
    }
  }, []);

  useEffect(() => {
    if (!value && onChange) {
      onChange(fullCurrentTime);
    }
  }, []);

  useEffect(() => {
    if (onChange) {
      const hoursValue = fullTimeValues?.split(":")[0];
      const minutesValue = fullTimeValues?.split(":")[1];
      const secondsValue = fullTimeValues?.split(":")[2];
      let newHoursValue = hoursValue;
      if (!isAm && hour12 && +hoursValue < 12) {
        newHoursValue = `${+hoursValue + 12}`;
      }

      onChange(`${newHoursValue}:${minutesValue}:${secondsValue}`);
    }
  }, [isAm]);

  if (value && onChange) {
    if (fullTimeValues !== fullCurrentTime) {
      dispatch({
        type: "SET_HOURS",
        payload: formatHoursValue(value, hour12, format),
      });
      dispatch({
        type: "SET_MINUTES",
        payload: formatMinutesValue(value),
      });
      dispatch({
        type: "SET_SECONDS",
        payload: formatSecondsValue(value),
      });
    }
  }

  const updateTime = useCallback(
    (hoursVal: string, minutesVal: string, secondsVal: string) => {
      let newTime: Date | string;

      if ((onChange && value) || (value === "" && hoursVal && onChange)) {
        newTime = hasSeconds
          ? `${hoursVal}:${minutesVal}:${secondsVal}`
          : `${hoursVal}:${minutesVal}`;

        if (maxTime || minTime) {
          const isValidTime = handleMaxAndMinTime(newTime, maxTime, minTime);
          if (!isValidTime) return;
        }

        onChange(newTime);
        return;
      } else {
        let newTime: string;
        newTime = hasSeconds
          ? `${hoursVal}:${minutesVal}:${secondsVal}`
          : `${hoursVal}:${minutesVal}`;

        if (maxTime || minTime) {
          const isValidTime = handleMaxAndMinTime(newTime, maxTime, minTime);
          if (!isValidTime) return;
        }

        dispatch({ type: "SET_HOURS", payload: hoursVal });
        dispatch({ type: "SET_MINUTES", payload: minutesVal });
        dispatch({ type: "SET_SECONDS", payload: secondsVal });
        return;
      }
    },
    [onChange, value, hasSeconds],
  );

  const handleHours = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;

    if (currentTarget.value === "") {
      updateTime(currentTarget.value, minutes, seconds);
      return;
    }

    if (
      currentTarget.value &&
      currentTarget.valueAsNumber < 24 &&
      currentTarget.valueAsNumber >= 0
    ) {
      let lastNumbers = currentTarget.value.slice(-2);
      if (hourStep) {
        lastNumbers = `${+lastNumbers + hourStep}`;
      }

      if (onChange) {
        if (hour12) {
          if (!isAm) {
            updateTime(
              +lastNumbers % 12 === 0 ? "0" : `${+lastNumbers + 12}`,
              minutes,
              seconds,
            );
            return;
          } else {
            updateTime(
              +lastNumbers % 12 === 0 ? "0" : `${+lastNumbers}`,
              minutes,
              seconds,
            );
            return;
          }
        } else {
          updateTime(
            lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers,
            minutes,
            seconds,
          );
          return;
        }
      } else {
        if (maxTime || minTime) {
          const isValidTime = handleMaxAndMinTime(
            lastNumbers,
            maxTime,
            minTime,
          );

          if (!isValidTime) return;
        }

        if (format && format.includes("hh")) {
          const newHours =
            +lastNumbers > 11
              ? "12"
              : `${+lastNumbers < 1 ? "1" : +lastNumbers % 12}`;

          dispatch({ type: "SET_HOURS", payload: newHours });
        } else {
          const newHours =
            lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers;

          dispatch({ type: "SET_HOURS", payload: newHours });
        }
      }
    }
  };

  const handleMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;

    if (currentTarget.value === "") {
      updateTime(hours, currentTarget.value, seconds);
      return;
    }

    if (
      currentTarget.value &&
      currentTarget.valueAsNumber < 60 &&
      currentTarget.valueAsNumber >= 0
    ) {
      const lastNumbers = currentTarget.value.slice(-2);

      if (onChange) {
        updateTime(
          hours,
          lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers,
          seconds,
        );
      } else {
        const newMinutes =
          lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers;
        dispatch({ type: "SET_MINUTES", payload: newMinutes });
      }
    }
  };

  const handleSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;

    if (currentTarget.value === "") {
      updateTime(hours, minutes, currentTarget.value);
      return;
    }

    if (
      currentTarget.value &&
      currentTarget.valueAsNumber < 60 &&
      currentTarget.valueAsNumber >= 0
    ) {
      const lastNumbers = currentTarget.value.slice(-2);

      if (onChange) {
        updateTime(
          hours,
          minutes,
          lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers,
        );
      } else {
        const newSeconds =
          lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers;
        dispatch({ type: "SET_SECONDS", payload: newSeconds });
      }
    }
  };

  return {
    hoursRef,
    minutesRef,
    secondsRef,
    handleHours,
    handleMinutes,
    handleSeconds,
    inputType,
    updateTime,
    hours,
    minutes,
    seconds,
    isAm,
    state,
    dispatch,
  };
};

export default UseTimeInput;
