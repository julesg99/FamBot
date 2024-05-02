const {
  EmbedBuilder,
  TextInputBuilder,
  ActionRowBuilder,
} = require("discord.js");
const fs = require("node:fs");
const { famFilmCount } = require("../../config.json");

function nomineeDisplay() {
  const path = `./data/famFilm${famFilmCount}.json`;
  let description = "";
  let voteGrid = new EmbedBuilder()
    .setTitle(`Nominations for Fam Film Night #${famFilmCount}`);

  fs.readFile(path, (err, file) => {
    if (err) {
      console.error(err)
    } else {
      let data = JSON.parse(file);
      for (const nominee of data.nominations){
        description +=  `**[${nominee.title}](${nominee.url})**\n`;
      }

      voteGrid.setDescription(description);
    }
  });
  return voteGrid;
}