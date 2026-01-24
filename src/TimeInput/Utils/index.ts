import { Dispatch, SetStateAction } from "react";
import { handleFormat } from "../Helpers";

export const formatHoursValue = (
  value: string | Date | undefined | null,
  hour12?: boolean,
  format?: "HH:mm:ss" | "HH:mm" | "hh:mm:ss" | "hh:mm",
  isAm?: boolean,
  setIsAm?: Dispatch<SetStateAction<boolean>>
) => {
  if (!value) return "00";

  if (!isNaN(new Date(value).getTime())) {
    const hours = new Date(value).getHours();

    if (hour12) {
      return hours.toString();
    }

    if (format && format.includes("hh")) {
      return hours < 1 ? "1" : `${hours % 12}`;
    }

    return hours < 10 ? `0${hours}` : hours.toString();
  }

  if (value instanceof Date) {
    const hours = new Date(value).getHours();
    return hours < 10 ? `0${hours}` : hours.toString();
  }

  if (typeof value === "string" && value.includes(":")) {
    const hour = value.split(":")[0];

    if (hour === undefined) {
      return hour12 ? "1" : "00";
    }

    if (isNaN(parseInt(hour))) {
      return "";
    }

    const formattedValue = handleFormat(value, format);
    let hourValue = hour;

    if (formattedValue) {
      hourValue = formattedValue.split(":")[0];
      return hourValue;
    }

    if (parseInt(hourValue) < 0) {
      return Math.abs(parseInt(hourValue)) < 10
        ? `0${Math.abs(parseInt(hourValue))}`
        : `${Math.abs(parseInt(hourValue))}`;
    }

    if (hour12) {
      let valHour: string;

      if (+hourValue < 12 && setIsAm) {
        setIsAm(true);
      }

      valHour = `${+hourValue % 12 === 0 ? 12 : +hourValue % 12}`;

      // if (!isAm) {
      //   valHour = `${+hour % 12 === 0 ? 12 : +hour % 12}`;
      // } else {
      //   valHour = `${+hour % 12 === 0 ? 12 : +hour}`;
      // }

      return valHour;
    } else {
      return hour.length < 2 ? `0${hour}` : hour;
    }
  }

  return hour12 ? "1" : "00";
};

export const formatMinutesValue = (value: string | Date | undefined | null) => {
  if (!value) return "00";
  if (!isNaN(new Date(value).getTime())) {
    const minutes = new Date(value).getMinutes();
    return minutes < 10 ? `0${minutes}` : minutes.toString();
  }

  if (value instanceof Date) {
    return value.getMinutes().toString();
  }

  if (typeof value === "string" && value.includes(":")) {
    const minutes = value.split(":")[1];

    if (minutes === undefined) {
      return "00";
    }

    if (isNaN(parseInt(minutes))) {
      return "";
    }

    const minutesValue =
      Math.abs(parseInt(minutes)) < 10
        ? `0${Math.abs(parseInt(minutes))}`
        : `${Math.abs(parseInt(minutes))}`;
    return minutesValue;
  }

  return "00";
};

export const formatSecondsValue = (value: string | Date | undefined | null) => {
  if (!value) return "00";
  if (!isNaN(new Date(value).getTime())) {
    const seconds = new Date(value).getSeconds();
    return seconds < 10 ? `0${seconds}` : seconds.toString();
  }

  if (value instanceof Date) {
    return value.getSeconds().toString();
  }

  if (typeof value === "string" && value.includes(":")) {
    const seconds = value.split(":")[2];

    if (seconds === undefined) {
      return "00";
    }

    if (isNaN(parseInt(seconds))) {
      return "";
    }
    const secondsValue =
      Math.abs(parseInt(seconds)) < 10
        ? `0${Math.abs(parseInt(seconds))}`
        : `${Math.abs(parseInt(seconds))}`;

    return secondsValue;
  }

  return "00";
};
