const defaultTheme = require('tailwindcss/defaultTheme')
    /** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        screens: {
            'xs': '480px',
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                "Karla": ['Karla', 'sans-serif']
            },
            colors: {
                "coffee": {
                    100: "#e8d6d0",
                    200: "#c89f94",
                    300: "#a25f4b",
                    400: "#744838"
                }
            },
            keyframes: {
                slideDown: {
                    '0%': { transform: 'transformY(-100%)' },
                    '100%': { transform: 'transformY(0)' },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                }
            },
            animation: {
                slideDown: 'slideDown .4s ease-in-out',
                fadeIn: 'fadeIn .5s ease-in-out'
            },
            backgroundImage: {
                'slider-bg': 'url("./image/slider.jpg")'
            },
        },
    },
    plugins: [
        function({ addUtilities }) {
            addUtilities({
                '.transform-preserve-3d': {
                    'transform-style': 'preserve-3d',
                },
                '.translate-z-scale': {
                    'transform': 'translateZ(-1px) scale(1.5)',
                },
                '.perspective-2': {
                    'perspective': '2px',
                },
            });
        }
    ],
};