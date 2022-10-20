import type { NuxtConfig } from 'nuxt/config';

export default {
	modules: ['@vueuse/nuxt'],
	css: ['normalize.css', '~/assets/scss/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "~/assets/scss/variables";`,
				},
			},
		},
	},
} as NuxtConfig;
