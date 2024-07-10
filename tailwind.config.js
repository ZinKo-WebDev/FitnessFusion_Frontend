/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'opensans': ['"Open Sans"'],
      'bebas': ['"Bebas Neue", sans-serif'],
      'poppin': ['"Poppins", sans-serif'],
    }
  },
  plugins: [],
}