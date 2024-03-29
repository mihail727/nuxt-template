import { defineNuxtConfig } from 'nuxt/config';
import modulesConfig from './configs/nuxt.modules.config';

export default defineNuxtConfig({
	...modulesConfig,
	nitro: {
		output: {
			dir: '~~/build',
		},
	},
	srcDir: 'src',
});
