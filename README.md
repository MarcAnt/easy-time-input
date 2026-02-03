# Simple TimeInput 🕒

[EN]

A simple, lightweight, and accessible time input component for React.

✨ Features

🚀 Lightweight: No heavy dependencies

🎨 Customizable: Style every part to match your brand.

♿ Accessible: Full keyboard and screen reader support.

📱 Responsive: Works perfectly on mobile and desktop.

🎨 Support for tailwind css and custom styles

## 📦 Installation

```bash
npm install @simple-time-input
```

## 🚀 Basic Use

Is very easy to start using it:

```jsx
import React, { useState } from "react";
import { TimeInput } from "@simple-time-input";

const App = () => {
  const [time, setTime] = useState("12:00");

  return (
    <div>
      <label>Select a time:</label>
      <TimeInput value={time} onChange={(newTime) => setTime(newTime)} />
    </div>
  );
};
```

## 📝 Example of use with Tailwind CSS

```jsx
import React, { useState } from "react";
import { TimeInput } from "@simple-time-input";

const App = () => {
  const [time, setTime] = useState("12:00");

  return (
    <div>
      <label>Select a time:</label>
      <TimeInput
        value={time}
        onChange={(newTime) => setTime(newTime)}
        className="p-2 bg-teal-500 text-white"
      />
    </div>
  );
```

## Demo and usage examples

[Demo](https://easy-time-input.vercel.app/)

## Future updates and features

- A stand alone hook to control the time effortless
- More methods to control the time as for example: hasTimeChanged, hasMinutesChanged, hasHoursChanged, etc.

## ⚙️ Props (API) EN

| Prop                | Type                                           | Default         | Is optional? | Description                                                                                                                             |
| ------------------- | ---------------------------------------------- | --------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| value               | string \| Date \| undefined \| null            | "00:00"         | Yes          | The value used to control or display the time in the input. The default value is "00:00:00". You can use new Date(), null or undefined. |
| onChange            | (value: Date \| string) => void                | undefined       | Yes          | Event function to change the time.                                                                                                      |
| name                | string                                         | "time"          | Yes          | Define the name to describe the time input in forms.                                                                                    |
| disabled            | boolean                                        | undefined       | Yes          | Whether the time input is disabled or not.                                                                                              |
| disabledHours       | boolean                                        | undefined       | Yes          | Whether the hours input is disabled or not.                                                                                             |
| disabledMinutes     | boolean                                        | undefined       | Yes          | Whether the minutes input is disabled or not.                                                                                           |
| disabledSeconds     | boolean                                        | undefined       | Yes          | Whether the seconds input is disabled or not.                                                                                           |
| required            | boolean                                        | undefined       | Yes          | Whether the time input is required or not.                                                                                              |
| className           | string                                         | undefined       | Yes          | Define the className to change the styles used in the time input. This input support tailwind css classes.                              |
| iconClockClassName  | string                                         | undefined       | Yes          | Define the className to change the styles used in the clock icon                                                                        |
| amPmButtonClassName | string                                         | undefined       | Yes          | Define the className to change the styles used in the AM/PM button                                                                      |
| controlsClassName   | string                                         | undefined       | Yes          | Define custom css className to change the styles as container                                                                           |
| dataTestId          | string                                         | undefined       | Yes          | Define the data-testid used in the time input                                                                                           |
| hoursPlaceholder    | "--" \| "HH" \| "hh"                           | "--"            | Yes          | Define the placeholder used in the hours input                                                                                          |
| minutesPlaceholder  | "--" \| "mm"                                   | "--"            | Yes          | Define the placeholder used in the minutes input                                                                                        |
| secondsPlaceholder  | "--" \| "ss"                                   | "--"            | Yes          | Define the placeholder used in the seconds input                                                                                        |
| iconAriaLabel       | string                                         | "clock"         | Yes          | Define the aria-label in icon button                                                                                                    |
| secondsAriaLabel    | string                                         | "seconds"       | Yes          | Define the aria-label in seconds input controller                                                                                       |
| minutesAriaLabel    | string                                         | "minutes"       | Yes          | Define the aria-label in minute input controller                                                                                        |
| hoursAriaLabel      | string                                         | "hours"`        | Yes          | Define the aria-label in hour input controller                                                                                          |
| amPmAriaLabel       | string                                         | "am-pm"         | Yes          | Define the aria-label in AM/PM controller                                                                                               |
| ariaLabel           | string                                         | "time"          | Yes          | Define the aria-label in the time input. By default is "time"                                                                           |
| hoursInputTitle     | string                                         | "Hours input"   | Yes          | Define the title for the hour input. By default is "Hours input"                                                                        |
| minutesInputTitle   | string                                         | "Minutes input" | Yes          | Define the title for the minutes input. By default is "Minutes input"                                                                   |
| secondsInputTitle   | string                                         | "Seconds input" | Yes          | Define the title for the seconds input. By default is "Seconds input"                                                                   |
| hasSeconds          | boolean                                        | false           | Yes          | Whether the time input has to display seconds. By default is false                                                                      |
| id                  | string                                         | undefined       | Yes          | Id to identify the time input                                                                                                           |
| hour12              | boolean                                        | false           | Yes          | Whether the time input has to show AM/PM button or not. By default is false                                                             |
| disableFocusOnIcon  | boolean                                        | false           | Yes          | Whether the time input has to display icon. By default is true, but it is false, the input will not focus on click                      |
| format              | "HH:mm:ss" \| "HH:mm" \| "hh:mm:ss" \| "hh:mm" | undefined       | Yes          | Define the format used in the time input. By default is "HH:mm:ss"                                                                      |
| maxTime             | string \| Date                                 | undefined       | Yes          | Define the maximum time used in the time input. By default is "23:59:59"                                                                |
| minTime             | string \| Date                                 | undefined       | Yes          | Define the minimum time used in the time input. By default is "00:00:00"                                                                |
| hideControls        | boolean                                        | false           | Yes          | Whether the time input has to display controls. By default is false                                                                     |
| setZeroOnBlur       | boolean                                        | false           | Yes          | Whether the time input has to set the time to 00:00:00 when the input is blurred. By default is false                                   |

📄 License
This project is under the MIT License. Consult the LICENSE file for more details.

[ES]

Un componente de entrada de tiempo para React, ligero, personalizable y accesible.

✨ Características

🚀 Ligero: Sin dependencias pesadas

⚛ Soporte para React 18 y 19

🎨 Personalizable: Estiliza cada parte para que coincida con tu marca.

♿ Accesible: Soporte completo para teclado y lectores de pantalla.

📱 Responsive: Funciona perfectamente en dispositivos móviles y escritorio.

🎨 Soporte para tailwind css y estilos personalizados

## 📦 Instalación

```bash
npm install @simple-time-input
```

## 🚀 Uso Básico

Es muy sencillo empezar a usarlo:

```jsx
import React, { useState } from "react";
import { TimeInput } from "@simple-time-input";

const App = () => {
  const [time, setTime] = useState("12:00");

  return (
    <div>
      <label>Selecciona una hora:</label>
      <TimeInput value={time} onChange={(newTime) => setTime(newTime)} />
    </div>
  );
};
```

## 📝 Ejemplo de uso con Tailwind CSS

```jsx
import React, { useState } from "react";
import { TimeInput } from "@simple-time-input";

const App = () => {
  const [time, setTime] = useState("12:00");

  return (
    <div>
      <label>Selecciona una hora:</label>
      <TimeInput
        value={time}
        onChange={(newTime) => setTime(newTime)}
        className="p-2 bg-teal-500 text-white"
      />
    </div>
  );
```

## Demo y ejemplos de uso

[Demo](https://easy-time-input.vercel.app/)

## Proximas actualizaciones o features

- Hook para controlar el tiempo de manera más sencilla y de forma separada y reactiva
- Mas métodos para controlar el tiempo como por ejemplo: hasTimeChanged, hasMinutesChanged, hasHoursChanged, etc.

📄 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
