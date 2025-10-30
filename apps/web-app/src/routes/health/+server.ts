import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	// Simple health check endpoint
	return new Response(
		JSON.stringify({
			status: 'healthy',
			timestamp: new Date().toISOString(),
			service: 'fambot-web',
			version: '0.0.1'
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
};