/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "18px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        poiret: ["Poiret one", "sans-serif"],
      },
      colors: {
        mint: "#155249",
        blueDarker: "#1595dd80",
        blueLighter: "#a4ffef6e",
        blueCustom: "#75CEFF",
        blueBg: "#c1effc3d",
        light: "#FFFDFD",
        greenDark: "#3E748F",
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
