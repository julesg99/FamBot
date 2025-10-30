import { SlashCommandBuilder } from "discord.js";
import fs = require("node:fs");
import path = require("node:path");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reloads a command.")
    .addStringOption((option) =>
      option
        .setName("command")
        .setDescription("The command to reload.")
        .setRequired(true),
    ),

  async execute(interaction) {
    const commandName = interaction.options
      .getString("command", true)
      .toLowerCase();
    const command = interaction.client.commands.get(commandName);

    if (!command)
      return interaction.reply(
        `There is no command with name \`${commandName}\`!`,
      );

    let commandsPath;
    const foldersPath = path.join(__dirname, "..");
    const commandFolders = fs.readdirSync(foldersPath);

    for (const folder of commandFolders) {
      commandsPath = path.join(foldersPath, folder);
      const commandFile = fs
        .readdirSync(commandsPath)
        .find((file) => file == `${commandName}.js`);
      if (commandFile) {
        break;
      }
    }

    delete require.cache[
      require.resolve(path.join(commandsPath, `${command.data.name}.js`))
    ];

    try {
      interaction.client.commands.delete(command.data.name);
      const newCommand = require(
        path.join(commandsPath, `${command.data.name}.js`),
      );
      interaction.client.commands.set(newCommand.data.name, newCommand);
      const successMessage = `Command \`${newCommand.data.name}\` was reloaded!`;
      await interaction.reply(successMessage);
      console.log(successMessage);
    } catch (error) {
      console.error(error);
      await interaction.reply(
        `There was an error while reloading a command \`${command.data.name}\`:\n\`${error.message}\``,
      );
    }
  },
};
