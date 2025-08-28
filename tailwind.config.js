/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        magic: {
          pink: '#ff6b9d',
          blue: '#4ecdc4',
          purple: '#9b59b6',
          gold: '#feca57',
          teal: '#45b7d1',
        },
        gradient: {
          start: '#0c0c0c',
          middle: '#1a1a2e',
          end: '#533483',
        }
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'aurora': 'aurora 8s ease-in-out infinite',
        'petal-fall': 'petal-fall 4s linear infinite',
        'firework': 'firework 2s ease-out infinite',
        'snow-fall': 'snow-fall 10s linear infinite',
        'water-ripple': 'water-ripple 3s ease-out infinite',
        'magic-trail': 'magic-trail 4s linear infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'envelope-open': 'envelope-open 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'text-reveal': 'text-reveal 0.8s ease-out',
        'particle-float': 'particle-float 8s ease-in-out infinite',
        'star-twinkle': 'star-twinkle 3s ease-in-out infinite',
        'confetti-fall': 'confetti-fall 4s linear forwards',
        'rainbow-trail': 'rainbow-trail 3s linear forwards',
        'magic-burst': 'magic-burst 0.6s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'morph': 'morph 4s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'scale-breathe': 'scale-breathe 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in-scale': 'fade-in-scale 1s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'zoom-in': 'zoom-in 0.6s ease-out',
        'flip-in': 'flip-in 0.8s ease-out',
        'shake': 'shake 0.8s ease-in-out',
        'wiggle': 'wiggle 0.6s ease-in-out',
        'bounce-in': 'bounce-in 0.8s ease-out',
        'slide-down': 'slide-down 0.8s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
        'fade-in-right': 'fade-in-right 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            textShadow: '0 0 10px rgba(184, 230, 255, 0.5)',
            filter: 'drop-shadow(0 0 10px rgba(184, 230, 255, 0.5))'
          },
          '50%': { 
            textShadow: '0 0 20px rgba(184, 230, 255, 0.8)',
            filter: 'drop-shadow(0 0 20px rgba(184, 230, 255, 0.8))'
          },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        sparkle: {
          '0%, 100%': { 
            opacity: '0',
            transform: 'scale(0) rotate(0deg)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1) rotate(180deg)'
          },
        },
        aurora: {
          '0%, 100%': { 
            transform: 'translateX(-100%) rotate(0deg)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'translateX(100%) rotate(180deg)',
            opacity: '1'
          },
        },
        'petal-fall': {
          '0%': { 
            transform: 'translateY(-100vh) rotate(0deg)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100vh) rotate(360deg)',
            opacity: '0'
          },
        },
        firework: {
          '0%': { 
            transform: 'scale(0)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(1.5)',
            opacity: '0'
          },
        },
        'snow-fall': {
          '0%': { 
            transform: 'translateY(-100vh) rotate(0deg)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100vh) rotate(720deg)',
            opacity: '0'
          },
        },
        'water-ripple': {
          '0%': { 
            transform: 'scale(0)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(3)',
            opacity: '0'
          },
        },
        'magic-trail': {
          '0%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(0) rotate(360deg)',
            opacity: '0'
          },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        'envelope-open': {
          '0%': { 
            transform: 'rotateX(0deg) scale(1)',
            filter: 'drop-shadow(0 0 30px rgba(255, 107, 157, 0.3))'
          },
          '100%': { 
            transform: 'rotateX(180deg) scale(1.2)',
            filter: 'drop-shadow(0 0 60px rgba(255, 107, 157, 0.8))'
          },
        },
        'text-reveal': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px) scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          },
        },
        'particle-float': {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'translateY(-30px) rotate(180deg)',
            opacity: '1'
          },
        },
        'star-twinkle': {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.5)'
          },
        },
        'confetti-fall': {
          '0%': { 
            transform: 'translateY(-100vh) rotate(0deg)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100vh) rotate(720deg)',
            opacity: '0'
          },
        },
        'rainbow-trail': {
          '0%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(0)',
            opacity: '0'
          },
        },
        'magic-burst': {
          '0%': { 
            transform: 'scale(0)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(2)',
            opacity: '0'
          },
        },
        'glow-pulse': {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 20px rgba(255, 107, 157, 0.5))'
          },
          '50%': { 
            filter: 'drop-shadow(0 0 40px rgba(255, 107, 157, 0.8))'
          },
        },
        shimmer: {
          '0%': { 
            backgroundPosition: '-200% 0'
          },
          '100%': { 
            backgroundPosition: '200% 0'
          },
        },
        morph: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
          },
          '50%': { 
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
          },
        },
        wave: {
          '0%, 100%': { 
            transform: 'rotate(0deg)'
          },
          '25%': { 
            transform: 'rotate(20deg)'
          },
          '75%': { 
            transform: 'rotate(-20deg)'
          },
        },
        'bounce-gentle': {
          '0%, 100%': { 
            transform: 'translateY(0)'
          },
          '50%': { 
            transform: 'translateY(-10px)'
          },
        },
        'rotate-slow': {
          '0%': { 
            transform: 'rotate(0deg)'
          },
          '100%': { 
            transform: 'rotate(360deg)'
          },
        },
        'scale-breathe': {
          '0%, 100%': { 
            transform: 'scale(1)'
          },
          '50%': { 
            transform: 'scale(1.05)'
          },
        },
        'slide-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-scale': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.8)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'slide-in-left': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'slide-in-right': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'zoom-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.5)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'flip-in': {
          '0%': { 
            opacity: '0',
            transform: 'rotateY(-90deg)'
          },
          '100%': { 
            opacity: '1',
            transform: 'rotateY(0deg)'
          },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-8px)' },
          '75%': { transform: 'translateX(8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'bounce-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.3)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05)'
          },
          '70%': { 
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'slide-down': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-down': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-left': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in-right': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-magic': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-aurora': 'linear-gradient(45deg, #ff6b9d, #4ecdc4, #45b7d1, #feca57)',
        'gradient-cosmic': 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
        'gradient-sunset': 'linear-gradient(45deg, #ff6b9d, #c44569, #feca57, #ff9ff3)',
        'gradient-ocean': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'gradient-forest': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-fire': 'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
        'gradient-ice': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'gradient-galaxy': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      boxShadow: {
        'magic': '0 0 30px rgba(255, 107, 157, 0.5)',
        'magic-lg': '0 0 50px rgba(255, 107, 157, 0.7)',
        'magic-xl': '0 0 80px rgba(255, 107, 157, 1)',
        'aurora': '0 0 40px rgba(78, 205, 196, 0.6)',
        'cosmic': '0 20px 60px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(255, 107, 157, 0.2)',
      },
      textShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.8)',
        'magic': '0 0 20px rgba(255, 107, 157, 0.8)',
        'aurora': '0 0 20px rgba(78, 205, 196, 0.8)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
} 