import * as dotenv from "dotenv";
import { readdirSync, statSync } from "fs";
import { join } from "path";

dotenv.config();

const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { BOT_TOKEN } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
client.cooldowns = new Collection();

// this section dynamically builds out the commands
const foldersPath = join(__dirname, "commands");
const commandFolders = readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = join(foldersPath, folder);

  if (statSync(commandsPath).isDirectory()) {
    const commandFiles = readdirSync(commandsPath).filter(
      (file) => file.endsWith(".js") || file.endsWith(".ts"),
    );

    for (const file of commandFiles) {
      const filePath = join(commandsPath, file);
      const command = require(filePath);
      if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);
      } else {
        console.log(
          `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
        );
      }
    }
  }
}

// this section dynamically builds out the events on the client
const eventsPath = join(__dirname, "events");
const eventFiles = readdirSync(eventsPath).filter((file) =>
  file.endsWith(".js"),
);

for (const file of eventFiles) {
  const filePath = join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(BOT_TOKEN);
