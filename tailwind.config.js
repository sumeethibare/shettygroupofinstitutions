/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  /* the code for customised fonts and other customizations */

  /*  theme: {
      extend: {
      },
    },
  */

  daisyui: {
    themes: ["pastel"],
  },

  plugins: [
    require('daisyui'),
  ],
};
