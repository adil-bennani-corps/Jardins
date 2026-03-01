import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        /* Deep Forest Green */
        primary: {
          50:  "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          950: "var(--color-primary-950)",
        },
        /* Golden Oak */
        secondary: {
          50:  "var(--color-secondary-50)",
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
          950: "var(--color-secondary-950)",
        },
        /* Accent Slate Grey */
        "accent-slate": {
          50:  "var(--color-accent-slate-50)",
          100: "var(--color-accent-slate-100)",
          200: "var(--color-accent-slate-200)",
          300: "var(--color-accent-slate-300)",
          400: "var(--color-accent-slate-400)",
          500: "var(--color-accent-slate-500)",
          600: "var(--color-accent-slate-600)",
          700: "var(--color-accent-slate-700)",
          800: "var(--color-accent-slate-800)",
          900: "var(--color-accent-slate-900)",
          950: "var(--color-accent-slate-950)",
        },
        /* Accent Sky Blue */
        "accent-sky": {
          50:  "var(--color-accent-sky-50)",
          100: "var(--color-accent-sky-100)",
          200: "var(--color-accent-sky-200)",
          300: "var(--color-accent-sky-300)",
          400: "var(--color-accent-sky-400)",
          500: "var(--color-accent-sky-500)",
          600: "var(--color-accent-sky-600)",
          700: "var(--color-accent-sky-700)",
          800: "var(--color-accent-sky-800)",
        },
        /* Ivory-Charcoal Neutrals */
        ivory: {
          DEFAULT: "var(--color-neutral-50)",
          50:  "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
        },
        charcoal: {
          DEFAULT: "var(--color-neutral-950)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
          950: "var(--color-neutral-950)",
        },
        /* Semantic surface tokens */
        surface: {
          DEFAULT: "var(--surface)",
          raised:  "var(--surface-raised)",
          overlay: "var(--surface-overlay)",
        },
        foreground: {
          DEFAULT:   "var(--foreground)",
          muted:     "var(--foreground-muted)",
          subtle:    "var(--foreground-subtle)",
        },
      },
      fontSize: {
        xs:   ["0.75rem",  { lineHeight: "1rem",    letterSpacing: "0.01em" }],
        sm:   ["0.875rem", { lineHeight: "1.25rem",  letterSpacing: "0.005em" }],
        base: ["1rem",     { lineHeight: "1.625rem", letterSpacing: "0" }],
        lg:   ["1.125rem", { lineHeight: "1.75rem",  letterSpacing: "-0.005em" }],
        xl:   ["1.25rem",  { lineHeight: "1.875rem", letterSpacing: "-0.01em" }],
        "2xl":["1.5rem",   { lineHeight: "2rem",     letterSpacing: "-0.015em" }],
        "3xl":["2rem",     { lineHeight: "2.5rem",   letterSpacing: "-0.02em" }],
        "4xl":["2.5rem",   { lineHeight: "3rem",     letterSpacing: "-0.025em" }],
        "5xl":["3.25rem",  { lineHeight: "3.75rem",  letterSpacing: "-0.03em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section-sm": "3rem",
        "section-md": "5rem",
        "section-lg": "6rem",
        "section-xl": "8rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "soft-sm": "0 1px 2px 0 rgba(39, 36, 32, 0.05)",
        "soft-md": "0 4px 6px -1px rgba(39, 36, 32, 0.07), 0 2px 4px -2px rgba(39, 36, 32, 0.05)",
        "soft-lg": "0 10px 15px -3px rgba(39, 36, 32, 0.08), 0 4px 6px -4px rgba(39, 36, 32, 0.04)",
        "soft-xl": "0 20px 25px -5px rgba(39, 36, 32, 0.1), 0 8px 10px -6px rgba(39, 36, 32, 0.05)",
        "glow-primary": "0 0 20px rgba(53, 132, 66, 0.15)",
        "glow-secondary": "0 0 20px rgba(212, 147, 51, 0.15)",
      },
      transitionDuration: {
        "instant": "75ms",
        "fast":    "150ms",
        "normal":  "250ms",
        "slow":    "400ms",
        "slower":  "600ms",
      },
      transitionTimingFunction: {
        "organic": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "spring":  "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      keyframes: {
        "fade-in": {
          "0%":   { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in":  "fade-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-up": "slide-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "scale-in": "scale-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
