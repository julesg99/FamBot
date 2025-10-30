import { REST, Routes } from "discord.js";
import { config } from "dotenv";
import { readdirSync, statSync } from "fs";
import { join } from "path";

config();

const {
  CLIENT_ID: client_id,
  // GUILD_ID: guildId,
  GUILD_IDS: guild_ids,
  BOT_TOKEN: token,
} = process.env;

const commands = [];

const foldersPath = join(__dirname, "commands");
const commandFolders = readdirSync(foldersPath);

for (const entry of commandFolders) {
  const fullPath = join(foldersPath, entry);

  if (statSync(fullPath).isDirectory()) {
    const commandFiles = readdirSync(fullPath).filter(
      (file) => file.endsWith(".js") || file.endsWith(".ts"),
    );

    for (const file of commandFiles) {
      const filePath = join(fullPath, file);
      const command = require(filePath);
      if ("data" in command && "execute" in command) {
        commands.push(command.data.toJSON());
      } else {
        console.warn(
          `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
        );
      }
    }
  }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// Deploy the commands
(async () => {
  try {
    let guildIds = guild_ids.split(",");

    console.log(
      `Started refreshing ${commands.length} slash commands for ${guildIds.length} guilds.`,
    );

    guildIds.forEach(async (guildId, index) => {
      const data = (await rest.put(
        Routes.applicationGuildCommands(client_id, guildId),
        { body: commands },
      )) as any[];

      console.log(
        `Successfully reloaded ${data.length} slash commands for ${++index} guild.`,
      );
    });
  } catch (error) {
    console.error(error);
  }
})();
