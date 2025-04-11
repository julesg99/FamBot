import Nomination from "./nomination";

type FilmNight = {
  id: string;
  createdAt: string;
  updatedAt: string;
  numParticipants: number;
  number: number;
  note: string | null;
  nominations: Array<Nomination>;
};

export default FilmNight;
