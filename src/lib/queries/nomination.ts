import { debug } from "console";
import { baseHeaders } from "./hasuraConfig";
import { Nomination } from "../types";
const { GRAPHQL_ROOT } = process.env;

async function selectNominations(nominationIds): Promise<Nomination[]> {
  const request = {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ ids: nominationIds }),
  };

  debug("Select Nominations Request:", JSON.stringify(request, null, 2));
  const response = await fetch(`${GRAPHQL_ROOT}/selectNominations`, request);
  const data = await response.json();
  debug("Select Nominations Response:", JSON.stringify(data, null, 2));
  if (data.error) throw new Error(data.error);
  return data.selectNominations;
}

async function insertNomination(
  nomination: Partial<Nomination>,
): Promise<string> {
  const request: RequestInit = {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ nomination: nomination }),
  };

  debug("Insert Nomination Request:", JSON.stringify(request, null, 2));
  const response = await fetch(`${GRAPHQL_ROOT}/insertNomination`, request);
  const data = await response.json();
  debug("Insert Nomination Response:", JSON.stringify(data, null, 2));
  if (data.error) throw new Error(data.error);
  return data.insertNomination.id;
}

async function updateNomination(
  nomination: Partial<Nomination> & { id: string },
) {
  const request: RequestInit = {
    method: "PATCH",
    headers: baseHeaders,
    body: JSON.stringify({ id: nomination.id, score: nomination.score }),
  };
  debug("Patch Nomination Request:", JSON.stringify(request, null, 2));
  const response = await fetch(`${GRAPHQL_ROOT}/patchNominationScore`, request);
  const data = await response.json();
  debug("Patch Nomination Response:", JSON.stringify(data, null, 2));
  if (data.error) throw new Error(data.error);
}

export { selectNominations, insertNomination, updateNomination };
