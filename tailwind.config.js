/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alfa': ['"Alfa Slab One"', 'serif'],
        'grey-qo': ['"Grey Qo"', 'serif'],
        'noto': ['"Noto Sans"', 'serif'],
        'pacifico': ['"Pacifico"', 'serif'],
        'poppins': ['"Poppins"', 'serif'],
        'roboto': ['"Roboto"', 'serif'],
        'texturina': ['"Texturina"', 'serif'],
        'zen-dots': ['"Zen Dots"', 'serif'],
        'teko': ['"Teko"', 'serif'],
        'montserrat': ['"Montserrat"', 'serif'],
        'lora': ['"Lora"', 'serif'],
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "-translateY(30px)" },
                   "100%": { opacity: "1", transform: "-translateY(0)" },
        },
      },
      animation: {
        scaleUp: "scaleUp 0.5s ease-in-out",
        fadeInDelayed: "fadeIn 1s ease-in-out 0.7s forwards",
      },
      colors: {
        blck: {
          500: '#000000', // Your custom color code
        },
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.3)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
