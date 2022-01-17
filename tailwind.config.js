module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'product-background': "url('/src/assets/Layout 54.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
