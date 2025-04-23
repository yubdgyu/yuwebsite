/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      textColor: {
        brand: 'var(--color-brand)',
      },
      backgroundColor: {
        'skin-fill': 'var(--color-bg)',
        'skin-card': 'var(--color-bg-secondary)',
      },
      borderColor: {
        'skin-line': 'var(--color-tx-secondary)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} 