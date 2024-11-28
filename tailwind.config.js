/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.vue"],
    theme: {
        fontFamily: {
            "theme-heading": ["'Exo 2'", "sans-serif"],
            "theme-content": ["Alegreya Sans", "sans-serif"],
        },
        extend: {
            colors: {
                "theme-primary": "#FA5757",
                "theme-secondary": "#5368DF",
                "theme-grayish-blue": "#9194A1",
                "theme-dark-blue": "rgb(37, 43, 70)",
                "theme-dark-blue-tp": "rgba(37, 43, 70, 0.9)",
                "theme-dark-red": "#8B0000",
                "theme-dark-red-tp": "rgba(139, 0, 0, 0.9)",
                "theme-dark-grayish-red": "#A52A2A",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
