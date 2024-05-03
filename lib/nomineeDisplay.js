const {
  EmbedBuilder
} = require("discord.js");
const fs = require("node:fs");
const { famFilmCount } = require("../config.json");

module.exports = {
  nomineeDisplay: function nomineeDisplay() {
    const path = `./data/famFilm${famFilmCount}.json`;
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    if (!data) throw new Error("No nominee data found");
  
    const voteGrid = new EmbedBuilder()
      .setTitle(`Nominations for Fam Film Night #${famFilmCount}`);
    let description = "";
  
    for (const nominee of data.nominations){
      description += `**[${nominee.title}](${nominee.url})**\n`;
    }
    voteGrid.setDescription(description);
  
    return voteGrid;
  }
}
