/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bannerImg": "url(/src/assets/images/banner-desktop.svg)",
        "bannerMob": "url(/src/assets/images/banner-mobile.svg)",
      },
      height: {
        "heroHeight": "calc(100vh - 90px)",
        "bannerHeight": "calc(100vh - 200px)",
      },
      colors: {
        black100: "#0A0700",
        black200: "#4A4A4A",
        subText: "#27292C",
        grayText: "#475467",
        gray100: "#4F4F4F",
        gray200: "#667085",
        gray300: "#F9FAFB",
        gray400: "#57585B",
        paragraph100: "#57585B",
        heading100: "#1B1C1E",
        blue100: "#023E8A",
        blue200: "#0E294B",
      },
      boxShadow: {
        100: "0 8px 8px -4px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [],
};
