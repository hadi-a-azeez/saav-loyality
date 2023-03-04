/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "admin-layout": "300px 1fr",
      },
      boxShadow: {
        bottomNavigation: "0px -0.994937px 19.8987px rgba(0, 0, 0, 0.25)",
        mobileCard: "0px 1px 10px rgba(0, 0, 0, 0.25)",
      },
      minHeight: {
        profile: "184px",
      },
      backgroundColor: {
        lightGrey: "#eceef0",
        gold: "#f3efe0",
      },
    },
  },
  plugins: [],
};
