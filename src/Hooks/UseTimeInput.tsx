import { useCallback, useEffect, useReducer, useRef } from "react";
import {
  formatHoursValue,
  formatMinutesValue,
  formatSecondsValue,
} from "../utils";
import { focusNextInput, handleMaxAndMinTime } from "../helpers";
import { timeInputReducer } from "../reducers/timeInputReducer";
import { UseTimeInputProps } from "../types";

let didInit = false,
  didInit2 = false;

const useTimeInput = ({
  value,
  onChange,
  hasSeconds,
  hour12,
  maxTime,
  minTime,
  format,
  onChangedHours,
  onChangedMinutes,
  onChangedSeconds,
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
    if (!didInit2) {
      if (!value) return;
      //Detect if the value is in 12 hour format
      if (typeof value === "string") {
        const hoursValue = value?.split(":")[0];
        if (+hoursValue < 12 && hour12) {
          dispatch({ type: "TOGGLE_AM", payload: true });
        }
      }
      didInit2 = true;
    }
  }, []);

  useEffect(() => {
    //If it is not value, set the value to the current time

    if (!didInit) {
      if (!value && onChange) {
        onChange(fullCurrentTime);
      }
      didInit = true;
    }
  }, []);

  useEffect(() => {
    //Update the value when the isAm changes
    if (onChange) {
      const hoursValue = fullTimeValues?.split(":")[0];
      const minutesValue = fullTimeValues?.split(":")[1];
      const secondsValue = fullTimeValues?.split(":")[2];
      let newHoursValue = hoursValue;
      if (!isAm && hour12) {
        newHoursValue = `${+hoursValue % 12}`;
      }

      onChange(`${newHoursValue}:${minutesValue}:${secondsValue}`);
    }
  }, [isAm]);

  if (value && onChange) {
    //Permite que el valor se actualice cuando el valor del prop value cambia
    //En que se diferencia fullTimeValues y fullCurrentTime
    //fullTimeValues es el valor que se muestra en el input
    //fullCurrentTime es el valor actual

    //https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
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
        if (format && format.includes("ss")) {
          newTime = `${hoursVal}:${minutesVal}:${secondsVal}`;
        } else {
          newTime = hasSeconds
            ? `${hoursVal}:${minutesVal}:${secondsVal}`
            : `${hoursVal}:${minutesVal}`;
        }

        if (maxTime || minTime) {
          const isValidTime = handleMaxAndMinTime(
            newTime,
            maxTime,
            minTime,
            hasSeconds,
          );
          if (!isValidTime) return;
        }

        onChange(newTime);
        return;
      } else {
        let newTime: string;

        if (format && format.includes("ss")) {
          newTime = `${hoursVal}:${minutesVal}:${secondsVal}`;
        } else {
          newTime = hasSeconds
            ? `${hoursVal}:${minutesVal}:${secondsVal}`
            : `${hoursVal}:${minutesVal}`;
        }

        if (maxTime || minTime) {
          const isValidTime = handleMaxAndMinTime(
            newTime,
            maxTime,
            minTime,
            hasSeconds,
          );
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

  const handleHours = (
    e: React.ChangeEvent<HTMLInputElement>,
    key?: string,
  ) => {
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
      const lastNumbers = currentTarget.value.slice(-2);

      if (onChange) {
        if (hour12) {
          if (!isAm) {
            updateTime(
              +lastNumbers > 11
                ? "12"
                : `${+lastNumbers < 1 ? "1" : +lastNumbers % 12}`,
              minutes,
              seconds,
            );

            focusNextInput(lastNumbers, minutesRef, key, dispatch, "minutes");

            return;
          } else {
            updateTime(
              +lastNumbers > 11
                ? "12"
                : `${+lastNumbers < 1 ? "1" : +lastNumbers}`,
              minutes,
              seconds,
            );

            focusNextInput(lastNumbers, minutesRef, key, dispatch, "minutes");

            return;
          }
        } else {
          if (format && format.includes("hh")) {
            const newHours =
              +lastNumbers > 11
                ? "12"
                : `${+lastNumbers < 1 ? "1" : +lastNumbers % 12}`;

            updateTime(newHours, minutes, seconds);
            focusNextInput(lastNumbers, minutesRef, key, dispatch, "minutes");
            return;
          }

          updateTime(
            lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers,
            minutes,
            seconds,
          );

          focusNextInput(lastNumbers, minutesRef, key, dispatch, "minutes");
          return;
        }
      } else {
        if (maxTime || minTime) {
          const isValidTime = handleMaxAndMinTime(
            lastNumbers,
            maxTime,
            minTime,
            hasSeconds,
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

        focusNextInput(lastNumbers, minutesRef, key, dispatch, "minutes");
      }
    }
  };

  const handleMinutes = (
    e: React.ChangeEvent<HTMLInputElement>,
    key?: string,
  ) => {
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
          lastNumbers.length < 2 ? `0${+lastNumbers}` : `${+lastNumbers}`,
          seconds,
        );

        if (hasSeconds || format?.includes("ss")) {
          focusNextInput(lastNumbers, secondsRef, key, dispatch, "seconds");
        }
      } else {
        const newMinutes =
          lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers;
        dispatch({ type: "SET_MINUTES", payload: newMinutes });
        focusNextInput(lastNumbers, secondsRef, key, dispatch, "seconds");
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

  const handleOnChangeHours = (
    e: React.ChangeEvent<HTMLInputElement>,
    key?: string,
  ) => {
    if (onChangedHours) {
      const { currentTarget } = e;

      if (
        currentTarget.value &&
        currentTarget.valueAsNumber < 24 &&
        currentTarget.valueAsNumber >= 0
      ) {
        let hoursValue = currentTarget.value;

        if (hour12) {
          if (!isAm) {
            hoursValue =
              +hoursValue > 11
                ? "12"
                : `${+hoursValue < 1 ? "1" : +hoursValue % 12}`;
          } else {
            hoursValue =
              +hoursValue > 11
                ? "12"
                : `${+hoursValue < 1 ? "1" : +hoursValue}`;
          }
        } else {
          hoursValue =
            hoursValue.length < 2 ? `0${+hoursValue}` : `${+hoursValue}`;
        }

        if (format && format.includes("hh")) {
          hoursValue =
            +hoursValue > 11
              ? "12"
              : `${+hoursValue < 1 ? "1" : +hoursValue % 12}`;
        }

        handleHours(e, key);
        return onChangedHours(hoursValue);
      }
      handleHours(e, key);
      return onChangedHours(currentTarget.value);
    } else {
      return handleHours(e, key);
    }
  };

  const handleOnChangeMinutes = (
    e: React.ChangeEvent<HTMLInputElement>,
    key?: string,
  ) => {
    const { currentTarget } = e;
    if (onChangedMinutes) {
      if (
        currentTarget.value &&
        currentTarget.valueAsNumber < 60 &&
        currentTarget.valueAsNumber >= 0
      ) {
        const lastNumbers = currentTarget.value;
        const minutesValue =
          lastNumbers.length < 2 ? `0${+lastNumbers}` : `${+lastNumbers}`;

        handleMinutes(e, key);
        return onChangedMinutes(minutesValue);
      }
    } else {
      return handleMinutes(e, key);
    }
  };

  const handleOnChangeSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;

    if (onChangedSeconds) {
      if (
        currentTarget.value &&
        currentTarget.valueAsNumber < 60 &&
        currentTarget.valueAsNumber >= 0
      ) {
        const lastNumbers = currentTarget.value.slice(-2);
        const secondsValue =
          lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers;
        handleSeconds(e);
        return onChangedSeconds(secondsValue);
      }
    } else {
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
    handleOnChangeHours,
    handleOnChangeMinutes,
    handleOnChangeSeconds,
  };
};

export default useTimeInput;
