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
  ref: React.RefObject<HTMLInputElement | null>,
) => {
  ref.current?.select();
  ref.current?.focus();
};

export const handleMaxAndMinTime = (
  newTime: string,
  maxTime?: string | Date,
  minTime?: string | Date,
  hasSeconds?: boolean,
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

    if (maxTimeParts[2] === undefined) {
      maxTimeParts.push("00");
    }

    const maxTimeFull = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      parseInt(maxTimeParts[0]),
      parseInt(maxTimeParts[1]),
      hasSeconds ? parseInt(maxTimeParts[2]) : 0,
    );

    const newTimeFull = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      parseInt(newTimeParts[0]),
      parseInt(newTimeParts[1]),
      hasSeconds ? parseInt(newTimeParts[2]) : 0,
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

    if (minTimeParts[2] === undefined) {
      minTimeParts.push("00");
    }

    const minTimeFull = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      parseInt(minTimeParts[0]),
      parseInt(minTimeParts[1]),
      hasSeconds ? parseInt(minTimeParts[2]) : 0,
    );

    const newTimeFull = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      parseInt(newTimeParts[0]),
      parseInt(newTimeParts[1]),
      hasSeconds ? parseInt(newTimeParts[2]) : 0,
    );

    if (newTimeFull.getTime() < minTimeFull.getTime()) {
      isValidTime = false;
    }
  }

  return isValidTime;
};

export const handleStepTime = (
  stepTime: number | undefined,
  isHour: boolean,
  hour12: boolean | undefined,
) => {
  if (!stepTime || stepTime < 0) return 1;

  if (isHour) {
    if (stepTime > 23) return 1;
    if (hour12 && stepTime > 11) return 1;
  } else {
    if (stepTime > 59) return 1;
  }

  return stepTime ? Math.abs(Math.trunc(stepTime)) : 1;
};
