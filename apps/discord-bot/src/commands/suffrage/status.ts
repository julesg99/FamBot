import { EmbedBuilder } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import {
  isActive,
  buildNomineeDisplay,
  selectCurrentFilmNight,
} from "../../lib";

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
    let description = "";

    if (isActive(filmNight)) {
      title = `*Nominations Open*\n`;
      color = 0x00ff00;
    } else {
      const winner = filmNight.nominations.find(
        (nominee, index, nominations) =>
          Math.max(...nominations.map((nominee) => nominee.score)) ===
          nominee.score,
      );

      title = `Currently leading...\n${winner.filmName}!\n\n`;
    }

    if (filmNight.nominations.length === 0) {
      description = "No submissions yet!";
    } else {
      description = buildNomineeDisplay(filmNight);
    }

    voteGrid.setTitle(title);
    voteGrid.setColor(color);
    voteGrid.setDescription(description);

    interaction.reply({ embeds: [voteGrid] });
  },
};
