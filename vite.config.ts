import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { resolve } from 'path'

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: resolve('./src/lib'),
			$comps: resolve('./src/lib/components'),
		}
	}
};

export default config;
