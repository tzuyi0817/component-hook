/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'border-color': 'var(--border-color)',
        'code-bg': 'var(--code-bg)',
        'icon-hover-color': 'var(--icon-hover-color)',
      },
      backgroundImage: {},
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
