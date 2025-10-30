# FamBot

A Discord bot for managing family activities with GraphQL API backend.

## Architecture

FamBot is organized as a microservices architecture with the following components:

- **[Discord Bot](./apps/discord-bot/)** - TypeScript Discord bot handling commands and events
- **[Hasura GraphQL Engine](./apps/hasura/)** - GraphQL API layer with metadata and migrations
- **[PostgreSQL Database](./apps/postgres/)** - Database service for persistent storage

## Quick Start

1. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

2. Fill in your Discord bot token and other required environment variables in `.env`

3. Start all services:

   ```bash
   docker compose up
   ```

4. The bot should now be running and connected to Discord!

## Development

See the [apps directory](./apps/) for individual service documentation and development instructions.

### Project Structure

```
├── apps/
│   ├── discord-bot/     # Discord bot application
│   ├── hasura/         # GraphQL API and database metadata
│   └── postgres/       # Database service and data
├── compose.yml         # Multi-service Docker Compose
├── .env.example        # Environment variable template
└── README.md          # This file
```

## Environment Variables

Key environment variables (see `.env.example` for full list):

- `BOT_TOKEN` - Discord bot token
- `CLIENT_ID` - Discord application client ID
- `GUILD_ID` - Discord server ID for slash commands
- `POSTGRES_PASSWORD` - Database password
- `HASURA_GRAPHQL_ADMIN_SECRET` - Hasura admin secret

## Features

- **Film Night Management** - Nominate and vote on movies for family film nights
- **Discord Slash Commands** - Modern Discord command interface
- **GraphQL API** - Flexible and efficient data queries
- **Containerized Deployment** - Easy deployment with Docker Compose
