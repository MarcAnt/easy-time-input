import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const handleFormat = (
  value: string,
  format?: "HH:mm:ss" | "HH:mm" | "hh:mm:ss" | "hh:mm",
) => {
  const [hours, minutes, seconds] = value.split(":");

  const hoursValue = +hours % 12 === 0 ? 12 : +hours % 12;

  switch (format) {
    case "HH:mm:ss":
      return `${hours}:${minutes}:${seconds}`;
    case "HH:mm":
      return `${hours}:${minutes}`;
    case "hh:mm:ss":
      return `${hoursValue}:${minutes}:${seconds}`;
    case "hh:mm":
      return `${hoursValue}:${minutes}`;
  }
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatHoursValue = (
  value: string | Date | undefined | null,
  hour12?: boolean,
  format?: "HH:mm:ss" | "HH:mm" | "hh:mm:ss" | "hh:mm",
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

    // return hours < 10 ? `0${hours}` : hours.toString();
    return String(hours).padStart(2, "0");
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

      valHour = `${+hourValue % 12 === 0 ? 12 : +hourValue % 12}`;
      return valHour;
    } else {
      return hour.length < 2 ? `0${hour}` : hour;
    }
  }

  if (typeof value === "string" && !value.includes(":")) {
    console.log({ value });

    if (value === undefined) {
      return hour12 ? "1" : "00";
    }

    if (isNaN(parseInt(value))) {
      return "";
    }

    if (parseInt(value) < 0) {
      return Math.abs(parseInt(value)) < 10
        ? `0${Math.abs(parseInt(value))}`
        : `${Math.abs(parseInt(value))}`;
    }

    if (hour12) {
      let valHour: string;

      valHour = `${+value % 12 === 0 ? 12 : +value % 12}`;
      return valHour;
    } else {
      return value.length < 2 ? `0${value}` : value;
    }
  }

  return hour12 ? "1" : "00";
};

export const formatMinutesValue = (value: string | Date | undefined | null) => {
  if (!value) return "00";
  if (!isNaN(new Date(value).getTime())) {
    const minutes = String(new Date(value).getMinutes()).padStart(2, "0");
    return minutes;
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
    const seconds = String(new Date(value).getSeconds()).padStart(2, "0");
    return seconds;
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
