import { EmbedBuilder } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { selectCurrentFilmNight } from "../../lib/queries";
import { isActive } from "../../lib";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Get the status of fam film night"),
  async execute(interaction) {
    const filmNight = await selectCurrentFilmNight();

    if (!filmNight) {
      return interaction.reply("No film night is currently active.");
    }

    const voteGrid = new EmbedBuilder();

    let color: number | null = null;
    let title: string;
    if (isActive(filmNight)) {
      title = " *Open*\n";
      color = 0x00ff00; // Green
    } else {
      title = " *Closed*\n";
      color = 0xff0000; // Red
    }
    title += `Nominations for Fam Film Night #${filmNight.number}\n`;

    voteGrid.setTitle(title);
    voteGrid.setColor(color);

    let description = "";
    if (filmNight.nominations.length === 0) {
      description = "No submissions yet!";
    } else {
      for (const nominee of filmNight.nominations) {
        description += `${nominee.participant.name} nominated **[${nominee.filmName}](${nominee.url})**\n`;
        description += `Votes: **${nominee.score}**\n\n`;
      }
    }
    voteGrid.setDescription(description);

    interaction.reply({ embeds: [voteGrid] });
  },
};
