const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nominate')
        .setDescription('Nominate a movie.')
        .addStringOption(option =>
            option.setName('movie')
                .setDescription('The letterboxd url for your movie.')
                .setRequired(true)),
    async execute(interaction) {
        
    }
}

