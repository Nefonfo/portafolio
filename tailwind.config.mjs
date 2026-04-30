/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0d',
        ink: '#f0ede8',
        mid: '#999999',
        muted: '#777777',
        accent: 'oklch(52% 0.22 305)',
        rule: '#f0ede8',
        border: {
          hard: '#f0ede8',
          soft: '#222222',
          dim: '#333333',
        },
      },
      fontFamily: {
        mono: ['"Space Mono"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.62rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        tag: ['0.65rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
        xs: ['0.68rem', { lineHeight: '1.4', letterSpacing: '0.06em' }],
        sm: ['0.72rem', { lineHeight: '1.6', letterSpacing: '0.1em' }],
        body: ['0.82rem', { lineHeight: '1.75' }],
        base: ['0.85rem', { lineHeight: '1.6', letterSpacing: '0.05em' }],
      },
      maxWidth: {
        site: '1100px',
      },
      borderWidth: {
        1: '1px',
        2: '2px',
      },
    },
  },
  plugins: [],
};
