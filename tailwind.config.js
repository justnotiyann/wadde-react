/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'poppins': ["Poppins", " sans-serif"],
            'grotesk': ["Space Grotesk", " sans-serif"],
        },
        extend: {
            animation: {
                marquee: 'marquee 25s linear infinite',
                marquee2: 'marquee2 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
            colors: {
                primary: {
                    brand: "#F15757",
                    dark: {
                        100: "#333333",
                        200: '#282828',
                        300: '#1C1C1C',
                        400: '#272727'

                    },
                    gray: "#9ca3af",
                    blue: "#1560F2"
                }
            }
        },
    },
    plugins: [],
}
