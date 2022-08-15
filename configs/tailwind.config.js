/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'~~/src/components/**/*.{vue,js,ts}',
		'~~/src/layouts/**/*.{vue,js,ts}',
		'~~/src/pages/**/*.{vue,js,ts}',
		'~~/src/app.vue',
		'~~/src/composables/**/*.{tsx,jsx,ts,js}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
