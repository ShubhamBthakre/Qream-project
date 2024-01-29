/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#005AE7",
        "light-white": "rgba(255,255,255,0.17)",
        "light-blue": "#D1E9FF",
        "light-sky": "rgba(209, 233, 255, 0.37)",
        "medium-sky": "#EEF7FF",
        "border-color": "rgba(0, 0, 0, 0.28)",
      },
      fontFamily: {
        podkova: ['Podkova'],
        poppins: ['Poppins'],
        mitr:['Mitr'],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
