import TimeInput from "../TimeInput";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, expect } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("TimeInput basic testing", () => {
  const fn = vi.fn();
  test("TimeInput should be displayed in the document", () => {
    render(<TimeInput onChange={fn} value={"10:30"} />);
    const timeInput = screen.getByLabelText("time");
    expect(timeInput).toBeInTheDocument();
  });

  test("Should be display correct hours on time string", () => {
    render(<TimeInput onChange={fn} value={"10:30"} />);

    const hours = screen.getByLabelText("hours");
    expect(hours).toHaveDisplayValue("10");
  });

  test("Should be display correct minutes on time string", () => {
    render(<TimeInput onChange={fn} value={"10:30"} />);

    const minutes = screen.getByLabelText("minutes");
    expect(minutes).toHaveDisplayValue("30");
  });

  test("Should be display correct time string if value is 24 hours format", () => {
    render(<TimeInput onChange={fn} value={"15:30"} />);

    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");
    expect(minutes).toHaveDisplayValue("30");
    expect(hours).toHaveDisplayValue("15");
  });

  test("Should be display 00:00 time if value has bad time format", () => {
    render(<TimeInput onChange={fn} value={"10:3"} />);

    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(screen.getByLabelText("time")).toHaveDisplayValue("10:03");
    expect(minutes).toHaveDisplayValue("03");
    expect(hours).toHaveDisplayValue("10");
  });

  test("Should be display 00:00 time if value is null or undefined", () => {
    render(<TimeInput onChange={fn} value={null} />);

    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(screen.getByLabelText("time")).toHaveDisplayValue("00:00");
    expect(minutes).toHaveDisplayValue("00");
    expect(hours).toHaveDisplayValue("00");
  });

  test("Should be display 00:00 time if there is no value", () => {
    render(<TimeInput onChange={fn} />);

    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(screen.getByLabelText("time")).toHaveDisplayValue("00:00");
    expect(minutes).toHaveDisplayValue("00");
    expect(hours).toHaveDisplayValue("00");
  });

  test("Should be display 00:00 time if value is null or undefined", () => {
    render(<TimeInput onChange={fn} value={undefined} />);

    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(screen.getByLabelText("time")).toHaveDisplayValue("00:00");
    expect(minutes).toHaveDisplayValue("00");
    expect(hours).toHaveDisplayValue("00");
  });

  test("Should be display 00:00 time if value has negative time", () => {
    render(<TimeInput onChange={fn} value={"-10:-30"} />);

    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(screen.getByLabelText("time")).toHaveDisplayValue("10:30");
    expect(minutes).toHaveDisplayValue("30");
    expect(hours).toHaveDisplayValue("10");
  });

  test("Should be disabled time input", () => {
    render(<TimeInput onChange={fn} value={"10:30"} disabled />);

    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(minutes).toBeDisabled();
    expect(hours).toBeDisabled();
  });

  test("Should be only hour disabled", () => {
    render(<TimeInput onChange={fn} value={"10:30"} disabledHours />);
    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(minutes).not.toBeDisabled();
    expect(hours).toBeDisabled();
  });

  test("Should be only minutes disabled", () => {
    render(<TimeInput onChange={fn} value={"10:30"} disabledMinutes />);
    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(minutes).toBeDisabled();
    expect(hours).not.toBeDisabled();
  });

  test("Should be only seconds disabled", () => {
    render(
      <TimeInput
        onChange={fn}
        hasSeconds={true}
        value={"10:30"}
        disabledSeconds
      />,
    );
    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");
    const seconds = screen.getByLabelText("seconds");

    expect(minutes).not.toBeDisabled();
    expect(hours).not.toBeDisabled();
    expect(seconds).toBeDisabled();
  });

  test("Should be display AM/PM button if the hour12 is true", () => {
    render(<TimeInput onChange={fn} value={"10:30"} hour12 />);

    const amPm = screen.getByLabelText("am-pm");
    expect(amPm).toBeInTheDocument();
  });

  test("Should be display PM if the hour is greater than 12", () => {
    render(<TimeInput value={"15:30"} hour12 />);

    const amPm = screen.getByLabelText("am-pm");
    expect(amPm).toBeInTheDocument();
    expect(amPm).toHaveTextContent("PM");

    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(screen.getByLabelText("time")).toHaveValue("3:30");
    expect(minutes).toHaveDisplayValue("30");
    expect(hours).toHaveDisplayValue("3");
  });

  test("Should limited a max time", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:30"} maxTime={"12:30"} />);

    const minutesInput = screen.getByLabelText("minutes");
    const hoursInput = screen.getByLabelText("hours");

    expect(minutesInput).toHaveDisplayValue("30");
    expect(hoursInput).toHaveDisplayValue("10");

    const addHourButton = screen.getByLabelText("add-time");

    await user.click(addHourButton);
    await user.click(addHourButton);
    await user.click(addHourButton);

    expect(minutesInput).toHaveDisplayValue("30");
    expect(hoursInput).not.toHaveDisplayValue("13");
  });

  test("Should display 00:00 time if the value is an empty string", () => {
    render(<TimeInput onChange={fn} value={""} />);

    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(minutes).toHaveDisplayValue("00");
    expect(hours).toHaveDisplayValue("00");
  });

  test("Should display current time if the value is a Date()", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("10/20/2024 01:01"));
    render(<TimeInput onChange={fn} value={new Date("10/20/2024 01:01")} />);

    const minutesInput = screen.getByLabelText("minutes");
    const hoursInput = screen.getByLabelText("hours");

    expect(minutesInput).toHaveDisplayValue("01");
    expect(hoursInput).toHaveDisplayValue("01");
    vi.useRealTimers();
  });

  test("Should display current time if the value is a toISOString date format", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date().toISOString());
    render(<TimeInput onChange={fn} value={new Date().toISOString()} />);

    const minutesInput = screen.getByLabelText("minutes");
    const hoursInput = screen.getByLabelText("hours");

    const minutes = String(new Date().getMinutes()).padStart(2, "0");
    const hours = String(new Date().getHours()).padStart(2, "0");

    expect(minutesInput).toHaveDisplayValue(minutes);
    expect(hoursInput).toHaveDisplayValue(hours);

    vi.useRealTimers();
  });

  test("Should display current time if the value is less than 10 minutes and minutes", () => {
    render(
      <TimeInput onChange={fn} value={"01:01"} aria-label={"time-input"} />,
    );
    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(screen.getByLabelText("time")).toHaveDisplayValue(`01:01`);
    expect(minutes).toHaveDisplayValue(`01`);
    expect(hours).toHaveDisplayValue(`01`);
  });

  test("Should display current time if the value 12:00", () => {
    render(
      <TimeInput onChange={fn} value={"12:00"} aria-label={"time-input"} />,
    );
    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(screen.getByLabelText("time")).toHaveDisplayValue(`12:00`);
    expect(minutes).toHaveDisplayValue(`00`);
    expect(hours).toHaveDisplayValue(`12`);
  });

  test("Should display time if the value 00:00 in 24 hours format", () => {
    render(
      <TimeInput onChange={fn} value={"00:00"} aria-label={"time-input"} />,
    );
    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(screen.getByLabelText("time")).toHaveDisplayValue(`00:00`);
    expect(minutes).toHaveDisplayValue(`00`);
    expect(hours).toHaveDisplayValue(`00`);
  });

  test("Should display current time if the value have seconds", () => {
    render(
      <TimeInput
        onChange={fn}
        value={"12:50:30"}
        aria-label={"time-input"}
        hasSeconds={true}
      />,
    );
    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");
    const seconds = screen.getByLabelText("seconds");

    expect(screen.getByLabelText("time")).toHaveDisplayValue(`12:50:30`);
    expect(hours).toHaveDisplayValue(`12`);
    expect(minutes).toHaveDisplayValue(`50`);
    expect(seconds).toHaveDisplayValue(`30`);
  });
});

describe("TimeInput testing format", () => {
  const fn = vi.fn();
  test("Should display the hours, minutes and seconds in 24 hours format HH:mm:ss", () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    render(<TimeInput onChange={fn} format="HH:mm:ss" value={now} />);
    const time = screen.getByLabelText("time");

    expect(time).toHaveValue(
      `${+hours < 10 ? "0" + hours : hours}:${
        +minutes < 10 ? "0" + minutes : minutes
      }:${+seconds < 10 ? "0" + seconds : seconds}`,
    );
  });

  test("Should display the hours, minutes and seconds in 12 hours format hh:mm:ss", () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    render(<TimeInput onChange={fn} format="hh:mm:ss" value={now} />);
    const time = screen.getByLabelText("time");
    expect(time).toHaveValue(
      `${hours % 12}:${+minutes < 10 ? "0" + minutes : minutes}:${+seconds < 10 ? "0" + seconds : seconds}`,
    );
  });
});

describe("TimeInput testing more than one component", () => {
  const fn = vi.fn();
  test("Should display the time of each component", () => {
    render(
      <>
        <TimeInput onChange={fn} value={new Date(2025, 11, 1, 1, 7, 59)} />
        <TimeInput onChange={fn} value={new Date().toISOString()} />
        <TimeInput onChange={fn} value={"2:22"} />
      </>,
    );

    const timeInput = screen.getAllByLabelText("time");
    const getHours = new Date(2025, 11, 1, 1, 7, 59).getHours();
    const getMinutes = new Date(2025, 11, 1, 1, 7, 59).getMinutes();

    const currentDate = new Date().toISOString();

    const currentHours = new Date(currentDate).getHours();
    const currentMinutes = new Date(currentDate).getMinutes();

    expect(timeInput).toHaveLength(3);
    expect(timeInput[0]).toHaveValue(
      `${+getHours < 10 ? "0" + getHours : getHours}:${
        +getMinutes < 10 ? "0" + getMinutes : getMinutes
      }`,
    );
    expect(timeInput[1]).toHaveValue(
      `${currentHours}:${currentMinutes < 10 ? "0" + currentMinutes : currentMinutes}`,
    );
    expect(timeInput[2]).toHaveValue("02:22");
  });
});
