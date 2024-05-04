const {
  EmbedBuilder
} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { readFamFilmFile } = require("../../lib/readFile.js");
const { famFilmCount } = require("../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Get the status of fam film night"),
  async execute(interaction) {
    const fileData = readFamFilmFile();

    const voteGrid = new EmbedBuilder()
      .setTitle(`Nominations for Fam Film Night #${famFilmCount}`);
    let description = "";

    for (const nominee of fileData.nominations){
      description += `**[${nominee.title}](${nominee.url})**\n`;
    }
    voteGrid.setDescription(description);

    interaction.reply({ embeds: [voteGrid] })
  },
};
