const { SlashCommandBuilder } = require("@discordjs/builders");
const { nomineeDisplay } = require("../../lib/nomineeDisplay.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Get the status of fam film night"),
  async execute(interaction) {
    interaction.reply({ embeds: [nomineeDisplay()] })
  },
};
