export type TimeInputProps = {
  /**
   * Event function to change the time
   * @type {(value: Date | string) => void}
   */

  onChange?: (value: Date | string) => void;

  /**
   * The value used to control or display the time in the input.
   * @type {Date | string}
   */
  value?: Date | string | undefined | null;

  /**
   * Define the name to describe the time input in forms.
   * @type {string}
   */
  name?: string;

  /**
   * Whether the time input is disabled or not.
   * @type {boolean}
   */
  disabled?: boolean;

  /**
   * Whether the hours input is disabled or not.
   * @type {boolean}
   */
  disabledHours?: boolean;

  /**
   * Whether the minutes input is disabled or not.
   * @type {boolean}
   */
  disabledMinutes?: boolean;

  /**
   * Whether the seconds input is disabled or not.
   * @type {boolean}
   */
  disabledSeconds?: boolean;

  /**
   * Whether the time input is required or not.
   * @type {boolean}
   */
  required?: boolean;

  /**
   * Define the className to change the styles used in the time input
   * @type {string}
   */
  className?: string;

  /**
   * Define the className to change the styles used in the icon
   * @type {string}
   */
  iconClockClassName?: string;

  /**
   * Define the className to change the styles used in the AM/PM button
   * @type {string}
   */
  amPmButtonClassName?: string;

  /**
   * Define the className to change the styles used in the controls
   * @type {string}
   */
  controlsClassName?: string;

  /**
   * Define the className to change the styles used in the input
   * @type {string}
   */
  inputClassName?: string;

  /**
   * Define the className to change the styles used in the divider
   * @type {string}
   */
  dividerClassName?: string;

  /**
   * Define the data-testid used in the time input
   * @type {string}
   */

  dataTestId?: string;

  /**
   * Define the placeholder used in the hours input
   * @type {"--" | "HH" | "hh"}
   */

  hoursPlaceholder?: "--" | "HH" | "hh";

  /**
   * Define the placeholder used in the minutes input
   * @type {"--" | "mm"}
   */

  minutesPlaceholder?: "--" | "mm";
  /**
   * Define the placeholder used in the seconds input
   * @type {"--" | "ss"}
   */
  secondsPlaceholder?: "--" | "ss";

  /**
   * Define the aria-label in icon button
   * @type {string}
   */

  iconAriaLabel?: string;

  /**
   * Define the aria-label in seconds input controller
   * @type {string}
   */
  secondsAriaLabel?: string;

  /**
   * Define the aria-label in minute input controller
   * @type {string}
   */
  minutesAriaLabel?: string;

  /**
   * Define the aria-label in hour input controller
   * @type {string}
   */

  hoursAriaLabel?: string;

  /**
   * Define the aria-label in AM/PM controller
   * @type {string}
   */
  amPmAriaLabel?: string;

  /**
   * Define the aria-label in the time input. By default is "time"
   * @type {string}
   */
  ariaLabel?: string;

  /**
   * Define the title for the hour input. By default is "Hours input"
   * @type {string}
   */

  hoursInputTitle?: string;

  /**
   * Define the title for the minutes input. By default is "Hours input"
   * @type {string}
   */

  minutesInputTitle?: string;

  /**
   * Define the title for the seconds input. By default is "Hours input"
   * @type {string}
   */

  secondsInputTitle?: string;

  /**
   * Whether the time input has to display seconds. Bby default is false
   * @type {boolean}
   */
  hasSeconds?: boolean;

  /**
   * Whether the time input has AM / PM controllers
   * @type {boolean}
   */

  showMeridiemControl?: boolean;

  /**
   * Id to identify the time input
   * @type {string | HTMLInputElement["id"]}
   */

  id?: HTMLInputElement["id"];

  /**
   * Define the format used in the time input. By default is false
   * @type {boolean}
   */

  hour12?: boolean;

  /**
   * Whether the time input has to display icon. By default is true, but it is false, the input will not focus on click
   * @type {boolean}
   */

  disableFocusOnIcon?: boolean;

  /**
   * Define the format used in the time input. By default is "HH:mm:ss"
   * @type {"HH:mm:ss" | "HH:mm" | "hh:mm:ss" | "hh:mm"}
   */

  format?: "HH:mm:ss" | "HH:mm" | "hh:mm:ss" | "hh:mm";

  /**
   * Define the maximum time used in the time input. By default is "23:59:59"
   * @type {string | Date}
   */

  maxTime?: string | Date;

  /**
   * Define the minimum time used in the time input. By default is "00:00:00"
   * @type {string | Date}
   */

  minTime?: string | Date;

  /**
   * Whether the time input has to display controls. By default is false
   * @type {boolean}
   */
  hideControls?: boolean;

  /**
   * Whether the time input has to set the time to 00:00:00 when the input is blurred. By default is false
   * @type {boolean}
   */
  setZeroOnBlur?: boolean;
};

export type ToggleMeridiemContextType = {
  handleToggleAmPm: () => void;
  amPmAriaLabel: string;
  isAm: boolean;
  disabled?: boolean;
};

export type ToggleMeridiemProps = {
  amPmAriaLabel: string;
  isAm: boolean;
  disabled?: boolean;
  state: TimeInputState;
  dispatch: React.Dispatch<TimeInputActions>;
};

export type ControlsContextType = {
  controlsClassName?: string;
  disabled?: boolean;
  handleAddTime: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleRemoveTime: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  inputType: "hours" | "minutes" | "seconds";
};

export type UseTimeInputProps = {
  value?: TimeInputProps["value"];
  onChange?: TimeInputProps["onChange"];
  hasSeconds: TimeInputProps["hasSeconds"];
  hour12: TimeInputProps["hour12"];
  maxTime?: TimeInputProps["maxTime"];
  minTime?: TimeInputProps["minTime"];
  format?: TimeInputProps["format"];
};

export type TimeInputState = {
  isAm: boolean;
  inputType: "hours" | "minutes" | "seconds";
  hours: string;
  minutes: string;
  seconds: string;
  hour12: boolean | undefined;
  format: TimeInputProps["format"] | undefined;
};

type SetHours = { type: "SET_HOURS"; payload: string };
type SetMinutes = { type: "SET_MINUTES"; payload: string };
type SetSeconds = { type: "SET_SECONDS"; payload: string };
type ToggleAm = { type: "TOGGLE_AM"; payload: boolean };
type InputType = {
  type: "INPUT_TYPE";
  payload: "hours" | "minutes" | "seconds";
};
export type TimeInputActions =
  | SetHours
  | SetMinutes
  | SetSeconds
  | ToggleAm
  | InputType;

export type ControlProps = {
  inputType: "hours" | "minutes" | "seconds";
  disabled?: boolean;
  updateTime: (hour: string, minute: string, seconds: string) => void;
  hours: string;
  minutes: string;
  seconds: string;
  // setHours: (value: React.SetStateAction<string>) => void;
  // setMinutes: (value: React.SetStateAction<string>) => void;
  // setSeconds: (value: React.SetStateAction<string>) => void;
  hour12?: boolean;
  isAm?: boolean;
  maxTime?: string | Date;
  minTime?: string | Date;
  controlsClassName?: string;
  format?: "hh" | "HH";
  state: TimeInputState;
  dispatch: React.Dispatch<TimeInputActions>;
};
