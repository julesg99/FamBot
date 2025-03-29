import { EmbedBuilder } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { selectCurrentFilmNight } from "../../lib/queries/filmNight";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Get the status of fam film night"),
  async execute(interaction) {
    const filmNight = await selectCurrentFilmNight();

    const voteGrid = new EmbedBuilder()
      .setTitle(`Nominations for Fam Film Night #${filmNight.number}`);
    let description = "";

    if (filmNight.nominations.length === 0){
      description = "No submissions yet!";
    } else {
      for (const nominee of filmNight.nominations){
        description += `${nominee.participant.name}: **[${nominee.title}](${nominee.url})**\n`;
      }
    }

    voteGrid.setDescription(description);
    interaction.reply({ embeds: [voteGrid] })
  },
};
