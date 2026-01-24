import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import TimeInput from "../TimeInput/TimeInput";
import "./form-styles.css";

const schema = z.object({
  timeArived: z.string().min(1, "Required"),
  carName: z.string().min(1, "Required"),
});

type FormValues = z.infer<typeof schema>;

const Form = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      timeArived: new Date().toISOString(),
      carName: "",
    },
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    if (errors.carName || errors.timeArived) {
      return;
    }

    try {
      const time = new Date();
      const timeArived = data.timeArived.split(":");
      time.setHours(+timeArived[0] || 0);
      time.setMinutes(+timeArived[1] || 0);
      time.setSeconds(+timeArived[2] || 0);

      const newData = {
        ...data,
        timeArived: time.toTimeString(),
      };

      const response = await fetch("http://localhost:3000/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="input-container">
        <label htmlFor="carName">Car name</label>
        <input
          type="text"
          {...register("carName")}
          id="carName"
          placeholder="Car name"
          className="input"
        />
        {errors.carName && (
          <p style={{ color: "red" }}>{errors.carName.message}</p>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="timeArived">Time arived</label>
        <Controller
          name="timeArived"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <TimeInput
                onChange={(value) => {
                  field.onChange(value);
                }}
                value={field.value}
                required
                className="input"
              />
            );
          }}
        />
        {errors.timeArived && (
          <p style={{ color: "red" }}>{errors.timeArived.message}</p>
        )}
      </div>

      <button className="button-form" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
