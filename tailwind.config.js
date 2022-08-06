/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Inter', 'sans-serif'],
      },
      colors: {
				'cornflower-blue': '#696CFF',
        'silver-chalice': '#B1B1B1',
      },
    },
  },
  plugins: [],
}
