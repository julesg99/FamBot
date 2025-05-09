# FamBot

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

# FamBot

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

FamBot is a discord bot project to provide a discord server with the ability to vote on a movie to watch. This solution is over the top, with docker containers to provide a database to save all of the history.

This repository contains:

1. [package.json](package.json) for managing npm scripts and dependencies
2. [Dockerfile](Dockerfile)
3. [compose.yml](compose.yml)
4. [nodemon.json](nodemon.json)
5. [.env.example](.env.example)

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Maintainer](#maintainer)

## Background

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --global standard-readme-spec
```

## Maintainer

https://github.com/julesg99
