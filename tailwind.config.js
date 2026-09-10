/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF10F0',
        'neon-purple': '#9D4EDD',
        'neon-cyan': '#00D9FF',
        'dark-bg': '#0a0e27',
        'darker-bg': '#050812',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'waveform': 'waveform 0.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 16, 240, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 16, 240, 0.8)' },
        },
        'waveform': {
          '0%, 100%': { height: '20%' },
          '50%': { height: '100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
