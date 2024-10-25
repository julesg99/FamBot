const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    const wait = require('node:timers/promises').setTimeout;

    await interaction.deferReply({ ephemeral: true });
    await wait(2000);
    await interaction.editReply('Ping! Pong!');
  },
};