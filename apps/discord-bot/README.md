# Discord Bot

This is the Discord bot application for FamBot. It handles all Discord interactions, commands, and events.

## Structure

- `src/` - Source code for the bot
  - `commands/` - Discord slash commands organized by category
    - `fun/` - Fun commands like info and ping
    - `suffrage/` - Voting-related commands for film nights
    - `utility/` - Utility commands like avatar and reload
  - `events/` - Discord event handlers
  - `lib/` - Shared functions, types, and GraphQL queries
- `package.json` - Node.js dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `Dockerfile` - Container configuration
- `nodemon.json` - Development configuration for hot reloading

## Development

To run the bot in development mode:

```bash
npm run dev
```

To build the TypeScript code:

```bash
npm run build
```

To deploy commands to Discord:

```bash
npm run deploy
```

## Docker

To build and run the container:

```bash
docker compose up --build
```
