# PostgreSQL Database

This is the PostgreSQL database service for FamBot.

## Structure

- `data/` - PostgreSQL data directory (mounted as volume)

## Configuration

The database is configured through environment variables:

- `POSTGRES_PASSWORD` - Database password
- `POSTGRES_USER` - Database user (defaults to postgres)
- `POSTGRES_DB` - Database name (defaults to postgres)

## Docker

The database runs on port 5432 and persists data in the `data/` directory.
