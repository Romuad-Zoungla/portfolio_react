

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "border-glow": "glowEffect 3s infinite linear",
      },
      keyframes: {
        glowEffect: {
          "0%": { boxShadow: "0 0 10px #ffaa40" },
          "50%": { boxShadow: "0 0 20px #9c40ff" },
          "100%": { boxShadow: "0 0 10px #ffaa40" },
        },
      },
    },
  },
  plugins: [],
};
