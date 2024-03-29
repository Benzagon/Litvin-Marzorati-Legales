import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["var(--font-poppins)"],
        "meshedDisplay": ["var(--font-meshedDisplay)"],
        "dmSerif": ["var(--font-dmSerif)"],
        "ubuntu": ["var(--font-ubuntu)"],
      },
      colors: {
        background: {
          DEFAULT: "var(--color-background)",
        },
        accent: {
          orange: "var(--accent-orange)",
          brown: "var(--accent-brown)",
        },
        footer: {
          DEFAULT: "var(--color-footer)",
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
        moveBg: 'moveBg 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        moveBg: {
          '0%': { 'background-position': '100%' },
          '25%': { 'background-position': '100%' },
          '50%': { 'background-position': '0%' },
          '75%': { 'background-position': '0%' },
          '100%': { 'background-position': '100%' },
        },
      },
      screens: {
        'service': '1370px',
        '3xl': '1600px',
      },
    },
  },
  // @ts-ignore
  darkMode: "false", 
  plugins: [],
}

export default config