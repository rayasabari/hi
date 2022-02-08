module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
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
      fontSize: {
        '3xs': ['0.5rem', { lineHeight: '0.75rem' }],
        '2xs': ['0.65rem', { lineHeight: '0.85rem' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontFamily: {
        'poppins': ['"Poppins"'],
        'scp': ['"Source Code Pro"']
      },
      animation: {
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-2': 'bounce2 2s infinite',
        'bounce-3': 'bounce3 2s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounce2: {
          '0%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-5px)'
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        },
        bounce3: {
          '0%': {
            transform: 'translateX(0px)'
          },
          '50%': {
            transform: 'translateX(3px)'
          },
          '100%': {
            transform: 'translateX(0px)'
          }
        }
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
        '13': '3.5rem',
      }
    },
  },
  variants: {
    // scrollbar: ['rounded'],
    // animation: ['responsive', 'motion-safe', 'motion-reduce'],
    // extends: {
    //   transform: ['hover', 'focus'],
    // }
  }
}
