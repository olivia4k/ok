/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "warm-paper": "#faf9f7",
        "warm-mist": "#d8d4ce",
        "warm-slate": "#807a72",
        "warm-ink": "#1c1a17",
      },
      fontFamily: {
        sans: ['"Work Sans"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.5em",
      },
    },
  },
  plugins: [],
};
