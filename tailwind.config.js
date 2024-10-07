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
    },
  },
  plugins: [],
};
