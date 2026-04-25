# Easy TimeInput 🕒

[EN]

A simple and easy to use time input component for React.

✨ Features

🚀 Lightweight: No heavy dependencies

🎨 Customizable: Style every part to match your brand.

♿ Accessible: Full keyboard and screen reader support.

📱 Responsive: Works perfectly on mobile and desktop.

🎨 Support for tailwind css and custom styles

## 📦 Installation

```bash
npm install @bymarcant/easy-time-input
```

## 🚀 Basic Use

Is very easy to start using it:

```jsx
import React, { useState } from "react";
// Import the component and the styles
import { TimeInput } from "@bymarcant/easy-time-input";
import "@bymarcant/easy-time-input/style.css";

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
// Import the component and the styles
import { TimeInput } from "@bymarcant/easy-time-input";
import "@bymarcant/easy-time-input/style.css";

// To use it with tailwindcss try to use it like this:
// Remember to import @tailwind in your style.css file

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

## Demos, props and usage examples

[Demo](https://easy-time-input-docs.vercel.app/)

## Future updates and features

- A stand alone hook to control the time effortlessly
- More methods to control the time for example: onTimeChange, onMinutesChange, onHoursChange, onSecondsChange, onAMPMChange

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
npm install @bymarcant/easy-time-input
```

## 🚀 Uso Básico

Es muy sencillo empezar a usarlo:

```jsx
import React, { useState } from "react";
import { TimeInput } from "@bymarcant/easy-time-input";
import "@bymarcant/easy-time-input/style.css";

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
import { TimeInput } from "@bymarcant/easy-time-input";
import "@bymarcant/easy-time-input/style.css";

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

## Demos, props y ejemplos de uso

[Demo](https://easy-time-input-docs.vercel.app/)

## Proximas actualizaciones o features

- Hook para controlar el tiempo de manera más sencilla y de forma separada y reactiva
- Mas métodos para controlar el tiempo como por ejemplo: onTimeChange, onMinutesChange, onHoursChange, onSecondsChange, onAMPMChange

📄 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
