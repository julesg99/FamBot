import { SlashCommandBuilder } from 'discord.js';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('why are you talking to yourself?')
    .addStringOption(option => option.setName('text').setDescription('enter text')),
  async execute(interaction) {
    const text = interaction.options.getString('text');
    return interaction.reply(text);
  }
}