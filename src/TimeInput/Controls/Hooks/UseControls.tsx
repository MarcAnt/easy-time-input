import { ControlProps } from "../../Types/types";
import { handleMaxAndMinTime, handleStepTime } from "../Helpers";

const UseControls = (props: ControlProps) => {
  const {
    inputType,
    updateTime,
    hours,
    minutes,
    seconds,
    hour12,
    isAm,
    maxTime,
    minTime,
    format,
    stepHours,
    stepMinutes,
    stepSeconds,
    readOnly,
    readOnlyHours,
    readOnlyMinutes,
    readOnlySeconds,
  } = props;

  let intStepHours = handleStepTime(stepHours, true, hour12);
  let intStepMinutes = handleStepTime(stepMinutes, false, hour12);
  let intStepSeconds = handleStepTime(stepSeconds, false, hour12);

  const handleAddTime = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (readOnly) return;

    if (inputType === "hours") {
      if (readOnlyHours) return;
      if (maxTime || minTime) {
        const isValidTime = handleMaxAndMinTime(
          `${+hours + 1}`,
          maxTime,
          minTime,
        );
        if (!isValidTime) return;
      }

      const newHours = stepHours ? +hours + intStepHours : +hours + 1;
      let transformed: string;

      if (hour12) {
        if (!isAm) {
          transformed = `${newHours > 11 ? "00" : newHours + 12}`;
        } else {
          transformed = `${newHours > 11 ? "12" : newHours}`;
        }
      } else {
        if (format && format.includes("hh")) {
          transformed = `${newHours > 11 ? "12" : +newHours % 12}`;
        } else {
          transformed = `${
            newHours < 0
              ? "00"
              : newHours < 10
                ? `0${newHours}`
                : newHours < 24
                  ? newHours
                  : stepHours
                    ? newHours - stepHours
                    : 23
          }`;
        }
      }

      updateTime(transformed, minutes, seconds);
    }

    if (inputType === "minutes") {
      if (readOnlyMinutes) return;
      const newMinutes = stepMinutes ? +minutes + intStepMinutes : +minutes + 1;
      const transformed = `${
        newMinutes < 10
          ? `0${newMinutes}`
          : newMinutes < 60
            ? newMinutes
            : stepMinutes
              ? newMinutes - stepMinutes
              : 59
      }`;
      updateTime(hours, transformed, seconds);
    }

    if (inputType === "seconds") {
      if (readOnlySeconds) return;
      const newSeconds = stepSeconds ? +seconds + intStepSeconds : +seconds + 1;
      const transformed = `${
        newSeconds < 10
          ? `0${newSeconds}`
          : newSeconds < 60
            ? newSeconds
            : stepSeconds
              ? newSeconds - stepSeconds
              : 59
      }`;
      updateTime(hours, minutes, transformed);
    }
  };

  const handleRemoveTime = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (readOnly) return;

    if (inputType === "hours") {
      if (readOnlyHours) return;

      if (maxTime || minTime) {
        const isValidTime = handleMaxAndMinTime(
          `${+hours - 1}`,
          maxTime,
          minTime,
        );
        if (!isValidTime) return;
      }

      // setHours((prev) => removeHours(prev));

      const newHours = stepHours ? +hours - stepHours : +hours - 1;
      let transformed: string;

      if (hour12) {
        if (!isAm) {
          transformed = `${newHours < 1 ? "13" : newHours + 12}`;
        } else {
          transformed = `${newHours < 1 ? "1" : newHours}`;
        }
      } else {
        if (format && format.includes("hh")) {
          transformed = `${newHours < 1 ? "1" : newHours}`;
        } else {
          transformed = `${
            newHours < 0 ? "00" : newHours < 10 ? `0${newHours}` : newHours
          }`;
        }
      }

      updateTime(transformed, minutes, seconds);
    }

    if (inputType === "minutes") {
      if (readOnlyMinutes) return;

      const newMinutes = stepMinutes ? +minutes - stepMinutes : +minutes - 1;
      const transformed = `${
        newMinutes < 0 ? "00" : newMinutes < 10 ? `0${newMinutes}` : newMinutes
      }`;
      updateTime(hours, transformed, seconds);
    }

    if (inputType === "seconds") {
      if (readOnlySeconds) return;

      const newSeconds = stepSeconds ? +seconds - stepSeconds : +seconds - 1;
      const transformed = `${
        newSeconds < 0 ? "00" : newSeconds < 10 ? `0${newSeconds}` : newSeconds
      }`;
      updateTime(hours, minutes, transformed);
    }
  };

  return { handleAddTime, handleRemoveTime };
};

export default UseControls;
