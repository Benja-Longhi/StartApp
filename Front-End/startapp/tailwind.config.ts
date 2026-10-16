import type { Config } from "tailwindcss";

// Tokens tomados de los Figma de referencia (Immutable Pitch para la landing, Podda para la app)
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0B0B0E",
        surface: "#141418",
        elevated: "#1C1C22",
        line: "#2A2A32",
        ink: "#E6E6E6",
        muted: "#8A8A96",
        primary: {
          DEFAULT: "#5603DE",
          hover: "#6A1BF0",
          soft: "#A78BFA",
        },
        brand: {
          pink: "#FC0F5F",
          violet: "#9F00FB",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        heading: "0.01em",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #FC0F5F 0%, #9F00FB 55%, #5603DE 100%)",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(86, 3, 222, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
