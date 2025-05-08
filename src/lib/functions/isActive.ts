import { FilmNight } from "../types";

export function isActive(filmNight: FilmNight): boolean {
  return filmNight.nominations.length < filmNight.numParticipants;
}
