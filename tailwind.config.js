/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'newUser': "url('assets/img/newUser.svg')",
        'subscribes': "url('assets/img/subscribes.svg')"
      }
    },
  },
  plugins: [],
}
