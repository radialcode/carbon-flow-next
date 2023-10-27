/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xsm": "375px",
      // => @media (min-width: 375px) { ... }
      xsm: "480px",
      // custom screen
      xs: "576px",
      // => @media (min-width: 576px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 1024px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1400px",
      // => @media (min-width: 1280px) { ... }
      "3xl": "1599px",
      // => @media (min-width: 1280px) { ... }
      "4xl": "1921px",
    },
    extend: {
      fontSize: {
        "3xl": "28px",
        "4xl": "32px",
        "5xl": "36px",
        "6xl": "40px",
        "7xl": "48px",
      },
      colors: {
        yellow: "#FFB219",
        off_white: "#FAFAFA",
        gray: "#2A2A2A",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "70px",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        empoweringBg: "url('/images/webp/empowering-bg-img.webp')",
        startjourneyFooter: "url('/images/webp/netural-journey-bg-img.webp')",
        satelite: "url('/images/webp/satelite.png')",
        loader_border: "url('/images/png/page_border.png')",
      },
      boxShadow: {
        as_seen_on_box_shadow: " 0px 2px 30px 2px rgba(0, 0, 0, 0.08);",
      },
    },
  },
  plugins: [],
};
