const { SlashCommandBuilder } = require('discord.js');
const { famFilmCount } = require('../../data/baseData.json');
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
        const path = `./data/famFilm${famFilmCount}.json`;
        const title = interaction.options.getString('title');
        const url = interaction.options.getString('url');
        
        fs.readFile(path, (err, file) => {
            if (err) {
                console.error(err);
                data = [];
            } else {
                let data = JSON.parse(file);

                if (data.nominations.length == data.numParticipants) {
                    interaction.reply(`Nominations have concluded for this Fam Film Night # ${famFilmCount+1}.`);
                    return;
                }
            
                data.nominations.push({ title, url });
                fs.writeFile(path, JSON.stringify(data), (err) => {
                    if (err) throw err;
                    let message = 'Thank you for your nomination! The current nominatees are:\n';
                    for (const nominee of data.nominations) {
                        message += `**[${nominee.title}](${nominee.url})**\n`;
                    }
                    interaction.reply(message);
                });
            }
        }); 
    }
};
