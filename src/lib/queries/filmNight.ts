import { debug } from 'console';
import { baseHeaders } from './hasuraConfig';
const { GRAPHQL_ROOT } = process.env;

async function selectFilmNightNumber() {
    const response = await fetch(`${GRAPHQL_ROOT}/selectFamFilmNumber`, {
        headers: baseHeaders
    });
    const data = await response.json();
    debug('Select Film Night Number: ', JSON.stringify(data, null, 2));
    if (data.error) throw new Error(data.error);
    return data.selectFilmNightAggregate.aggregate.max.number;
}

async function selectCurrentFilmNight() {
    const response = await fetch(`${GRAPHQL_ROOT}/selectCurrentFilmNight`, {
        headers: baseHeaders
    });
    const data = await response.json();
    debug('Select Current Film Night Response:', JSON.stringify(data, null, 2));
    if (data.error) throw new Error(data.error);
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
    return data.insertFilmNight;
}

export { selectCurrentFilmNight, selectFilmNightNumber, insertFilmNight };