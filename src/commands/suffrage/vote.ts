const { SlashCommandBuilder } = require("@discordjs/builders");
import {
  ActionRowBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
} from "discord.js";
import { selectCurrentFilmNight } from "../../lib/queries";
import debug = require("debug");

const voteOptions = [
  {
    label: "5",
    description: "5",
    value: "5",
  },
  {
    label: "10",
    description: "10",
    value: "10",
  },
  {
    label: "15",
    description: "15",
    value: "15",
  },
  {
    label: "20",
    description: "20",
    value: "20",
  },
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("movie-vote")
    .setDescription("Start a movie vote"),
  async execute(interaction) {
    const filmNight = await selectCurrentFilmNight();

    const rows = filmNight.nominations.map((nomination, index) => {
      const selectMenu = new StringSelectMenuBuilder()
        .setCustomId(`select-movie_${nomination.id}`)
        .setPlaceholder(`Votes for ${nomination.filmName.toLocaleUpperCase()}`)
        .setMaxValues(4)
        .addOptions(voteOptions);
      return new ActionRowBuilder().addComponents(selectMenu);
    });

    const response = await interaction.reply({
      content: "Please cast your vote!",
      flags: MessageFlags.Ephemeral,
      components: rows,
    });

    debug("Response from vote submission: " + response);
  },
};
