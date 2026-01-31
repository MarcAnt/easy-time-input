import { type ClassValue, clsx } from "clsx";
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

// Utility function to combine classes
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
