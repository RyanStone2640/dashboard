/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        myColor: {
          purple: '#651FFF',
          '#FFFDFD': '#FFFDFD',
        },
      },
      margin: {
        'm-15px': {
          margin: '15px 0',
        },
        'm-9px': {
          margin: '9px 0',
        },
      },
      minWidth: {
        '5rem': '5rem',
      },
      maxHeight: {
        '7rem': '7rem',
      },
    },
  },
  plugins: [],

};
