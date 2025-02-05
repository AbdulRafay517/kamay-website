module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		animation: {
		  'glow-pulse': 'glow-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
		  'glow-scale': 'glow-scale 3s ease-in-out infinite',
		  'text-gradient': 'text-gradient 4s linear infinite',
		  'blob': "blob 7s infinite",
		  'float': 'float 6s ease-in-out infinite',
		  'float-delayed': 'float 6s ease-in-out 1.5s infinite',
		  'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
		'gradient-text': 'gradient-text 4s ease infinite',
		'pulse': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
		},
		keyframes: {
			'gradient-text': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
		fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
		},
			'float': {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-20px)' },
			},
		  'glow-pulse': {
			'0%, 100%': { opacity: '0.4' },
			'50%': { opacity: '0.2' },
		  },
		  'glow-scale': {
			'0%, 100%': { transform: 'scale(0.95)', opacity: '0.6' },
			'50%': { transform: 'scale(1.05)', opacity: '0.8' },
		  },
		  'text-gradient': {
			'0%': { 'background-position': '200% center' },
			'100%': { 'background-position': '-200% center' },
		  },
		  'blob': {
			"0%": { transform: "translate(0px, 0px) scale(1)" },
			"33%": { transform: "translate(30px, -50px) scale(1.1)" },
			"66%": { transform: "translate(-20px, 20px) scale(0.9)" },
			"100%": { transform: "translate(0px, 0px) scale(1)" },
		  },
		},
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
	  },
	},
	plugins: [
	  require('tailwindcss-animate'),
	],
  }