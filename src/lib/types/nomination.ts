import FilmNight from "./filmNight";
import Participant from "./participant";

type Nomination = {
  id: string; // uuid, primary key, unique
  createdAt: string; // timestamp with time zone, default: now()
  updatedAt: string; // timestamp with time zone, default: now()
  filmName: string; // text
  url: string | null; // text, nullable
  participantId: string; // uuid
  filmNightId: string; // uuid
  score: number | null; // integer, nullable, default: 0
  participant: Participant;
  filmNight: FilmNight;
};

export default Nomination;
