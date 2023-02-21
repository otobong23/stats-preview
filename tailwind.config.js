/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      inter: ['Inter', 'sans serif'],
      lexendDeca: ['Lexend Deca', 'sans serif']
    },
    fontWeight:{
      normal: 400,
      bold: 700
    },
    colors: {
      VeryDarkBlue: 'hsl(233, 47%, 7%)',
      Darkdesaturatedblue: 'hsl(244, 38%, 16%)',
      Softviolet: 'hsl(277, 64%, 61%)',
      White: 'hsl(0, 0%, 100%)',
      Slightlytransparentwhitemain: 'hsla(0, 0%, 100%, 0.75)',
      Slightlytransparentwhite: 'hsla(0, 0%, 100%, 0.6)'
    },
    minHeight:{
      Overflow: '100vh',
    },
    maxWidth:{
      breakWidth: '700px'
    },
  },
  plugins: [],
}
