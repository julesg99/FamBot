const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  EmbedBuilder,
  TextInputBuilder,
  ActionRowBuilder,
  TextInputStyle,
  ModalBuilder,
  Events,
} = require("discord.js");
const fs = require("node:fs");
const { selectFilmNightNumber } = require("../../lib/queries/nomination.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("movie-vote")
    .setDescription("Start a movie vote"),
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    let description = "Please vote for the movie you want to watch\n\n";
    let filmNight = await selectCurrentFilmNight();

    const modal = new ModalBuilder()
      .setCustomId("vote-modal")
      .setTitle("Movie Vote");

    for (const nominee of filmNight.nominations) {
      const input = new TextInputBuilder()
        .setCustomId(nominee.id)
        .setLabel(`Votes for ${nominee.title}`)
        .setStyle(TextInputStyle.Short);

      const actionRow = new ActionRowBuilder().addComponents(input);
      modal.addComponents(actionRow);
    }
    await interaction.showModal(modal);

    if (!interaction.isModalSubmit()) return;

    console.log('**FIELDED**', interaction.fields.fields);
  },
};
