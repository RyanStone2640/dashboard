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
        },
      },
      margin: {
        'm-15': {
          margin: '15px 0',
        },
        'm-9': {
          margin: '9px 0',
        },
      },
    },
  },
  plugins: [],

};
