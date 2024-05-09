const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { selectParticipant } = require('../../lib/participant.js');
const { insertNomination } = require('../../lib/nominations.js');

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

      const participantResponse = await selectParticipant(name);

      const nominationResponse = await insertNomination({
        filmNightId: "567a7557-c986-4e60-8bff-c548ae1b4bd3",
        participantId: participantResponse,
        title,
        url
      });

      console.log(nominationResponse);
      
      // const data = readFamFilmFile();
      // if (data.nominations.length == data.numParticipants) {
      //   interaction.reply(`Nominations have concluded for this Fam Film Night # ${famFilmCount}.`);
      //   return;
      // }
  
      // data.nominations.push({ title, url });
      // fs.writeFile(path, JSON.stringify(data), (err) => {
      //   if (err) throw err;
      //   let message = 'Thank you for your nomination! The current nominees are:\n';
      //   for (const nominee of data.nominations) {
      //     message += `**[${nominee.title}](${nominee.url})**\n`;
      //   }
      //   const nominationsDisplay = new EmbedBuilder()
      //     .setTitle(`Nominations for Fam Film Night #${famFilmCount}`)
      //     .setDescription(message);
      //     // .addChannelOption(option =>
      //     //     option.setName('channel')
      //     //         .setDescription('The channel to echo into'));
      //   interaction.reply({ embeds: [nominationsDisplay]});
      // });
    }
};
