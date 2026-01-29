import { useState } from "react";
import TimeInput from "./TimeInput/TimeInput";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import * as z from "zod";
import "./time-input.css";
import Form from "./components/Form";

type FormValues = { timeInput: string };

const schema = z.object({
  timeInput: z.iso.time().min(1, "Required"),
});

const now = new Date();

// 24-hour time (HH:mm:ss) => "14:30:05"
const time24 = format(now, "HH:mm:ss");

// 12-hour time with AM/PM => "02:30 PM"
const time12 = format(now, "h:mm a");

// Time with milliseconds => "14:30:05.123"
const timeMs = format(now, "HH:mm:ss.SSS");

const anotherDate = format(new Date(2025, 11, 1, 18, 59, 59), "HH:mm:ss");

function App() {
  const {
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      timeInput: time24,
    },
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  // const [timeInput, setTimeInput] = useState<string | Date>("15:00:00");
  // const [timeInput, setTimeInput] = useState<string | Date>(new Date().toISOString());
  // const [timeInput, setTimeInput] = useState<string | Date>("-10:-30");
  const [timeInput, setTimeInput] = useState<string | Date | null | undefined>(
    // format(new Date(2025, 11, 1, 8, 59, 59), "hh:mm:ss a")
    // new Intl.DateTimeFormat("en-US", {
    //   hour12: true,
    //   hour: "numeric",
    //   minute: "numeric",
    // }).format(now)

    // time12
    // time24
    // "1:00"
    // "125:58"
    now,
    // time24
    // anotherDate
  );

  const handleTimeChange = (value: string | Date) => {
    setTimeInput(value);

    // if (value instanceof Date) {
    //   setTimeInput(value);
    //   return;
    // } else if (typeof value === "string") {
    //   const time = value.split(":");

    //   setTimeInput(new Date(2025, 11, 1, +time[0], +time[1]));
    //   return;
    // }
  };

  return (
    <div className="time-inputs-container">
      <div className="time-input-container">
        <p>Basic TimeInput (not controlled input)</p>
        <p>Initial time: 10:30:00</p>
        {/* <TimeInput
          hoursPlaceholder="HH"
          minutesPlaceholder="mm"
          secondsPlaceholder="ss"
          value={new Date()}
          format="hh:mm:ss"
        /> */}
      </div>

      <div className="time-input-container">
        <p>Controlled TimeInput</p>
        <p>
          Initial time:
          {/* {timeInput instanceof Date
            ? timeInput.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "numeric",
                minute: "numeric",
              })
            : timeInput} */}
          {timeInput?.toString()}
        </p>

        {/* <TimeInput
          value={timeInput}
          onChange={handleTimeChange}
          hoursPlaceholder="HH"
          minutesPlaceholder="mm"
          secondsPlaceholder="ss"
          hour12={false}
          disableFocusOnIconClick={true}
          hideControls={false}
          hasSeconds={false}
          iconClockClassName="icon"
          amPmButtonClassName="am-pm"
          controlsClassName="controls"
        /> */}
      </div>

      {/* <div className="time-input-container">
        <p>Controlled TimeInput with react-hook-form </p>
        <p>Initial time: {watch("timeInput")}</p>
        <button className="button-reset" onClick={() => reset()}>
          Reset
        </button>
        <Controller
          name={"timeInput"}
          control={control}
          render={({ field }) => {
            return (
              <TimeInput
                onChange={(value) => {
                  field.onChange(value);
                }}
                value={field.value}
                format="hh:mm:ss"
                required
                disableFocusOnIcon
              />
            );
          }}
        />
      </div> */}

      <div className="time-input-container">
        <p>Form with react-hook-form</p>
        <Form />
      </div>
    </div>
  );
}

export default App;
