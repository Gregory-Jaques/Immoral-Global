/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                'Lexend': ['Lexend', 'system-ui', 'sans-serif'],
            }
        }
    },
    plugins: [], safelist: ['hover:!text-[#4889eb]', 'hover:!border-[#4889eb]'],
}