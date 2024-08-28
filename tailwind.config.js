/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslateblue: {
          "100": "#2b3484",
          "200": "rgba(43, 52, 132, 0.3)",
          "300": "rgba(43, 52, 132, 0.1)",
        },
        "black-900": "#3d3d3d",
        "black-950": "#000",
        gray: "rgba(0, 0, 0, 0.2)",
        "jordy-blue-800": "#2c35a7",
        "jordy-blue-50": "#edf5ff",
        mediumslateblue: {
          "100": "#333dcf",
          "200": "rgba(89, 99, 245, 0.3)",
          "300": "rgba(51, 61, 207, 0.3)",
          "400": "rgba(51, 61, 207, 0.1)",
        },
        royalblue: {
          "100": "#5e76f6",
          "200": "rgba(94, 118, 246, 0.3)",
          "300": "rgba(94, 118, 246, 0.1)",
        },
        dodgerblue: {
          "100": "#788fff",
          "200": "rgba(120, 143, 255, 0.3)",
        },
        cornflowerblue: {
          "100": "#8fb2ff",
          "200": "#5c80cc",
          "300": "rgba(143, 178, 255, 0.3)",
          "400": "rgba(143, 178, 255, 0.1)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
