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
        'text-color-secondary': 'var(--text-color-secondary)',

        'bg-color': 'var(--bg-color)',
        'border-color': 'var(--border-color)',
        'code-bg-color': 'var(--code-bg-color)',
        'icon-hover-color': 'var(--icon-hover-color)',
        'switch-bg-color': 'var(--switch-bg-color)',
      },
      backgroundImage: {},
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
