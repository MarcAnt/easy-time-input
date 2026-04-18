import { TimeInputActions, TimeInputState } from "../types";
export const timeInputReducer = (
  state: TimeInputState,
  action: TimeInputActions,
) => {
  switch (action.type) {
    case "SET_HOURS":
      return {
        ...state,
        hours: action.payload,
      };
    case "SET_MINUTES":
      return { ...state, minutes: action.payload };
    case "SET_SECONDS":
      return { ...state, seconds: action.payload };
    case "TOGGLE_AM":
      return { ...state, isAm: action.payload };
    case "INPUT_TYPE":
      return { ...state, inputType: action.payload };
    default:
      return state;
  }
};
