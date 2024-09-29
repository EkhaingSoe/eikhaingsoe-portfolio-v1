/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'ball-move': {
          '0%, 100%': { top: '0%' },
          '50%': { top: '100%' }
        }
      },
      animation: {
        'ball-move': 'ball-move 4s ease-in-out infinite'
      },
      fontFamily: {
        'montserrat': "Montserrat",
      },
      colors: {
        custom: {
          red: '#F4194A',
          purple: '#7B18D5',
          blue: '#5F6AF5',
          orange: '#F5885F',
          teal: '#33DBE2',
          navy: '#4050B5',
          danger: '#F44336',
          pink: '#ED578A',
          gray: '#607D8B',
          green: '#5DAF90',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

