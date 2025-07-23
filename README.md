# Weather App (React + Vite + TailwindCSS)

A simple weather card application built with React, Vite, and TailwindCSS. It fetches current weather data for a city using the OpenWeatherMap API and displays it in a clean, responsive UI.

## Features

- Search for weather by city name
- Auto-detects user city on load (via IP geolocation)
- Displays temperature, humidity, wind, and weather conditions
- Responsive and modern UI with TailwindCSS

## Project Structure

```
.
├── public/
│   └── weather.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   │   └── css/
│   │       ├── App.css
│   │       └── WeatherFrom.css
│   └── components/
│       ├── useApiRequests.jsx
│       ├── Weather.jsx
│       ├── WeatherData.jsx
│       └── WeatherForm.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/MrAkbari91/Weather-App-React.git
   cd Weather-App-React
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Configuration

- The OpenWeatherMap API key is hardcoded in [`WeatherData`](src/components/WeatherData.jsx). For production, consider using environment variables.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## License

MIT

---

Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [TailwindCSS](https://tailwindcss.com/)

**Author:** Dhruv Akbari