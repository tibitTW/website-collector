const { addIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/*.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './src/**/*.css',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        // Iconify plugin, requires writing list of icon sets to load
        addIconSelectors({ prefixes: ['lucide'], scale: 1 }),
        function ({ addUtilities }) {
            addUtilities({
                '.flex-center': {
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                },
            })
        },
    ],
}
