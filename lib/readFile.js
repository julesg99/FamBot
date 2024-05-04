const fs = require("node:fs");
const { famFilmCount } = require("../config.json");

module.exports = {
  readFamFilmFile: function readFamFilmFile(){    
    const path = `./data/famFilm${famFilmCount}.json`;
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    if (!data) throw new Error("No nominee data found");
  
    return data;
  }
}