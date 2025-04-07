import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { insertParticipant, selectParticipant, insertNomination, selectCurrentFilmNight, selectFilmNightParticipation } from '../../lib/queries';
import debug from 'debug';

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

    const filmNight = await selectCurrentFilmNight();
    let participantResponse = await selectFilmNightParticipation(name, filmNight.id);
    console.log('1 Participant Response: ' + JSON.stringify(participantResponse, null, 2));
    if (!participantResponse) participantResponse = await insertParticipant(name);
    console.log('2 Participant Response: ' + JSON.stringify(participantResponse, null, 2));

    debug('Current Film Night: ' + JSON.stringify(filmNight, null, 2));

    let nomineeMessage = `The current nominees for Fam Film Night #${filmNight.number} are:\n`;
    for (const nominee of filmNight.nominations) {
      nomineeMessage += `${nominee.participant.name}: **[${nominee.filmName}](${nominee.url})**\n`;
    }

    if (filmNight.nominations.length == filmNight.numParticipants) {
      const responseDisplay = new EmbedBuilder()
        .setTitle(`Oops! Nominations have concluded...`)
        .setDescription(nomineeMessage);
      interaction.reply({ embeds: [responseDisplay] });
      return;
    }
    const request = {
      filmNightId: filmNight.id,
      participantId: participantResponse,
      filmName: title,
      url
    };
    await insertNomination(request);

    nomineeMessage += `${name}: **[${title}](${url})**\n`;

    const nominationsDisplay = new EmbedBuilder()
      .setTitle(`Thank you for your nomination!`)
      .setDescription(nomineeMessage);
    interaction.reply({ embeds: [nominationsDisplay] });

  }
};
