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
          gray: 'rgba(0, 0, 0, 0.12)',
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
      maxWidth: {
        '10rem': '10rem',
      },
    },
  },
  plugins: [],

};
