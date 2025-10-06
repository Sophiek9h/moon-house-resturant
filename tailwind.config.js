/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
       fontFamily: {
        nunito: ["Nunito-Regular"],
        "nunito-light": ["Nunito-Light"],
        "nunito-extralight": ["Nunito-ExtraLight"],
        "nunito-medium": ["Nunito-Medium"],
        "nunito-semibold": ["Nunito-SemiBold"],
        "nunito-bold": ["Nunito-Bold"],
        "nunito-extrabold": ["Nunito-ExtraBold"],
        "nunito-italic": ["Nunito-Italic"],
      },
      colors: {
        primaryRed: "#D50000",
    },
  }
  },
  plugins: [],
}

