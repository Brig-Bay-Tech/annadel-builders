/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#24272D',
        secondary: '#2B2E35',
        text: '#333333',
        accent: '#2AA0AB',
        muted: '#868A92',
        teal: '#008080',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        container: '1140px',
      },
    },
  },
  plugins: [],
};
