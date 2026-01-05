/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",           
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#FF4500",
        "primary-dark": "#CC3700",
        "accent-gradient-start": "#FF6B00",
        "accent-gradient-end": "#FF0040",
        "background-dark": "#050505",
        "surface-dark": "#121212",
        "surface-light": "#FFFFFF",
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["Rajdhani", "sans-serif"],
      },
      backgroundImage: {
        "hex-pattern":
          "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M30 0l25.98 15v30L30 60 4.02 45V15z\\' fill-opacity=\\'0.03\\' fill=\\'%23FF4500\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')",
        "hero-glow":
          "radial-gradient(circle at center, rgba(255, 69, 0, 0.15) 0%, rgba(5, 5, 5, 0) 70%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
}