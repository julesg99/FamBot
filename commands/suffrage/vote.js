const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  EmbedBuilder,
  TextInputBuilder,
  ActionRowBuilder,
} = require("discord.js");
const { famFilmCount } = require("../../config.json");
const fs = require("node:fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("movie-vote")
    .setDescription("Start a movie vote"),
  async execute(interaction) {
    const path = `./data/famFilm${famFilmCount}.json`;
    let description = "Please vote for the movie you want to watch\n\n";

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
          .setTitle(`Nominations for Fam Film Night #${famFilmCount}`)
          .setDescription(description);

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

        interaction.reply({ embeds: [voteGrid] });
      }
    });
  },
};
