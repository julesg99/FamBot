import {
  SlashCommandBuilder,
  EmbedBuilder,
  MessageFlags,
  Interaction,
} from "discord.js";
import {
  insertParticipant,
  insertNomination,
  selectCurrentFilmNight,
  selectFilmNightParticipation,
} from "../../lib/queries";
import { Nomination, Participant } from "../../lib/types";
import { buildNomineeDisplay } from "../../lib";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nominate")
    .setDescription("Nominate a movie")
    .addStringOption((option) =>
      option
        .setName("title")
        .setDescription("The title of your movie")
        .setRequired(true),
    )
    .addStringOption((option) =>
      option
        .setName("url")
        .setDescription("The Letterboxd URL of your movie")
        .setRequired(true),
    )
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("Please enter your name")
        .setRequired(true),
    ),
  async execute(interaction: Interaction) {
    if (!interaction.isChatInputCommand()) return;
    try {
      // interaction.deferReply({
      //   flags: MessageFlags.Ephemeral,
      // });

      const title = interaction.options.getString("title");
      const url = interaction.options.getString("url");
      const name = interaction.options.getString("name");

      const filmNight = await selectCurrentFilmNight();
      let participant: Participant | null = null;
      let participationResponse = await selectFilmNightParticipation(
        name,
        filmNight.id,
      );
      participant = participationResponse[0];

      if (!participant) {
        let participantResponse = await insertParticipant(name);
        participant = participantResponse.insertParticipant;
      }

      let nomineeMessage = buildNomineeDisplay(filmNight);

      if (participant.nominations.length === 1) {
        const responseDisplay = new EmbedBuilder()
          .setTitle(`Oops! You have already nominated a movie!`)
          .setDescription(nomineeMessage);
        interaction.reply({
          embeds: [responseDisplay],
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      if (filmNight.nominations.length == filmNight.numParticipants) {
        const responseDisplay = new EmbedBuilder()
          .setTitle(`Oops! Nominations have concluded...`)
          .setDescription(nomineeMessage);
        interaction.reply({
          embeds: [responseDisplay],
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      const request: Partial<Nomination> = {
        filmNightId: filmNight.id,
        participantId: participant.id,
        filmName: title,
        url,
      };
      await insertNomination(request);

      filmNight.nominations.push(request as Nomination);
      nomineeMessage = buildNomineeDisplay(filmNight);

      const nominationsDisplay = new EmbedBuilder()
        .setTitle(`Thank you for your nomination!`)
        .setDescription(nomineeMessage);
      interaction.reply({ embeds: [nominationsDisplay] });
    } catch (error) {
      console.error("Error nominating movie:", error);
      interaction.reply({
        content: "There was an error while executing this command!",
        flags: MessageFlags.Ephemeral,
      });
    }
  },
};
