/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00b0ff",
          "secondary": "#ff5252",
          "accent": "#232323",
          "neutral": "#065ba5",
          "base-100": "#fff",
          "info": "#00b0ff",
          "success": "#00c853",
          "warning": "#facc15",
          "error": "#ff5252",
        },
      },
    ],
  },
}