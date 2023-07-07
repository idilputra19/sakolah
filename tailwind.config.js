/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        primary: '#e6f0f9', // Warna latar belakang primer
        secondary: '#00FF00', // Warna latar belakang sekunder
        accent: '#0000FF', // Warna latar belakang aksen
      },
    },
  },
  plugins: [],
}

