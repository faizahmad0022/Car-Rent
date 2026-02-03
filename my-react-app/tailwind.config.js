import animate from 'tailwindcss-animate';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
      }
    }
  },
  plugins: [animate],
} 
