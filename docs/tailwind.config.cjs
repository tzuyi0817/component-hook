/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        secondary: 'var(--secondary)',

        'text-color': 'var(--text-color)',
        'bg-color': 'var(--bg-color)',
        'border-color': 'var(--border-color)',
        'code-bg-color': 'var(--code-bg-color)',
        'icon-hover-color': 'var(--icon-hover-color)',
      },
      backgroundImage: {},
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
