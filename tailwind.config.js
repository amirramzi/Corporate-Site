/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBg: "rgb(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        hero1: "url('/src/assets/img/hero-bg.png')",
        hero2: "url('/src/assets/img/Team-work-amico.png')",
      },
    },
  },
  plugins: [],
};
