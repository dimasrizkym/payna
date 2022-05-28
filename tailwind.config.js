const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    minWidth: {
      '2/5': '40%',
    },
    extend: {
      fontFamily: {
        'sans': ['"Poppins"', 'sans-serif', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '3xl': ['2.375rem', {
          lineHeight: '3.563rem',
        }],
        '6xl': ['3.438rem', {
          lineHeight: '5.125rem',
        }],
      },
      maxHeight: {
        '7': '1.875',
      }
    },
  },
  plugins: [],
}
