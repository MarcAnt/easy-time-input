export const addHours = (prev: string) => {
  const newHour = prev === "" ? "00" : parseInt(prev) + 1;
  if (parseInt(newHour.toString()) < 24)
    return parseInt(newHour.toString()) < 10
      ? `0${newHour}`
      : newHour.toString();
  return prev;
};

export const removeHours = (prev: string) => {
  const newHour = prev === "" ? "00" : parseInt(prev) - 1;
  if (parseInt(newHour.toString()) >= 0)
    return parseInt(newHour.toString()) < 10
      ? `0${newHour}`
      : newHour.toString();

  return prev;
};

export const addMinutes = (prev: string) => {
  const newMinutes = prev === "" ? "00" : parseInt(prev) + 1;
  if (parseInt(newMinutes.toString()) <= 59) {
    return parseInt(newMinutes.toString()) < 10
      ? `0${newMinutes}`
      : newMinutes.toString();
  }
  return prev;
};

export const removeMinutes = (prev: string) => {
  const newMinutes = prev === "" ? "00" : parseInt(prev) - 1;
  if (parseInt(newMinutes.toString()) >= 0)
    return parseInt(newMinutes.toString()) < 10
      ? `0${newMinutes}`
      : newMinutes.toString();

  return prev;
};

export const addSeconds = (prev: string) => {
  const newSeconds = prev === "" ? "00" : parseInt(prev) + 1;
  if (parseInt(newSeconds.toString()) <= 59) {
    return parseInt(newSeconds.toString()) < 10
      ? `0${newSeconds}`
      : newSeconds.toString();
  }
  return prev;
};

export const removeSeconds = (prev: string) => {
  const newSeconds = prev === "" ? "00" : parseInt(prev) - 1;

  if (parseInt(newSeconds.toString()) >= 0)
    return parseInt(newSeconds.toString()) < 10
      ? `0${newSeconds}`
      : newSeconds.toString();

  return prev;
};

export const setFocusOnInput = (
  ref: React.RefObject<HTMLInputElement | null>
) => {
  ref.current?.select();
  ref.current?.focus();
};

export const handleMaxAndMinTime = (
  newTime: string,
  maxTime?: string | Date,
  minTime?: string | Date
) => {
  let stringMaxTime, stringMinTime;
  let isValidTime = true;

  if (maxTime && maxTime instanceof Date) {
    stringMaxTime = new Date(maxTime).toLocaleTimeString("en", {
      hour12: false,
    });
  } else {
    stringMaxTime = maxTime;
  }

  if (minTime && minTime instanceof Date) {
    stringMinTime = new Date(minTime).toLocaleTimeString("en", {
      hour12: false,
    });
  } else {
    stringMinTime = minTime;
  }

  if (stringMaxTime) {
    const maxTimeParts = stringMaxTime.split(":");
    let newTimeParts = newTime.split(":");

    if (newTimeParts.length === 1) {
      newTimeParts = [newTimeParts[0], "00"];
    }

    const maxTimeFull = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      parseInt(maxTimeParts[0]),
      parseInt(maxTimeParts[1])
    );
    const newTimeFull = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      parseInt(newTimeParts[0]),
      parseInt(newTimeParts[1])
    );

    if (newTimeFull.getTime() > maxTimeFull.getTime()) {
      isValidTime = false;
    }
  }

  if (stringMinTime) {
    const minTimeParts = stringMinTime.split(":");
    let newTimeParts = newTime.split(":");

    if (newTimeParts.length === 1) {
      newTimeParts = [newTimeParts[0], "00"];
    }

    const minTimeFull = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      parseInt(minTimeParts[0]),
      parseInt(minTimeParts[1])
    );
    const newTimeFull = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      parseInt(newTimeParts[0]),
      parseInt(newTimeParts[1])
    );

    if (newTimeFull.getTime() < minTimeFull.getTime()) {
      isValidTime = false;
    }
  }

  return isValidTime;
};
