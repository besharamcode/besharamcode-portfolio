/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hind: "var(--ff-hind)",
        poppins: "var(--ff-poppins)",
      },
      colors: {
        text: "var(--text-clr)",
        btn: "var(--btn-clr)",
      },
    },
  },
  plugins: [],
};
