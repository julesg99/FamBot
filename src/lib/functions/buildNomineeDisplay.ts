import { FilmNight } from "../types";

export default function buildNomineeDisplay(filmNight: FilmNight): string {
  let description = `**Nominations for Fam Film Night #${filmNight.number}**\n\n`;

  filmNight.nominations
    .sort((a, b) => b.score - a.score)
    .forEach((nominee) => {
      description += `${nominee.participant.name} nominated **[${nominee.filmName}](${nominee.url})**\n`;
      description += `Votes: **${nominee.score}**\n\n`;
    });

  return description;
}
