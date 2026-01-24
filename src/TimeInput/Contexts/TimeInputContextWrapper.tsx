import { ControlsProvider } from "../Controls/ControlsContext";
import { ToggleMeridiemProvider } from "../Controls/ToggleMeridiemContext";
import {
  ControlProps,
  TimeInputProps,
  ToggleMeridiemProps,
} from "../Types/types";

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
    setSeconds,
    setHours,
    setMinutes,
    setIsAm,
    state,
    dispatch,
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
        setSeconds,
        setHours,
        setMinutes,
        controlsClassName,
        format,
        hour12,
        isAm,
        state,
        dispatch,
      }}
    >
      <ToggleMeridiemProvider
        props={{
          isAm,
          setIsAm,
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
