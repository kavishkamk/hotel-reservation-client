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
        'tahiti-gold': '#DE8705',
        'turbo': '#FFE600',
        'cosmos': '#ffd1d1',
        'pgray': '#ccc',
        'dusty-gray': '#999999',
      },
      spacing: {
        'main': 'calc(100% - 8rem)',
      },
      dropShadow: {
        'title': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        'input': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        'xxs': '.6rem',
        'sxm': '.75rem',
      },
    },
    screens: {
      'sbp': '580px',
      'sm': '640px',
      'mbp': '860px',
    },
  },
  plugins: [],
}
