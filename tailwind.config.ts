
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				wedding: {
					'midnight': '#1A1A40',
					'gold': '#F7E1A9',
					'sage': '#B5C99A',
					'blush': '#E6A4B4',
					'charcoal': '#3E3E3E',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				cursive: ['Great Vibes', 'cursive']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				fadeInSlide: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'fade-in-slide': 'fadeInSlide 0.8s ease-out forwards',
				'shimmer': 'shimmer 2s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			backgroundImage: {
				'gold-gradient': 'linear-gradient(45deg, #F7E1A9, #E6C677, #F7E1A9)',
				'blush-gradient': 'linear-gradient(45deg, #E6A4B4, #F7C8D1, #E6A4B4)',
				'sage-gradient': 'linear-gradient(45deg, #B5C99A, #D1E0C1, #B5C99A)',
				'midnight-gradient': 'linear-gradient(45deg, #1A1A40, #2A2A60, #1A1A40)',
				'glass-card': 'linear-gradient(120deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
			},
			boxShadow: {
				'gold': '0 4px 20px rgba(247, 225, 169, 0.25)',
				'shine': '0 0 10px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 50px rgba(255, 255, 255, 0.2)',
				'elegant': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)'
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
				'width': 'width',
				'transform': 'transform'
			},
			transitionTimingFunction: {
				'elegant': 'cubic-bezier(0.4, 0, 0.2, 1)'
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
