/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#FF8000',
        secondary: '#10B981',
        accent: '#F59E0B',
      },
      boxShadow: {
        'neo': '5px 5px 0px 0px rgba(0,0,0,0.1)',
    },
    
  },
  backdropFilter: {
      'none': 'none',
      'blur': 'blur(10px)',
    },
},
  plugins: [
    require('tailwindcss-filters'),
  ],
}

