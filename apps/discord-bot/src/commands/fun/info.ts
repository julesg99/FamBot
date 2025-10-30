import { type Interaction, SlashCommandBuilder } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("What is this bot?"),
  async execute(interaction: Interaction) {
    if (interaction.isCommand()) {
      let text =
        "Code is available on GitHub: [FamBot](https://github.com/julesg99/FamBot)";
      text += "\nTo all the fun nights spent watching movies.";
      text += "\n Made with ❤️ by Jules G.";
      text += "\n Thanks for checking it out! 😊👾";
      interaction.reply(text);
    }
  },
};
