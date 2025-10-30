import { debug } from "console";
import { baseHeaders } from "./hasuraConfig";
import { FilmNight } from "../types";
const { GRAPHQL_ROOT } = process.env;

async function selectFilmNightNumber(): Promise<FilmNight> {
  const response = await fetch(`${GRAPHQL_ROOT}/selectFamFilmNumber`, {
    headers: baseHeaders,
  });
  const data = await response.json();
  debug("Select Film Night Number Response: ", JSON.stringify(data, null, 2));
  if (data.error) throw new Error(data.error);
  return data.selectFilmNightAggregate.aggregate.max.number;
}

async function selectCurrentFilmNight(): Promise<FilmNight> {
  const response = await fetch(`${GRAPHQL_ROOT}/selectCurrentFilmNight`, {
    headers: baseHeaders,
  });
  const data = await response.json();
  debug("Select Current Film Night Response:", JSON.stringify(data, null, 2));
  if (data.error) throw new Error(data.error);
  return data.selectFilmNights[0];
}

async function insertFilmNight(participants): Promise<FilmNight> {
  const request: RequestInit = {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({
      numParticipants: participants,
    }),
  };
  const response = await fetch(`${GRAPHQL_ROOT}/insertFilmNight`, request);
  const data = await response.json();
  debug("Insert Film Night Response:", JSON.stringify(data, null, 2));
  if (data.error) throw new Error(data.error);
  return data.insertFilmNight;
}

export { selectCurrentFilmNight, selectFilmNightNumber, insertFilmNight };
