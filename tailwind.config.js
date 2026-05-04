/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

        animation: {
    'marquee-left': 'marquee-left 30s linear infinite',
    'marquee-right': 'marquee-right 30s linear infinite',
  },
  keyframes: {
    'marquee-left': {
      '0%':   { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
    'marquee-right': {
      '0%':   { transform: 'translateX(-50%)' },
      '100%': { transform: 'translateX(0)' },
    },
  },

      colors: {
 kintsugi: {
    deep: '#010725',      // AZUL MARINO oscuro 
    deepGlow: '#A8DDEB33',// Azul un poco más claro para el gradient
    plum: '#6B1F4A',      // Magenta/vino para tarjeta stats
    rose: '#8B2D5C',      // Magenta más claro para "Regala sonrisa"
    peach: '#F5C9A8',     // Durazno (igual)
    cyan: '#A8E0E8',      // Cyan claro doodle (igual)
    indigo: '#7B6FD9',    // azul-violeta para "Familia"
    lavLight: '#C8C0E8',  // Lavanda suave para borde foto manos
    cream: '#FAF3E7',     
    ink: '#0A0F25',       
  },
},
      fontFamily: {
        // Plus Jakarta para body, Fraunces como display para darle carácter
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -15px rgba(31, 18, 53, 0.25)',
        'card': '0 4px 24px -8px rgba(31, 18, 53, 0.18)',
      },


      
    },
  },
  plugins: [],
}