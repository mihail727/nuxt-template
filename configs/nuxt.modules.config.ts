import type { NuxtConfig } from 'nuxt';

export default {
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
	tailwindcss: {
		configPath: '~~/tailwind.config.js',
		viewer: false,
		cssPath: '../src/scss/assets/tailwind.scss',
	},
} as NuxtConfig;
