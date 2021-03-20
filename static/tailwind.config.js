const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // enabled: true,
    // content: ['../**/templates/*.html',
    //           '../**/templates/**/*.html'
    // ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
  ],
}



// May need to run $ npm init -y && npm install tailwindcss autoprefixer clean-css-cli && npx tailwindcss init -p
