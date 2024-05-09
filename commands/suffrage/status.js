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
    const nominations = await selectNominations(["c420e331-9b00-4b25-8b9e-01c9a64f38af", "4c771d39-0798-4a96-8f34-cc545e6fae60"]);
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
