/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forge: {
          orange:      '#C4511A',
          'orange-d':  '#9B3C10',
          'orange-l':  '#E8723D',
          'orange-xl': '#F5E5D8',
          steel:       '#2C3A4A',
          'steel-m':   '#3E5368',
          'steel-l':   '#DCE5EE',
          sand:        '#F1EFE9',
          'sand-d':    '#E8E4DC',
          gold:        '#A87820',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.2rem,8vw,6rem)',   { lineHeight: '0.95', letterSpacing: '0.01em' }],
        'display-lg': ['clamp(2.2rem,5vw,3.6rem)',  { lineHeight: '1.0',  letterSpacing: '0.01em' }],
        'display-md': ['clamp(1.5rem,3vw,2rem)',    { lineHeight: '1.05', letterSpacing: '0.01em' }],
      },
      boxShadow: {
        'forge-sm': '0 2px 12px 0 rgba(196,81,26,0.10)',
        'forge-md': '0 8px 32px 0 rgba(196,81,26,0.14)',
        'forge-lg': '0 20px 60px 0 rgba(196,81,26,0.18)',
        'card':     '0 1px 4px 0 rgba(0,0,0,0.06), 0 4px 24px 0 rgba(0,0,0,0.08)',
        'card-hover':'0 8px 40px 0 rgba(0,0,0,0.14)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(44,58,74,0.95) 0%, rgba(44,58,74,0.75) 50%, rgba(44,58,74,0.4) 100%)',
        'card-gradient': 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.0) 60%)',
        'orange-gradient':'linear-gradient(135deg, #C4511A 0%, #9B3C10 100%)',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease both',
        'fade-in':   'fadeIn 0.5s ease both',
        'slide-in':  'slideIn 0.6s ease both',
      },
      keyframes: {
        fadeUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        slideIn: { from: { opacity: '0', transform: 'translateX(-16px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
      },
      transitionTimingFunction: {
        'forge': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
};
