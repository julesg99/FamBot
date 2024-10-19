const { Events, Collection } = require('discord.js');

// executes whenever an interaction has been received
module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    const command = interaction.client.commands.get(interaction.commandName);
    const { cooldowns } = interaction.client;

    // check that the interaction is a slash command
    if (!interaction.isChatInputCommand()) {
      console.error('!isChatInputCommand', interaction);
      return;
    }

    // check that there exists a command by the request name
    if (!command) {
      console.error(`No command matching ${interaction.commandName}`)
      return;
    }

    // check to see if the cooldowns collection already has an entry for the command being used
    if (!cooldowns.has(command.data.name)) {
      cooldowns.set(command.data.name, new Collection());
    }

    const now = Date.now();
    const defaultCooldownDuration = 3;
    const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;
    const timestamps = cooldowns.get(command.data.name);

    // check if the user has already used the command, if so tell them how long to wait
    if (timestamps.has(interaction.user.id)) {
      const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

      if (now < expirationTime) {
        const expiredTimestamp = Math.round(expirationTime / 1000);
        return interaction.reply({ content: `Please wait, you are on a cooldown for \`${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>.`, ephemeral: true });
      }
    }

    timestamps.set(interaction.user.id, now);
    setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

    try {
      await command.execute(interaction);
    }
    catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
      }
      else {
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
  },
};
