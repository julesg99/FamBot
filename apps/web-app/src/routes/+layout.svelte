<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	// Environment variables
	let appName = 'FamBot Web';
	
	onMount(() => {
		// Initialize app
		console.log('FamBot Web App initialized');
	});
</script>

<main>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding: 1rem;
		width: 100%;
		max-width: none;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>