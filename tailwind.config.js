// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#064886',
        linearBlue: '#20C2F5',
        closeRed: '#F41515',
        labelGray: '#D9D9D9',
        labelColor: '#747576',
        buttonBlue: '#064886',
        buttonGreen: '#18941D',
        
        
      },
      borderRadius: {
        'custom-15': '15px', // Custom border radius of 15px
      },

    },
  },
  plugins: [],
}
