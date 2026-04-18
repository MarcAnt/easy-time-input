import { ControlsProvider } from "./ControlsContext";
import { ToggleMeridiemProvider } from "./ToggleMeridiemContext";
import { ControlProps, ToggleMeridiemProps, TimeInputProps } from "../types";

type TimeInputWrapperProps = {
  props: ControlProps &
    ToggleMeridiemProps &
    Pick<
      TimeInputProps,
      "disabledHours" | "disabledMinutes" | "disabledSeconds"
    >;
};

const TimeInputContextWrapper = ({
  props,
  children,
}: React.PropsWithChildren<TimeInputWrapperProps>) => {
  const {
    inputType,
    isAm,
    disabled,
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    controlsClassName,
    format,
    hour12,
    amPmAriaLabel,
    updateTime,
    hours,
    minutes,
    seconds,
    state,
    dispatch,
    stepHours,
    stepMinutes,
    stepSeconds,
    readOnly,
    readOnlyHours,
    readOnlyMinutes,
    readOnlySeconds,
  } = props;

  return (
    <ControlsProvider
      props={{
        inputType,
        disabled:
          disabled || disabledHours || disabledMinutes || disabledSeconds,
        updateTime,
        hours,
        minutes,
        seconds,
        controlsClassName,
        format,
        hour12,
        isAm,
        state,
        dispatch,
        stepHours,
        stepMinutes,
        stepSeconds,
        readOnly,
        readOnlyHours,
        readOnlyMinutes,
        readOnlySeconds,
      }}
    >
      <ToggleMeridiemProvider
        props={{
          isAm,
          amPmAriaLabel,
          disabled:
            disabled || disabledHours || disabledMinutes || disabledSeconds,
          state,
          dispatch,
        }}
      >
        {children}
      </ToggleMeridiemProvider>
    </ControlsProvider>
  );
};

export default TimeInputContextWrapper;
