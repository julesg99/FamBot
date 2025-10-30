
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DISCORD_TOKEN: string;
	export const BOT_TOKEN: string;
	export const CLIENT_ID: string;
	export const GUILD_ID: string;
	export const GUILD_IDS: string;
	export const GRAPHQL_ROOT: string;
	export const POSTGRES_USER: string;
	export const POSTGRES_PASSWORD: string;
	export const HASURA_GRAPHQL_SERVER_PORT: string;
	export const HASURA_GRAPHQL_ADMIN_SECRET: string;
	export const HASURA_GRAPHQL_METADATA_DATABASE_URL: string;
	export const PG_DATABASE_URL: string;
	export const HASURA_GRAPHQL_ENABLE_CONSOLE: string;
	export const HASURA_GRAPHQL_DEV_MODE: string;
	export const HASURA_GRAPHQL_ENABLED_LOG_TYPES: string;
	export const HASURA_GRAPHQL_METADATA_DEFAULTS: string;
	export const QUARKUS_LOG_LEVEL: string;
	export const QUARKUS_OPENTELEMETRY_ENABLED: string;
	export const MallocNanoZone: string;
	export const USER: string;
	export const SECURITYSESSIONID: string;
	export const COMMAND_MODE: string;
	export const __CFBundleIdentifier: string;
	export const PATH: string;
	export const LOGNAME: string;
	export const SSH_AUTH_SOCK: string;
	export const HOME: string;
	export const SHELL: string;
	export const TMPDIR: string;
	export const LaunchInstanceID: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const XPC_SERVICE_NAME: string;
	export const XPC_FLAGS: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const SHLVL: string;
	export const PWD: string;
	export const OLDPWD: string;
	export const HOMEBREW_PREFIX: string;
	export const HOMEBREW_CELLAR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const INFOPATH: string;
	export const NVM_DIR: string;
	export const NVM_CD_FLAGS: string;
	export const NVM_BIN: string;
	export const NVM_INC: string;
	export const JAVA_HOME: string;
	export const GIT_PAGER: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const LANG: string;
	export const COLORTERM: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VSCODE_INJECTION: string;
	export const ZDOTDIR: string;
	export const USER_ZDOTDIR: string;
	export const TERM: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const _: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DISCORD_TOKEN: string;
		BOT_TOKEN: string;
		CLIENT_ID: string;
		GUILD_ID: string;
		GUILD_IDS: string;
		GRAPHQL_ROOT: string;
		POSTGRES_USER: string;
		POSTGRES_PASSWORD: string;
		HASURA_GRAPHQL_SERVER_PORT: string;
		HASURA_GRAPHQL_ADMIN_SECRET: string;
		HASURA_GRAPHQL_METADATA_DATABASE_URL: string;
		PG_DATABASE_URL: string;
		HASURA_GRAPHQL_ENABLE_CONSOLE: string;
		HASURA_GRAPHQL_DEV_MODE: string;
		HASURA_GRAPHQL_ENABLED_LOG_TYPES: string;
		HASURA_GRAPHQL_METADATA_DEFAULTS: string;
		QUARKUS_LOG_LEVEL: string;
		QUARKUS_OPENTELEMETRY_ENABLED: string;
		MallocNanoZone: string;
		USER: string;
		SECURITYSESSIONID: string;
		COMMAND_MODE: string;
		__CFBundleIdentifier: string;
		PATH: string;
		LOGNAME: string;
		SSH_AUTH_SOCK: string;
		HOME: string;
		SHELL: string;
		TMPDIR: string;
		LaunchInstanceID: string;
		__CF_USER_TEXT_ENCODING: string;
		XPC_SERVICE_NAME: string;
		XPC_FLAGS: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		SHLVL: string;
		PWD: string;
		OLDPWD: string;
		HOMEBREW_PREFIX: string;
		HOMEBREW_CELLAR: string;
		HOMEBREW_REPOSITORY: string;
		INFOPATH: string;
		NVM_DIR: string;
		NVM_CD_FLAGS: string;
		NVM_BIN: string;
		NVM_INC: string;
		JAVA_HOME: string;
		GIT_PAGER: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		LANG: string;
		COLORTERM: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VSCODE_INJECTION: string;
		ZDOTDIR: string;
		USER_ZDOTDIR: string;
		TERM: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		_: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
