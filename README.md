### Start up

#### Frontend

1. run `npm install`
2. create `.env` by copying `.env.example`
3. run `npm start`

#### Backend

1. run `npm run dcu`
2. in hasura directory, run `hasura deploy`

### Commands

`npm deploy`

- deploys bot commands

`npm boot`

- starts running the bot

`npm start`

- combination of deploy and boot

`npm dcu`

- docker compose up
- creates containers for postgres, graphql-engine, and data-connector

`npm dcd`

- docker compose down
- destroys containers

### Resources

[Discord.js Guide on Github](https://github.com/discordjs/guide/tree/main)

[Discord.js Guide](https://discordjs.guide/creating-your-bot/)

[Hasura quickstart w/ Docker](https://hasura.io/docs/latest/getting-started/docker-simple/#step-2-connect-a-database)
