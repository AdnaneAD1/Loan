module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    safelist: [
        'clearfix',
        'dropdown',
        'navigation',
        // Ajoutez toutes les autres classes que vous souhaitez protéger ici
    ],
    theme: {},
    plugins: [require('@tailwindcss/forms')],
}
