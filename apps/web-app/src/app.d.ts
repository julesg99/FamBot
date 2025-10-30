/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_GRAPHQL_ENDPOINT: string;
	readonly VITE_GRAPHQL_WS_ENDPOINT: string;
	readonly VITE_PUBLIC_APP_NAME: string;
	readonly VITE_HASURA_ADMIN_SECRET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}