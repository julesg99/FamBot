const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { selectCurrentFilmNight } = require("../../lib/queries/filmNight.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Get the status of fam film night"),
  async execute(interaction) {
    const filmNight = await selectCurrentFilmNight();

    const voteGrid = new EmbedBuilder()
      .setTitle(`Nominations for Fam Film Night #${filmNight.number}`);
    let description = "";

    for (const nominee of filmNight.nominations){
      description += `${nominee.participant.name}: **[${nominee.title}](${nominee.url})**\n`;
    }
    voteGrid.setDescription(description);

    interaction.reply({ embeds: [voteGrid] })
  },
};
