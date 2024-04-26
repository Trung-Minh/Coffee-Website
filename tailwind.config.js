/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                "Karla": ['Karla', 'sans-serif']
            },
            colors: {
                "light-coffee": "#c89f94",
            },
            keyframes: {
                slideDown: {
                    '0%': { transform: 'transformY(-100%)' },
                    '100%': { transform: 'transformY(0)' },
                }
            },
            animation: {
                slideDown: 'slideDown .4s ease-in-out'
            }
        },
    },
    plugins: [],
};