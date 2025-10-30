# FamBot Applications

This directory contains the microservices that make up the FamBot system.

## Applications

### [discord-bot](./discord-bot/)

The Discord bot application that handles all Discord interactions, commands, and events.

### [hasura](./hasura/)

The Hasura GraphQL engine that provides the API layer for database operations.

### [postgres](./postgres/)

The PostgreSQL database service that stores all application data.

## Running the Applications

### All Services (Recommended)

From the root directory:

```bash
docker compose up
```

### Individual Services

Each app has its own compose file for independent development:

```bash
# Discord Bot only (requires postgres and hasura to be running)
cd apps/discord-bot && docker compose up

# Hasura only (requires postgres to be running)
cd apps/hasura && docker compose up

# Postgres only
cd apps/postgres && docker compose up
```

## Development Workflow

1. Start postgres first: `cd apps/postgres && docker compose up -d`
2. Start hasura: `cd apps/hasura && docker compose up -d`
3. Apply migrations: `cd apps/hasura && hasura migrate apply`
4. Start discord bot: `cd apps/discord-bot && npm run dev`
