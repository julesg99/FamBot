const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('film-night')
        .setDescription('How many participants?')
        .addStringOption(option =>
            option.setName('participants')
                .setDescription('The number of participants.')
                .setRequired(true)),
    async execute(interaction) {
        let { filmNightCount } = require('../../data/filmNight.json');
        const path = `./data/filmNight${filmNightCount}.json`;
        const participants = interaction.options.getString('participants');
        const data = [
            {
                "filmNightNumber": filmNightCount,
                "numParticipants": participants,
                "nominations": []
            }
        ];
        filmNightCount++;

        fs.writeFile(path, JSON.stringify(data), (err) => {
            if (err) throw err;
            else {
                interaction.reply(`Fam Film night for ${participants} participants!\nPlease begin nominating your movies (use \`/nominate\`)`);
            }
        });

        fs.writeFile('./data/filmNight.json', JSON.stringify({ filmNightCount }), (err) => {
            if (err) throw err;
        });
    }   
};