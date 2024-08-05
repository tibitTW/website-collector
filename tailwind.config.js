const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        // Iconify plugin, requires writing list of icon sets to load
        addIconSelectors(["lucide"]),
    ],
};
