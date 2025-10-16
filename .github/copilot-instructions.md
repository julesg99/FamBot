# Copilot Instructions for FamBot

## Overview

FamBot is a TypeScript-based project designed to manage and facilitate family-oriented activities. The project is structured into distinct components, including a Discord bot, Hasura GraphQL engine, and various utility scripts. The codebase is modular, with a focus on maintainability and scalability.

## Key Components

### 1. Discord Bot

- **Location**: `src/`
- **Commands**: Organized into subdirectories under `src/commands/`:
  - `fun/`: Fun commands like `info` and `ping`.
  - `suffrage/`: Commands for voting-related activities, such as `fam-film`, `nominate`, `status`, and `vote`.
  - `utility/`: Utility commands like `avatar`, `reload`, and `testing`.
- **Events**: Event handlers are located in `src/events/`.
- **Libraries**: Shared functions and types are in `src/lib/`.

### 2. Hasura GraphQL Engine

- **Metadata**: Located in `hasura/metadata/`.
- **Migrations**: Located in `hasura/migrations/`.
- **Configuration**: Managed via `hasura/config.yaml`.

### 3. Docker and Deployment

- **Dockerfile**: Defines the container for the application.
- **Compose File**: `compose.yml` orchestrates multi-container setups.
- **Environment Variables**: Managed in `.env` and `.env.example`.

## Developer Workflows

### Building the Project

- Run `npm run build` to compile the TypeScript code.
- Ensure the `tsconfig.json` is correctly configured for your build needs.

### Running the Project

- Use `npm start` to start the Discord bot.
- For verbose output, use `npm run deploy --verbose`.

### Testing

- Add tests under a `tests/` directory (not currently present).
- Use a testing framework like Jest for consistency.

### Debugging

- Use `nodemon` for live-reloading during development.
- Logs are essential for debugging; ensure `console.log` statements are meaningful.

## Project-Specific Conventions

- **Command Structure**: Each command is a TypeScript file exporting a default function.
- **Event Handlers**: Follow the naming convention `eventName.ts`.
- **GraphQL Queries**: Organized in `src/lib/queries/`.
- **Types**: Defined in `src/lib/types/`.

## External Dependencies

- **Hasura**: Communicates with the GraphQL engine for database operations.
- **Docker**: Used for containerization and deployment.
- **Node.js**: Runtime for the Discord bot.

## Integration Points

- **GraphQL**: Queries and mutations are defined in `src/lib/queries/`.
- **Discord API**: Interactions are managed via the `discord.js` library.
- **Environment Variables**: Critical for configuration; ensure `.env` is up-to-date.

## Tips for AI Agents

- Follow the modular structure when adding new commands or events.
- Update the `hasura/metadata/` and `hasura/migrations/` directories for database changes.
- Use existing patterns in `src/lib/` for utility functions and types.
- Ensure new code is well-documented and adheres to the project's conventions.

---

For any questions or clarifications, refer to the project maintainers or existing code examples.
