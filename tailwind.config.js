/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFBFD',
        foreground: '#0D1B2A',
        card: '#FFFFFF',
        'card-foreground': '#0D1B2A',
        border: '#E2E8F0',
        muted: '#F1F5F9',
        'muted-foreground': '#64707A',
        navy: {
          DEFAULT: '#0D1B2A',
          deep: '#070F18',
          card: '#132235',
        },
        red: {
          brand: '#D71920',
          hover: '#B5141A',
        },
        teal: {
          DEFAULT: '#0D1B2A',
          foreground: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '420px',
      }
    },
  },
  plugins: [],
}
