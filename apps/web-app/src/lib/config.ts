// Environment configuration
export const env = {
	// GraphQL endpoint for Hasura
	GRAPHQL_ENDPOINT: import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:8080/v1/graphql',
	GRAPHQL_WS_ENDPOINT: import.meta.env.VITE_GRAPHQL_WS_ENDPOINT || 'ws://localhost:8080/v1/graphql',
	
	// Public app configuration
	PUBLIC_APP_NAME: import.meta.env.VITE_PUBLIC_APP_NAME || 'FamBot Web',
	
	// Development mode
	DEV: import.meta.env.DEV,
	MODE: import.meta.env.MODE
};

// API configuration
export const apiConfig = {
	timeout: 10000,
	retries: 3
};

// App constants
export const APP_VERSION = '0.0.1';
export const APP_NAME = 'FamBot Web';