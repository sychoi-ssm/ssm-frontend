/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '11px',
      sm: '13px',
      base: '15px',
      lg: '17px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px'
    },
    borderRadius: {
      none: '0',
      sm: '2px',
      DEFAULT: '4px',
      lg: '6px',
      xl: '8px',
      '2xl': '12px',
      '3xl': '16px',
      '4xl': '20px',
      full: '9999px'
    },
    extend: {}
  },
  plugins: []
}
