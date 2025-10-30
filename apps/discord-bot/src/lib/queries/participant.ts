import { debug } from "console";
import { baseHeaders } from "./hasuraConfig";
import { InsertParticipantResponse, Participant } from "../types/participant";
const { GRAPHQL_ROOT } = process.env;

async function selectParticipant(name): Promise<string | null> {
  const response = await fetch(
    `${GRAPHQL_ROOT}/selectParticipant/?name=${name}`,
    {
      method: "GET",
      headers: baseHeaders,
    },
  );
  const data = await response.json();
  debug("Select Participant Response:", JSON.stringify(data, null, 2));
  if (data.error) throw new Error(data.error);
  else if (data.selectParticipants.length === 0) return null;
  return data.selectParticipants[0].id;
}

async function selectFilmNightParticipation(
  name: string,
  filmNightId: string,
): Promise<Participant[]> {
  debug("Select Film Night Participation Request:", { name, filmNightId });
  const response = await fetch(
    `${GRAPHQL_ROOT}/selectFilmNightParticipation/?name=${name}&filmNightId=${filmNightId}`,
    {
      method: "GET",
      headers: baseHeaders,
    },
  );
  const data = await response.json();
  debug(
    "Select Film Night Participation Response:",
    JSON.stringify(data, null, 2),
  );
  if (data.error) throw new Error(data.error);
  return data.selectParticipants;
}

async function insertParticipant(
  name: string,
): Promise<InsertParticipantResponse> {
  const request = {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ name }),
  };
  debug("Insert Participant Request:", JSON.stringify(request, null, 2));

  const response = await fetch(`${GRAPHQL_ROOT}/insertParticipant`, request);
  const data = await response.json();
  debug("Insert Participant Response:", JSON.stringify(data, null, 2));
  if (data.error) throw new Error(data.error);
  return data;
}

export { selectParticipant, selectFilmNightParticipation, insertParticipant };
