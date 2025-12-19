import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0a',
          foreground: '#f5f5f5',
        },
        primary: {
          DEFAULT: '#38bdf8',
          foreground: '#0c4a6e',
        },
        success: {
          DEFAULT: '#22c55e',
          foreground: '#052e1c',
        },
        warning: {
          DEFAULT: '#f59e0b',
          foreground: '#3b2f0b',
        },
        error: {
          DEFAULT: '#ef4444',
          foreground: '#3f0a0a',
        },
        surface: {
          DEFAULT: '#111827',
          muted: '#0f172a',
        },
        border: {
          DEFAULT: '#1f2937',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '1.5rem',
          lg: '2rem',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.25)',
        hard: '0 4px 16px rgba(0,0,0,0.35)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        orb: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(8px, -6px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'slide-up': 'slide-up 250ms ease-out',
        shimmer: 'shimmer 1.25s linear infinite',
        orb: 'orb 5s ease-in-out infinite',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
        emphatic: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
