const colors = require('tailwindcss/colors')
module.exports = {
  mode: ['jit'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      cyan: colors.cyan,
      fuchsia: colors.fuchsia,
      teal: colors.teal,
      lime: colors.lime,
      rose: colors.rose,
      sky: colors.sky,
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      emerald: colors.emerald,
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"'],
        'scp': ['"Source Code Pro"']
      },
      animation: {
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        bounce: 'bounce 2s ',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded'],
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extends: {
      transform: ['hover', 'focus'],
    }
  }
}
