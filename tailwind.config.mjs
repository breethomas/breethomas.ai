/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Light theme backgrounds
        'bg-primary': '#FFFFFF',
        'bg-surface': '#FAFAFA',

        // Accent colors
        'accent-purple': '#8B7FF4',
        'accent-purple-hover': '#7366d9',
        'accent-yellow': '#F7D047',

        // Text colors
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B7280',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      fontSize: {
        // Giant serif headlines
        'giant': ['10rem', { lineHeight: '0.85', fontWeight: '400' }],
        'giant-md': ['8rem', { lineHeight: '0.85', fontWeight: '400' }],
        'giant-sm': ['6rem', { lineHeight: '0.85', fontWeight: '400' }],
        // Regular sizes
        'hero': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'card-title': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],
      },
      spacing: {
        'section': '6rem',
        'section-lg': '8rem',
      },
    },
  },
  plugins: [],
};
