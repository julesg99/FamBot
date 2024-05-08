const {
  EmbedBuilder
} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { selectNominations } = require("../../lib/nominations.js");
const { selectFilmNightNumber } = require("../../lib/filmNight.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Get the status of fam film night"),
  async execute(interaction) {
    const nominations = await selectNominations();
    const famFilmCount = await selectFilmNightNumber();

    const voteGrid = new EmbedBuilder()
      .setTitle(`Nominations for Fam Film Night #${famFilmCount}`);
    let description = "";

    for (const nominee of nominations){
      description += `**[${nominee.title}](${nominee.url})**\n`;
    }
    voteGrid.setDescription(description);

    interaction.reply({ embeds: [voteGrid] })
  },
};
