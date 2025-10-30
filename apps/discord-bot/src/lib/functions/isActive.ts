import { FilmNight } from "../types";

export default function isActive(filmNight: FilmNight): boolean {
  return filmNight.nominations.length < filmNight.numParticipants;
}
