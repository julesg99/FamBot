import { SlashCommandBuilder } from "discord.js";
import { selectFilmNightNumber } from "../../lib/queries";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("results")
    .setDescription("Get results for fam film night"),
  async execute(interaction) {
    const famFilmCount = await selectFilmNightNumber();
    interaction.reply(`Thank you for voting in Fam Film #${famFilmCount}!`);
  }
}