module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-background": "url('/static/images/sections/hero.jpg')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
