/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0e17',
        primary: '#ff8906',
        paragraph: '#fffffe',
        muted: '#a7a9be',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
