import { debug } from 'console';
import { baseHeaders } from './hasuraConfig';
const { GRAPHQL_ROOT } = process.env;

async function selectFilmNightNumber() {
    const response = await fetch(`${GRAPHQL_ROOT}/selectFamFilmNumber`, {
        headers: baseHeaders
    });
    const data = await response.json();
    debug('Selecting Film Night Number...', JSON.stringify(data, null, 2));
    if (data.error) throw new Error(data.error);
    return data.selectFilmNightAggregate.aggregate.max.number;
}

async function selectCurrentFilmNight() {
    const response = await fetch(`${GRAPHQL_ROOT}/selectCurrentFilmNight`);
    const data = await response.json();
    if (data.error) throw new Error(data.error);
    debug('Selecting current Film Night...', data.selectFilmNights[0]);
    return data.selectFilmNights[0];
}

async function insertFilmNight(participants) {
    const request: RequestInit = {
        method: "POST",
        headers: baseHeaders,
        body: JSON.stringify({
            "numParticipants": participants
        })
    };
    // debug('Insert Film Night Request:', JSON.stringify(request, null, 2));
    const response = await fetch(`${GRAPHQL_ROOT}/insertFilmNight`, request);
    const data = await response.json();
    // debug('Insert Film Night Response:', JSON.stringify(data, null, 2));
    if (data.error) throw new Error(data.error);
    return data.insert_film_night.returning[0];
}

export { selectCurrentFilmNight, selectFilmNightNumber, insertFilmNight };