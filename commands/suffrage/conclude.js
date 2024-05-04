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

    fileData.famFilmCount++;
    fs.writeFile(path, JSON.stringify(fileData), (err) => {
      if (err) throw err;
      interaction.reply(`Thank you for voting in Fam Film #${fileData.famFilmCount}!`);
    })
  }
}