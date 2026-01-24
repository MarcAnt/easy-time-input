import { useCallback, useEffect, useReducer, useRef, useState } from "react";
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
}: UseTimeInputProps) => {
  const [isAm, setIsAm] = useState<boolean>(false);
  const [hours, setHours] = useState(
    formatHoursValue(value, hour12, format, isAm),
  );
  const [minutes, setMinutes] = useState(formatMinutesValue(value));
  const [seconds, setSeconds] = useState(formatSecondsValue(value));
  const [inputType, setInputType] = useState<"hours" | "minutes" | "seconds">(
    "hours",
  );

  const [state, dispatch] = useReducer(timeInputReducer, {
    isAm: false,
    inputType: "hours",
    hours: formatHoursValue(value, hour12, format, false),
    minutes: formatMinutesValue(value),
    seconds: formatSecondsValue(value),
    hour12,
    format,
  });

  const hoursRef = useRef<HTMLInputElement | null>(null);
  const minutesRef = useRef<HTMLInputElement | null>(null);
  const secondsRef = useRef<HTMLInputElement | null>(null);
  const fullCurrentTime = `${hours}:${minutes}:${seconds}`;
  const fullTimeValues = `${formatHoursValue(
    value,
    hour12,
    format,
    isAm,
  )}:${formatMinutesValue(value)}:${formatSecondsValue(value)}`;

  useEffect(() => {
    if (!value) return;

    if (typeof value === "string") {
      const hoursValue = value?.split(":")[0];
      if (+hoursValue < 12 && hour12) {
        setIsAm(true);
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
      setHours(formatHoursValue(value, hour12, format, isAm));
      setMinutes(formatMinutesValue(value));
      setSeconds(formatSecondsValue(value));
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

        setHours(hoursVal);
        setMinutes(minutesVal);
        setSeconds(secondsVal);
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
      const lastNumbers = currentTarget.value.slice(-2);

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

          // dispatch({ type: "setHours", payload: newHours });
          setHours(newHours);
        } else {
          const newHours =
            lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers;

          // dispatch({ type: "setHours", payload: newHours });
          setHours(newHours);
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
        // dispatch({ type: "setMinutes", payload: newMinutes });
        setMinutes(newMinutes);
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
        dispatch({ type: "setSeconds", payload: newSeconds });
        // setSeconds(newSeconds);
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
    setInputType,
    inputType,
    updateTime,
    hours,
    minutes,
    seconds,
    setHours,
    setMinutes,
    setSeconds,
    setIsAm,
    isAm,
    state,
    dispatch,
  };
};

export default UseTimeInput;
