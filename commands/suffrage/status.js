const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  EmbedBuilder,
  TextInputBuilder,
  ActionRowBuilder,
} = require("discord.js");
const fs = require("node:fs");
const { famFilmCount } = require("../../data/config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Get the status of fam film night"),
  async execute(interaction) {
    const path = `./data/famFilm${famFilmCount}.json`;
    let description = "";

    fs.readFile(path, (err, file) => {
      if (err) {
        console.log(err);
      } else {
        let data = JSON.parse(file);
        for (const nominee of data.nominations) {
          description += `**[${nominee.title}](${nominee.url})**\n`;
        }
        const voteGrid = new EmbedBuilder()
          .setTitle(`Nominations for Fam Film Night #${famFilmCount}`)
          .setDescription(description);

        interaction.reply({ embeds: [voteGrid] });
      }
    });
  },
};
