/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ["Regular"],
        primaryBold: ["Bold"],
        primaryLight: ["Light"],
        primaryMedium: ["Medium"],
        primaryExtraBold: ["ExtraBold"],
        primaryExtraLight: ["ExtraLight"],
        primaryThin: ["Thin"],
        primarySemiBold: ["SemiBold"],
      },
      colors: {
        primary: "#1d1d1d",
        secondary: "#76787a",
        accent: "#ff540a",
        backgound: "#eee"
      }
    },
  },
  plugins: [],
};
