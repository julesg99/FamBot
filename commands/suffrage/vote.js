const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  EmbedBuilder,
  TextInputBuilder,
  ActionRowBuilder,
} = require("discord.js");
const { famFilmCount } = require("../../data/baseData.json");
const fs = require("node:fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("movie-vote")
    .setDescription("Start a movie vote"),
  async execute(interaction) {
    const path = `./data/famFilm${famFilmCount - 1}.json`;
    let description = "";

    fs.readFile(path, (err, file) => {
      if (err) {
        console.error(err);
        data = [];
      } else {
        let data = JSON.parse(file);
        for (const nominee of data.nominations) {
          description += `**[${nominee.title}](${nominee.url})**\n`;
        }
        const voteGrid = new EmbedBuilder()
          .setTitle("Movie Vote")
          .setDescription(description);

        let actionRow = new ActionRowBuilder().addComponents(
          new TextInputBuilder()
            .setCustomId("vote")
            .setLabel("Your vote")
            .setValue("")
            .setPlaceholder("Enter the number of the movie you want to vote for")
            .setMinLength(1)
            .setMaxLength(1)
            .setRequired(true)
        );

        interaction.reply({ embeds: [voteGrid], components: [actionRow] });
      }
    });
  },
};
