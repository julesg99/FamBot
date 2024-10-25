const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { selectParticipant, insertParticipant } = require('../../../lib/queries/participant.js');
const { insertNomination } = require('../../../lib/queries/nomination.js');
const { selectCurrentFilmNight } = require('../../../lib/queries/filmNight.js');

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
        .setRequired(true))
    .addStringOption(option =>
      option.setName('name')
        .setDescription('Please enter your name')
        .setRequired(true)),
  async execute(interaction) {
    const title = interaction.options.getString('title');
    const url = interaction.options.getString('url');
    const name = interaction.options.getString('name');

    let participantResponse = await selectParticipant(name);
    if (!participantResponse) participantResponse = await insertParticipant(name);
    const filmNight = await selectCurrentFilmNight();

    let nomineeMessage = `The current nominees for Fam Film Night #${filmNight.number} are:\n`;
    for (const nominee of filmNight.nominations) {
      nomineeMessage += `${nominee.participant.name}: **[${nominee.title}](${nominee.url})**\n`;
    }

    if (filmNight.nominations.length == filmNight.numberOfParticipants) {
      const responseDisplay = new EmbedBuilder()
        .setTitle('Oops! Nominations have concluded...')
        .setDescription(nomineeMessage);
      interaction.reply({ embeds: [responseDisplay] });
      return;
    }

    await insertNomination({
      filmNightId: filmNight.id,
      participantId: participantResponse,
      title,
      url,
    });

    nomineeMessage += `${name}: **[${title}](${url})**\n`;

    const nominationsDisplay = new EmbedBuilder()
      .setTitle('Thank you for your nomination!')
      .setDescription(nomineeMessage);
    interaction.reply({ embeds: [nominationsDisplay]});

  },
};
