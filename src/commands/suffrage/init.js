const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('init')
    .setDescription('Initializes the Fam Film counter'),

  async execute(interaction) {
    try {
      const content = { lastFamFilm: 2 };
      const jsonContent = JSON.stringify(content, null, 2);

      // Send the message
      const sentMessage = await interaction.channel.send(jsonContent);

      // Pin the message
      await sentMessage.pin();

      await interaction.reply({
        content: 'Fam Film counter initialized and pinned!',
        ephemeral: true,
      });
    }
    catch (error) {
      console.error('Error in init command:', error);
      await interaction.reply({
        content: 'An error occurred while initializing the Fam Film counter.',
        ephemeral: true,
      });
    }
  },
};