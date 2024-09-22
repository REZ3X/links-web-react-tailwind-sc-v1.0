/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coding': "url('https://static.wikia.nocookie.net/typemoon/images/7/79/Fate_Extella_Link_DLC_Character_Costume_31.png/revision/latest?cb=20190508030709')",
      },
      textColor: {
        'descrp' : 'rgba(211, 211, 211, 0.895)',
      },
      screens: {
        tnl: {"max": "768px"},
        pdl: {"max": "426px"},
        ttl: {"max": "376px"},
        tdn: {"max": "321px"},
      },
    },
  },
  plugins: [],
}

