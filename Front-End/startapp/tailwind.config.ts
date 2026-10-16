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
        "card-hover": "0 20px 60px -24px rgba(86, 3, 222, 0.55)",
      },
      spacing: {
        13: "3.25rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", translate: "0 24px" },
          to: { opacity: "1", translate: "0 0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-down": {
          from: { opacity: "0", translate: "0 -8px" },
          to: { opacity: "1", translate: "0 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "scale-in": "scale-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-down": "slide-down 0.25s ease-out both",
        float: "float 7s ease-in-out infinite",
        glow: "glow 8s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
