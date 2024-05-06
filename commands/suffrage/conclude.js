const { SlashCommandBuilder } = require("discord.js");
const { readFamFilmFile } = require("../../lib/readFile.js");
const { famFilmCount } = require('../../config.json');
const fs = require('node:fs');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("conclude")
    .setDescription("Conclude Fam Film Night"),
  async execute(interaction) {
    const path = `./data/famFilm${famFilmCount}.json`;
    const fileData = readFamFilmFile();

    fs.writeFile('../../config.json', JSON.stringify({ "famFilmCount": famFilmCount + 1 }), (err) => {
      if (err) throw err;
      console.log(famFilmCount);
      interaction.reply(`Thank you for voting in Fam Film #${famFilmCount}!`);
    })
  }
}