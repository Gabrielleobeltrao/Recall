/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '5': '5px'
    },
    extend: {
      colors: {
        'pink': '#DE61E8',
        'pink-purple': '#C266F2',
        'purple': '#9467DB',
        'purple-blue': '#7566F2',
        'blue': '#6177E8'
      },
      fontFamily: {
        sans: ['BRCobane', 'sans-serif'],
      },
      translate: {
        'dvw': '100dvw',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.appearance-none': {
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          'appearance': 'none',
        },
      }, ['responsive', 'hover']);
    },
  ],
}

