const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
      "primary": "#007bff",
      "secondary": '#243c5a',

      "gray": {
        "light": "#f8f9fa",
        "mid": "#6c757d",
        "dark": "#343a40",

      "success": "#28a745",
      "danger": "#dc3545",
      "warning": "#ffc107",
      "info": "#17a2b8",
    },
  },
}

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
    content: ['../**/templates/*.html',
              '../**/templates/**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia', 'serif'],
        'mono': ['Source Code Pro'],
        'display': ['Ranchers', 'cursive'],
        'body': ['Open Sans'],
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
