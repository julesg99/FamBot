const { SlashCommandBuilder } = require('discord.js');
const { filmNightCount } = require('../../data/filmNight.json');
const fs = require('node:fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nominate')
        .setDescription('Nominate a movie')
        .addStringOption(option =>
            option.setName('title')
                .setDescription('The title of your movie')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('url')
                .setDescription('The Letterboxd URL of your movie')
                .setRequired(true)),
    async execute(interaction) {
        const path = `./data/filmNight${filmNightCount}.json`;
        const title = interaction.options.getString('title');
        const url = interaction.options.getString('url');
        
        fs.readFile(path, 'utf8', (err, file) => {
            if (err) {
                console.error(err);
                data = [];
            } else {
                let data = JSON.parse(file);
            
                data[0].nominations.push({ title, url });
                fs.writeFile(path, JSON.stringify(data), (err) => {
                    if (err) throw err;                    
                    interaction.reply(`Nomination received for **[${title}](${url})**!`);
                });
            }
        }); 
    }
};
