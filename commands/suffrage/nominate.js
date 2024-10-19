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

  },
}