import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import svelteConfig from './svelte.config.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: ['node_modules/**', '.svelte-kit/**', 'build/**', 'dist/**']
	},
	js.configs.recommended,
	...svelte.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				svelteConfig
			}
		},
		rules: {
			// This is a great rule for apps that strictly want SvelteKit navigation helpers,
			// but this project intentionally uses normal anchors (hash links + external links).
			'svelte/no-navigation-without-resolve': 'off'
		}
	}
];
