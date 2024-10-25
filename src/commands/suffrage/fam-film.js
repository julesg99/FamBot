const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, InteractionType } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fam-film')
    .setDescription('How many participants?')
    .addStringOption(option =>
      option.setName('participants')
        .setDescription('The number of participants.')
        .setRequired(true)),
  async execute(interaction) {
    try {
      const participants = interaction.options.getString('participants');
      const pins = await interaction.channel.messages.fetchPinned();
      const pinMessage = pins.first();

      if (!pinMessage) {
        return interaction.reply('No pinned message found.');
      }

      let pinContent;
      try {
        pinContent = JSON.parse(pinMessage.content);
      }
      catch (error) {
        console.error('Error parsing pinned message:', error);
        return interaction.reply('Error parsing pinned message content.');
      }

      if (typeof pinContent.lastFamFilm !== 'number') {
        pinContent.lastFamFilm = 0;
      }

      const number = ++pinContent.lastFamFilm;

      console.log('pinContent', pinContent);

      try {
        await pinMessage.edit(JSON.stringify(pinContent, null, 2));
      }
      catch (error) {
        console.error('Error updating message:', error);
        return interaction.reply('Error updating pinned message.');
      }

      await interaction.reply(`Fam Film Night #${number} started for ${participants} people! Use /nominate to submit your movie.`);

      const filter = i => {
        return i.commandName === 'nominate' && i.type === InteractionType.ApplicationCommand;
      };

      const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 });

      collector.on('collect', async i => {
        if (i.commandName === 'vote') {
          const option = i.options.getString('option');
          await i.reply(`Your vote for "${option}" has been recorded!`);
        }
      });

      collector.on('end', collected => {
        interaction.followUp(`Voting session ended. Collected ${collected.size} votes.`);
      });
    }
    catch (error) {
      console.error('Command execution error:', error);
      await interaction.reply('An error occurred while executing the command.');
    }
  },
};
