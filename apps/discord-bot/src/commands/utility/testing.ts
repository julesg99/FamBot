import { SlashCommandBuilder } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("testing stuff"),
  async execute(interaction) {
    interaction.reply("testing finished");
  },
};
