import TimeInput from "../TimeInput";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, expect } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("TimeInput testing user interactions and buttons", () => {
  const fn = vi.fn();

  test("Should be display AM or PM if the user click on AM/PM button", async () => {
    const user = userEvent.setup();
    render(<TimeInput onChange={fn} value={"10:30"} hour12={true} />);

    const amPm = screen.getByLabelText("am-pm");
    expect(amPm).toBeInTheDocument();
    expect(amPm).toHaveTextContent("AM");

    await user.click(amPm);

    expect(amPm).toHaveTextContent("PM");
  });

  test("Should not change time when the user click on arrow down to remove hour or add hour", async () => {
    const user = userEvent.setup();
    render(<TimeInput onChange={fn} value={"10:30"} disabled />);
    const minutes = screen.getByLabelText("minutes");
    const hours = screen.getByLabelText("hours");

    expect(minutes).toBeDisabled();
    expect(hours).toBeDisabled();
    const hourControls = within(screen.getByLabelText("hours-controls"));
    const removeHourButton = hourControls.getAllByRole("button")[1];
    const addHourButton = hourControls.getAllByRole("button")[0];

    await user.click(addHourButton);
    await user.click(removeHourButton);

    expect(minutes).toHaveDisplayValue("30");
    expect(hours).toHaveDisplayValue("10");
  });

  test("Should set hours when the user click on arrow down to remove hour", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:00"} />);
    const hourControls = within(screen.getByLabelText("hours-controls"));
    const removeHourButton = hourControls.getAllByRole("button")[1];

    await user.click(removeHourButton);
    const time = screen.getByLabelText("time") as HTMLInputElement;
    const hours = time.value.split(":")[0];
    expect(hours).toBe("09");
  });

  test("Should set hours when the user click on arrow up to add hour", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:00"} />);
    const hourControls = within(screen.getByLabelText("hours-controls"));
    const addHourButton = hourControls.getAllByRole("button")[0];

    await user.click(addHourButton);
    const time = screen.getByLabelText("time") as HTMLInputElement;
    const hours = time.value.split(":")[0];
    expect(hours).toBe("11");
  });

  test("Should not set hours when the user type a wrong hour", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:00"} />);
    const hours = screen.getByLabelText("hours");

    await user.click(hours);
    await user.type(hours, "50");

    expect(hours).not.toHaveDisplayValue("50");
  });

  test("Should set hours when the user type a correct hour", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:00"} />);
    const hours = screen.getByLabelText("hours");

    await user.click(hours);
    await user.type(hours, "15");

    expect(hours).toHaveDisplayValue("15");
  });

  test("Should display an empty string after delete the current value", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:00"} />);
    const hours = screen.getByLabelText("hours");
    const minutes = screen.getByLabelText("minutes");

    await user.click(hours);
    await user.keyboard(" ");
    await user.clear(hours);

    expect(hours).toHaveDisplayValue("");
    expect(hours).not.toHaveDisplayValue("00");
    expect(hours).not.toHaveDisplayValue("10");

    await user.click(minutes);
    await user.keyboard(" ");
    await user.clear(minutes);
    expect(minutes).toHaveDisplayValue("");
    expect(minutes).not.toHaveDisplayValue("00");
  });

  test("Should change hour and minutes", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={new Date()} />);
    const hours = screen.getByLabelText("hours");
    const minutes = screen.getByLabelText("minutes");

    await user.click(hours);
    await user.type(hours, "10");

    await user.click(minutes);
    await user.type(minutes, "30");

    expect(hours).toHaveValue(10);
    expect(minutes).toHaveValue(30);
  });

  test("Should limited a min time", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:30"} minTime={"07:30"} />);

    const minutesInput = screen.getByLabelText("minutes");
    const hoursInput = screen.getByLabelText("hours");

    expect(minutesInput).toHaveDisplayValue("30");
    expect(hoursInput).toHaveDisplayValue("10");

    const removeHourButton = screen.getByLabelText("remove-time");

    await user.click(removeHourButton);
    await user.click(removeHourButton);
    await user.click(removeHourButton);

    expect(minutesInput).toHaveDisplayValue("30");
    expect(hoursInput).not.toHaveDisplayValue("06");
  });

  test("Should limited between min and max time", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:30"} minTime={"07:30"} maxTime={"12:30"} />);

    const minutesInput = screen.getByLabelText("minutes");
    const hoursInput = screen.getByLabelText("hours");

    expect(minutesInput).toHaveDisplayValue("30");
    expect(hoursInput).toHaveDisplayValue("10");

    const removeHourButton = screen.getByLabelText("remove-time");
    const addHourButton = screen.getByLabelText("add-time");

    await user.click(addHourButton);
    await user.click(addHourButton);

    expect(minutesInput).toHaveDisplayValue("30");
    expect(hoursInput).not.toHaveDisplayValue("13");

    await user.click(removeHourButton);
    await user.click(removeHourButton);
    await user.click(removeHourButton);

    expect(minutesInput).toHaveDisplayValue("30");
    expect(hoursInput).not.toHaveDisplayValue("06");
  });

  test("Should set hours when the user click on arrow down to remove hour", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00"} />);
    const hourControls = within(screen.getByLabelText("hours-controls"));
    const removeHourButton = hourControls.getAllByRole("button")[1];

    await user.click(removeHourButton);
    const time = screen.getByLabelText("time") as HTMLInputElement;
    const hours = time.value.split(":")[0];
    expect(hours).toBe("09");
  });

  test("Should set hours when the user click on arrow up to add hour", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:00"} />);
    const hourControls = within(screen.getByLabelText("hours-controls"));
    const addHourButton = hourControls.getAllByRole("button")[0];

    await user.click(addHourButton);
    const time = screen.getByLabelText("time") as HTMLInputElement;
    const hours = time.value.split(":")[0];
    expect(hours).toBe("11");
  });

  test("Should not set hours when the user type a wrong hour", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:00"} />);
    const hours = screen.getByLabelText("hours");
    await user.click(hours);
    await user.keyboard("50");

    expect(hours).not.toHaveDisplayValue("50");
  });

  test("Should not set hours when the user type 'e' character", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00"} />);
    const hours = screen.getByLabelText("hours");
    await user.click(hours);
    await user.keyboard("e");
    expect(hours).not.toHaveDisplayValue("e");
  });

  test("Should not set hours when the user type '+' character", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00"} />);
    const hours = screen.getByLabelText("hours");
    await user.click(hours);
    await user.keyboard("+");
    expect(hours).not.toHaveDisplayValue("+");
  });

  test("Should not set hours when the user type '-' character", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00"} />);
    const hours = screen.getByLabelText("hours");
    await user.click(hours);
    await user.keyboard("-");
    expect(hours).not.toHaveDisplayValue("-");
  });
});

describe("TimeInput testing readOnly hours", () => {
  test("Should not set hours, minutes and seconds when the input is readOnly", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:00"} readOnly={true} />);
    const hours = screen.getByLabelText("hours") as HTMLInputElement;
    const minutes = screen.getByLabelText("minutes") as HTMLInputElement;
    await user.click(hours);
    await user.keyboard("12");

    await user.click(minutes);
    await user.keyboard("30");

    expect(hours).not.toHaveDisplayValue("12");
    expect(minutes).not.toHaveDisplayValue("30");
  });

  test("Should not set hours when the user click on arrow up to add hour", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:00"} readOnlyHours={true} />);
    const hourControls = within(screen.getByLabelText("hours-controls"));
    const addHourButton = hourControls.getAllByRole("button")[0];

    await user.click(addHourButton);
    const time = screen.getByLabelText("time") as HTMLInputElement;
    const hours = time.value.split(":")[0];
    expect(hours).toBe("10");
  });

  test("Should not set hours when the user click on arrow down to remove hour", async () => {
    const user = userEvent.setup();

    render(<TimeInput value={"10:00"} readOnlyHours={true} />);
    const hourControls = within(screen.getByLabelText("hours-controls"));
    const removeHourButton = hourControls.getAllByRole("button")[1];

    await user.click(removeHourButton);
    const time = screen.getByLabelText("time") as HTMLInputElement;
    const hours = time.value.split(":")[0];
    expect(hours).toBe("10");
  });

  test("Should not set minutes when the user click on arrow up to add minute", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00"} readOnlyMinutes={true} />);
    const hourControls = within(screen.getByLabelText("hours-controls"));
    const addHourButton = hourControls.getAllByRole("button")[0];
    const minutes = screen.getByLabelText("minutes");

    await user.click(minutes);
    await user.click(addHourButton);
    const time = screen.getByLabelText("time") as HTMLInputElement;
    const hours = time.value.split(":")[1];
    expect(hours).toBe("00");
  });
});

describe("TimeInput testing step hours", () => {
  test("Should test step hours with arrow controls", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00"} stepHours={5} />);

    const hours = screen.getByLabelText("hours");
    const addHourButton = screen.getByLabelText("add-time");
    await user.click(addHourButton);
    expect(hours).toHaveValue(15);
  });

  test("Should test step hours with arrow buttons up and down", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00"} stepHours={5} />);

    const hours = screen.getByLabelText("hours");
    const addHourButton = screen.getByLabelText("add-time");
    const removeHourButton = screen.getByLabelText("remove-time");
    await user.click(addHourButton);
    expect(hours).toHaveValue(15);
    await user.click(removeHourButton);
    expect(hours).toHaveValue(10);
  });

  test("Should test step minutes with arrow controls", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00"} stepMinutes={5} />);

    const minutes = screen.getByLabelText("minutes");
    const addMinuteButton = screen.getByLabelText("add-time");
    await user.click(minutes);
    await user.click(addMinuteButton);
    expect(minutes).toHaveValue(5);
  });

  test("Should test step seconds with arrow controls", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00:00"} hasSeconds stepSeconds={5} />);

    const seconds = screen.getByLabelText("seconds");
    const addSecondButton = screen.getByLabelText("add-time");
    await user.click(seconds);
    await user.click(addSecondButton);
    expect(seconds).toHaveValue(5);
  });

  test("Should test step hours with a wrong value", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00"} stepHours={100} />);

    const hours = screen.getByLabelText("hours");
    const addHourButton = screen.getByLabelText("add-time");
    await user.click(addHourButton);
    expect(hours).toHaveValue(11);
  });

  test("Should test step hours with a float value", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00"} stepHours={1.5} />);

    const hours = screen.getByLabelText("hours");
    const addHourButton = screen.getByLabelText("add-time");
    await user.click(addHourButton);
    expect(hours).toHaveValue(11);
  });

  test("Should test step hours with a negative value", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00"} stepHours={-1} />);

    const hours = screen.getByLabelText("hours");
    const addHourButton = screen.getByLabelText("add-time");
    await user.click(addHourButton);
    expect(hours).toHaveValue(11);
  });

  test("Should test step hours with 0 value", async () => {
    const user = userEvent.setup();
    render(<TimeInput value={"10:00"} stepHours={0} />);

    const hours = screen.getByLabelText("hours");
    const addHourButton = screen.getByLabelText("add-time");
    await user.click(addHourButton);
    expect(hours).toHaveValue(11);
  });
});

describe("TimeInput testing format", () => {
  // const fn = vi.fn();
  test("Should change the hours, minutes and seconds in 24 hours format HH:mm:ss", async () => {
    const user = userEvent.setup();
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    render(<TimeInput format="HH:mm:ss" value={now} />);
    const time = screen.getByLabelText("time");

    expect(time).toHaveValue(
      `${+hours < 10 ? "0" + hours : hours}:${
        +minutes < 10 ? "0" + minutes : minutes
      }:${+seconds < 10 ? "0" + seconds : seconds}`,
    );

    const hoursInput = screen.getByLabelText("hours");
    const minutesInput = screen.getByLabelText("minutes");
    const secondsInput = screen.getByLabelText("seconds");

    await user.click(hoursInput);
    await user.type(hoursInput, "10");

    await user.click(minutesInput);
    await user.type(minutesInput, "30");

    await user.click(secondsInput);
    await user.type(secondsInput, "30");

    expect(time).toHaveValue("10:30:30");
  });

  test("Should change the hours, minutes and seconds in 12 hours format hh:mm:ss", async () => {
    const user = userEvent.setup();
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    render(<TimeInput format="hh:mm:ss" value={now} />);
    const time = screen.getByLabelText("time");

    expect(time).toHaveValue(
      `${+hours < 10 ? "0" + (hours - 12) : hours - 12}:${
        +minutes < 10 ? "0" + minutes : minutes
      }:${+seconds < 10 ? "0" + seconds : seconds}`,
    );

    const hoursInput = screen.getByLabelText("hours");
    const minutesInput = screen.getByLabelText("minutes");
    const secondsInput = screen.getByLabelText("seconds");

    await user.click(hoursInput);
    await user.type(hoursInput, "1");

    await user.click(minutesInput);
    await user.type(minutesInput, "30");

    await user.click(secondsInput);
    await user.type(secondsInput, "30");

    expect(time).toHaveValue("1:30:30");
  });
});

describe.only("TimeInput onChange handlers", () => {
  test.only("Should update the hours when onChangedHours is called", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();

    render(<TimeInput value={"10:10"} onChangedHours={fn} />);

    const hours = screen.getByLabelText("hours");

    await user.click(hours);
    await user.type(hours, "10");
    expect(fn).toHaveBeenCalledTimes(2);
  });

  test.only("Should update the minutes when onChangedMinutes is called", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();

    render(<TimeInput value={"10:10"} onChangedMinutes={fn} />);

    const minutes = screen.getByLabelText("minutes");

    await user.click(minutes);
    await user.type(minutes, "50");
    expect(fn).toHaveBeenCalledTimes(2);
  });

  test.only("Should update the seconds when onChangedSeconds is called", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();

    render(<TimeInput value={"10:10:10"} hasSeconds onChangedSeconds={fn} />);

    const seconds = screen.getByLabelText("seconds");

    await user.click(seconds);
    await user.type(seconds, "50");
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
