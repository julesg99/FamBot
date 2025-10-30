<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;
	let currentTime = new Date().toLocaleTimeString();

	onMount(() => {
		mounted = true;
		
		// Update time every second
		const interval = setInterval(() => {
			currentTime = new Date().toLocaleTimeString();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<svelte:head>
	<title>FamBot Web - Family Activities Dashboard</title>
	<meta name="description" content="Web dashboard for FamBot family activities and film nights" />
</svelte:head>

<div class="container">
	<header class="header">
		<h1>🤖 FamBot Web</h1>
		<p class="subtitle">Family Activities Dashboard</p>
		{#if mounted}
			<p class="time">Current time: {currentTime}</p>
		{/if}
	</header>

	<main class="main-content">
		<div class="welcome-card">
			<h2>Welcome to FamBot!</h2>
			<p>
				This is the web interface for FamBot, your family's Discord bot for managing activities,
				film nights, and voting.
			</p>
			
			<div class="features">
				<div class="feature-card">
					<h3>🎬 Film Nights</h3>
					<p>Manage movie nominations and voting for family film nights.</p>
				</div>
				
				<div class="feature-card">
					<h3>🗳️ Voting System</h3>
					<p>Create and participate in family polls and decisions.</p>
				</div>
				
				<div class="feature-card">
					<h3>📊 Dashboard</h3>
					<p>View real-time activity and statistics from your Discord server.</p>
				</div>
			</div>
		</div>

		<div class="status-card">
			<h3>System Status</h3>
			<div class="status-items">
				<div class="status-item">
					<span class="status-indicator ready"></span>
					<span>Web App: Ready</span>
				</div>
				<div class="status-item">
					<span class="status-indicator pending"></span>
					<span>Discord Bot: Connecting...</span>
				</div>
				<div class="status-item">
					<span class="status-indicator pending"></span>
					<span>Database: Connecting...</span>
				</div>
			</div>
		</div>
	</main>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.header h1 {
		font-size: 3rem;
		margin-bottom: 0.5rem;
		background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: 1.2rem;
		opacity: 0.8;
		margin-bottom: 1rem;
	}

	.time {
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
		opacity: 0.6;
	}

	.main-content {
		display: grid;
		gap: 2rem;
		grid-template-columns: 1fr;
	}

	.welcome-card, .status-card {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		border-radius: 12px;
		padding: 2rem;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.welcome-card h2 {
		margin-top: 0;
		margin-bottom: 1rem;
		font-size: 1.8rem;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.feature-card {
		background: rgba(255, 255, 255, 0.05);
		padding: 1.5rem;
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: transform 0.2s ease, background-color 0.2s ease;
	}

	.feature-card:hover {
		transform: translateY(-2px);
		background: rgba(255, 255, 255, 0.08);
	}

	.feature-card h3 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		font-size: 1.2rem;
	}

	.status-items {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-top: 1rem;
	}

	.status-item {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	.status-indicator {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		display: inline-block;
	}

	.status-indicator.ready {
		background-color: #4caf50;
		box-shadow: 0 0 8px rgba(76, 175, 80, 0.6);
	}

	.status-indicator.pending {
		background-color: #ff9800;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(255, 152, 0, 0.7);
		}
		70% {
			box-shadow: 0 0 0 8px rgba(255, 152, 0, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(255, 152, 0, 0);
		}
	}

	@media (min-width: 768px) {
		.main-content {
			grid-template-columns: 2fr 1fr;
		}
	}
</style>