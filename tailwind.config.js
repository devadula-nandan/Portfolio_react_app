/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        bounce1: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '25%, 75%': { transform: 'translateY(5px)' },
          '50%': { transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(4rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0rem)',
          },
        },
      },
      animation: {
        bounce1: 'bounce1 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.4s ease-in-out forwards',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
}