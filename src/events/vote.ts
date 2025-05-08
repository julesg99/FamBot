import { Events, type Interaction, MessageFlags } from "discord.js";
import { selectCurrentFilmNight, updateNomination } from "../lib";

module.exports = {
  name: Events.InteractionCreate,
  once: false,
  async execute(interaction: Interaction) {
    if (!interaction) return;

    console.log("INTERACTION", interaction);

    if (
      interaction.isStringSelectMenu() &&
      interaction.customId?.startsWith("select-movie")
    ) {
      const voteSum = interaction.values.reduce((acc, value) => {
        return acc + parseInt(value);
      }, 0);
      const movieId = interaction.customId?.split("_")[1];
      console.log(
        `INTERACTION ${interaction.user.username} votes ${voteSum}pts for ${movieId}`,
      );

      const currentFilmNight = await selectCurrentFilmNight();

      const movie = currentFilmNight.nominations.find(
        (nom) => nom.id === movieId,
      );
      if (!movie) {
        await interaction.reply({
          content: "Movie not found.",
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      updateNomination({
        id: movie.id,
        score: movie.score + voteSum,
      });

      await interaction.reply({
        content: "Your submission was received successfully!",
        flags: MessageFlags.Ephemeral,
      });
      return;
    }
  },
};
