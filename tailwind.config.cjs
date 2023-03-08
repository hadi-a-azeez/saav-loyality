/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "admin-layout": "300px 1fr",
        "store-layout": "1fr auto",
      },
      boxShadow: {
        bottomNavigation: "0px -0.994937px 19.8987px rgba(0, 0, 0, 0.25)",
        mobileCard: "0px 1px 10px rgba(0, 0, 0, 0.25)",
        metricsCard: "0px 0.95943px 9.5943px rgba(0, 0, 0, 0.06)",
      },
      minHeight: {
        profile: "184px",
      },
      backgroundColor: {
        lightGrey: "#eceef0",
        gold: "#f3efe0",
        whatsapp: "#25D366",
        lightOrange: "#FFEAD8",
      },
      textColor: {
        green: "#54b627",
        red: "#dc3545",
        success: "#20C997",
        orange: "#FD7E14",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
