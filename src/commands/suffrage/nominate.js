const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('nominate')
    .setDescription('Nominate a movie')
    .addStringOption(option =>
      option.setName('title')
        .setDescription('The title of your movie')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('url')
        .setDescription('The Letterboxd URL of your movie')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('name')
        .setDescription('Please enter your name')
        .setRequired(true)),
  async execute(interaction) {
    const title = interaction.options.getString('title');
    const url = interaction.options.getString('url');
    const name = interaction.options.getString('name');

    const pins = await interaction.channel.messages.fetchPinned();
    const pinMessage = pins.first();

    let pinContent;
    try {
      pinContent = JSON.parse(pinMessage.content);
    }
    catch (error) {
      console.error('Error parsing pinned message:', error);
      return interaction.reply('Error parsing pinned message content.');
    }

    const message = await interaction.channel.messages;
    console.log(JSON.stringify(message));


    let nomineeMessage = `The current nominees for Fam Film Night #${pinContent.lastFamFilm} are:\n`;
    // for (const nominee of filmNight.nominations) {
    //   nomineeMessage += `${nominee.participant.name}: **[${nominee.title}](${nominee.url})**\n`;
    // }
    await interaction.reply({ content: nomineeMessage });
  },
}