/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Background colors
        'bg-primary': '#0D0D0D',
        'bg-surface': '#1A1A1A',
        'bg-elevated': '#242424',

        // Accent colors (from Balance)
        'accent-purple': '#7C3AED',
        'accent-purple-hover': '#8B5CF6',
        'accent-yellow': '#F7D047',

        // Text colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#A1A1A1',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'card-title': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],
      },
      spacing: {
        'section': '6rem',
      },
    },
  },
  plugins: [],
};
