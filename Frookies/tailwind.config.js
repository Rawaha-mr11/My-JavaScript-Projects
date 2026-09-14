/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D27000',
          hover: '#B85F00',
        },
        secondary: {
          DEFAULT: '#4B2217',
          dark: '#470F00',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F4F2F2',
        },
        brand: {
          orange: '#D27000',
          'orange-hover': '#B85F00',
          brown: '#4B2217',
          dark: '#470F00',
          muted: '#F4F2F2',
          gray: '#707070',
          border: '#B7B7B7',
          white: '#FFFFFF',
          black: '#000000',
        },
        text: {
          main: '#4B2217',
          muted: '#707070',
          light: '#B7B7B7',
          white: '#FFFFFF',
          black: '#000000',
        },
      },
      fontFamily: {
        berlin: ['"Berlin Sans FB Demi"', '"Berlin Sans FB"', 'sans-serif'],
      },
      borderRadius: {
        card: '8px',
      },
    },
  },
  plugins: [],
}