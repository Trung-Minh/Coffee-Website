/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
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
                }
            },
            animation: {
                slideDown: 'slideDown .4s ease-in-out'
            },
            backgroundImage: {
                'slider-bg': 'url("./image/slider.jpg")'
            }
        },
    },
    plugins: [],
};