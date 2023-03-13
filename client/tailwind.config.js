/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'border-rotate': 'border-rotate 8s infinite linear',
        'small-border-rotate': 'small-border-rotate 8s infinite linear',
      },
      keyframes: {
        'border-rotate': {
          '0%': { 'background-position': '0px 0px, 300px 116px, 0px 150px, 216px 0px' },
          '100%': { 'background-position': '300px 0px, 0px 116px, 0px 0px, 216px 150px' },
        },
        'small-border-rotate': {
          '0%': { 'background-position': '0px 0px, 225px 92px, 0px 140px, 167px 0px' },
          '100%': { 'background-position': '225px 0px, 0px 92px, 0px 0px, 167px 140px' },
        },
      },
      transitionDuration: {
        '1300': '1.3s',
        '1500': '1.5s',
        '2000': '2s',
      }
    },
  },
  plugins: [],
}
