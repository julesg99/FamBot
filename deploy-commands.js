require('dotenv').config();
const { REST, Routes } = require('discord.js');
const { CLIENT_ID: clientId, GUILD_ID: guildId, BOT_TOKEN: token } = process.env;
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const excludePath = path.join(__dirname, 'commands/deprecated');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  if (path.join(foldersPath, folder) === excludePath) continue;
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
      commands.push(command.data.toJSON());
    }
    else {
      console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
  }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

(async () => {
  try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`);

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  }
  catch (error) {
    console.error(error);
  }
})();