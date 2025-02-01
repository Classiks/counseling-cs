/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			'xs': '500px'
  		},
  		colors: {
  			'step': {
  				'100': '#ffeacc',
  				'200': '#ffd699',
  				'300': '#ffc166',
  				'400': '#ffad33',
  				'500': '#ff9800',
  				'600': '#cc7a00',
  				'700': '#995b00',
  				'800': '#663d00',
  				'900': '#331e00',
  				DEFAULT: '#FF9800',
  				'background': '#FFFFFF',
  				'text': '#2c2c2c',
  				'textInverted': '#FFFFFF'
  			},
  			'tcm': {
  				'100': '#d1edd4',
  				'200': '#a3dba9',
  				'300': '#75c97d',
  				'400': '#47b752',
  				'500': '#19a527',
  				'600': '#14841f',
  				'700': '#0f6317',
  				'800': '#0a4210',
  				'900': '#052108',
  				DEFAULT: '#19a527',
  				'background': '#FFFFFF',
  				'text': '#FFFFFF',
  				'textInverted': '#000000'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			pulse: {
  				'0%, 100%': {
  					transform: 'scale(1)',
  					opacity: 1
  				},
  				'50%': {
  					transform: 'scale(1.05)',
  					opacity: 1
  				}
  			}
  		},
  		animation: {
  			pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

