const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fam-film')
        .setDescription('How many participants?')
        .addStringOption(option =>
            option.setName('participants')
                .setDescription('The number of participants.')
                .setRequired(true)),
    async execute(interaction) {
        const { famFilmCount } = require('../../config.json');
        const path = `./data/famFilm${famFilmCount}.json`;
        const participants = interaction.options.getString('participants');
        const data = {
            "famFilmNumber": famFilmCount,
            "numParticipants": participants,
            "nominations": []
        };

        fs.writeFile(path, JSON.stringify(data), (err) => {
            if (err) throw err;
            else {
                interaction.reply(`Fam Film Night #${famFilmCount} has begun!\nAll ${participants} participants must nominate a movie using \`/nominate\``);
            }
        });
    }   
};