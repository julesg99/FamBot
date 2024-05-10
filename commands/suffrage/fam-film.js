const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const { insert } = require('../../lib/filmNight');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fam-film')
        .setDescription('How many participants?')
        .addStringOption(option =>
            option.setName('participants')
                .setDescription('The number of participants.')
                .setRequired(true)),
    async execute(interaction) {
        const participants = interaction.options.getString('participants');        
        const { number } = await insert.filmNight(participants);
        interaction.reply(`Fam Film Night #${number} has begun!\nAll ${participants} participants must nominate a movie using \`/nominate\``);
    }   
};