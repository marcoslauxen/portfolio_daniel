/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa',
          100: '#cce1f5',
          200: '#99c3eb',
          300: '#66a5e0',
          400: '#3387d6',
          500: '#0066cc',
          600: '#0052a3',
          700: '#003d7a',
          800: '#002952',
          900: '#001429',
        },
        secondary: {
          50: '#fff0e6',
          100: '#ffe1cc',
          200: '#ffc299',
          300: '#ffa366',
          400: '#ff8533',
          500: '#ff6b00',
          600: '#cc5500',
          700: '#994000',
          800: '#662b00',
          900: '#331500',
        },
        accent: {
          50: '#e6fff5',
          100: '#ccffeb',
          200: '#99ffd6',
          300: '#66ffc2',
          400: '#33ffad',
          500: '#00cc88',
          600: '#00a36d',
          700: '#007a52',
          800: '#005236',
          900: '#00291b',
        },
      },
      fontFamily: {
        sans: [
          'Inter', 
          'system-ui', 
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};