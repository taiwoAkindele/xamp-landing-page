/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bannerImg": "url(/src/assets/images/banner-desktop.svg)",
        "bannerMob": "url(/src/assets/images/banner-mobile.svg)",
        "how-it-works": "url(/src/assets/images/home-image.svg)",
        "how-it-works-mobile": "url(/src/assets/images/home-image-mobile.svg)",
      },
      height: {
        "hero-height": "calc(100vh - 90px)",
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
        gray500: "#EAECF0",
        heading100: "#1B1C1E",
        blue100: "#023E8A",
        blue200: "#0E294B",
        blue300: "#3565A1",
        green100: "#E9F4E8",
        green200: "#1E9114",
      },
      boxShadow: {
        100: "0 8px 8px -4px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
