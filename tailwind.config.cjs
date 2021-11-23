/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */

/** @type { DefaultTheme & { theme: { extend: DefaultTheme } } } */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				story: {
					blue: '#4940f0',
					red: 'rgb(240, 81, 108)'
				}
			},
			width: {
				'fit-content': 'fit-content'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
