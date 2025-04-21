const { SlashCommandBuilder } = require("@discordjs/builders");
import {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";
import {
  selectCurrentFilmNight,
  selectFilmNightNumber,
} from "../../lib/queries";
import debug = require("debug");
import { safeTextInput } from "../../lib";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("movie-vote")
    .setDescription("Start a movie vote"),
  async execute(interaction) {
    const filmNight = await selectCurrentFilmNight();

    const modal = new ModalBuilder()
      .setCustomId("votingModal")
      .setTitle("Voting");

    filmNight.nominations.forEach((nominee, index) => {
      const actionRow = new ActionRowBuilder<TextInputBuilder>();

      const input = safeTextInput({
        customId: `vote-${index}`,
        label: `Vote for ${nominee.filmName}`,
        placeholder: "Enter your vote (5, 10, 15, 20)",
        minLength: 0,
        maxLength: 10,
        required: true,
        style: TextInputStyle.Short,
      });

      actionRow.addComponents(input);

      modal.addComponents(actionRow);
    });

    const response = await interaction.showModal(modal);

    debug("Response from showModal: " + JSON.stringify(response, null, 2));

    // let actionRow = new ActionRowBuilder().addComponents(
    //   new TextInputBuilder()
    //     .setCustomId("vote")
    //     .setLabel("Your vote")
    //     .setValue("")
    //     .setPlaceholder("Enter the number of the movie you want to vote for")
    //     .setMinLength(1)
    //     .setMaxLength(1)
    //     .setRequired(true)
    // );

    // interaction.reply({ embeds: [voteGrid] });
    // }
    // });
  },
};
