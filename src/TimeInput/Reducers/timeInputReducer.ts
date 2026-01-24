import { TimeInputActions, TimeInputState } from "../Types/types";
import {
  formatHoursValue,
  formatMinutesValue,
  formatSecondsValue,
} from "../Utils";

export const timeInputReducer = (
  state: TimeInputState,
  action: TimeInputActions,
) => {
  const hour12 = state.hour12;
  const format = state.format;

  switch (action.type) {
    case "setHours":
      return {
        ...state,
        hours: formatHoursValue(action.payload, hour12, format, state.isAm),
      };
    case "setMinutes":
      return { ...state, minutes: formatMinutesValue(action.payload) };
    case "setSeconds":
      return { ...state, seconds: formatSecondsValue(action.payload) };
    case "toggleAm":
      return { ...state, isAm: action.payload };
    case "inputType":
      return { ...state, inputType: action.payload };
    default:
      return state;
  }
};
