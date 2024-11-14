/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#151515",
        flame: "#D36135",
        vanila: "#ECE4B7",
        fawn: "#E6AA68",
        asparagus: "#7FB069",
      },
    },
  },
  plugins: [],
}
