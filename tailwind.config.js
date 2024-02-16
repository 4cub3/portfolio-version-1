/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        2: '0 0 78%',
        3: '0 0 60%',
      },
      colors: {
        'gray-800-0': '#0D0D0D',
        'gray-700-0': '#262626',
        'gray-50-0': '#F2F2F2',
      },
      fontFamily: {
        sans: ['Roboto', 'san-serif'],
      },
    },
  },
  plugins: [],
};
