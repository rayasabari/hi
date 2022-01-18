module.exports = {
  mode: ['jit'],
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
      fontFamily: {
        'poppins': ['"Poppins"'],
        'scp': ['"Source Code Pro"']
      },
      animation: {
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 7s cubic-bezier(0, 0, 0.2, 1) infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
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
    scrollbar: ['rounded'],
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extends: {
      transform: ['hover', 'focus'],
    }
  }
}
