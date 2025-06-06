import { SlashCommandBuilder } from "discord.js";
import { insertFilmNight } from "../../lib/queries";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fam-film")
    .setDescription("How many participants?")
    .addStringOption((option) =>
      option
        .setName("participants")
        .setDescription("The number of participants.")
        .setRequired(true),
    ),
  async execute(interaction) {
    const participants = interaction.options.getString("participants");
    const response = await insertFilmNight(participants);
    interaction.reply(
      `Fam Film Night #${response.number} has begun!\nAll ${participants} participants must nominate a movie using \`/nominate\``,
    );
  },
};
