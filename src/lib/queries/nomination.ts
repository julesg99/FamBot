import { debug } from 'console';
import { baseHeaders } from './hasuraConfig';
const { GRAPHQL_ROOT } = process.env;

async function selectNominations(nominationIds) {
    const request = {
        method: "POST",
        headers: baseHeaders,
        body: JSON.stringify({ "ids": nominationIds })
    }
    
    const response = await fetch(`${GRAPHQL_ROOT}/selectNominations`, request);
    const data = await response.json();
    if (data.error) throw new Error(data.error);
    return data.select_nominations;
}

async function insertNomination(nomination) {
    const request = {
        method: "POST",
        headers: baseHeaders,
        body: JSON.stringify({ "nomination": nomination})
    }
    
    const response = await fetch(`${GRAPHQL_ROOT}/insertNomination`, request);
    const data = await response.json();
    if (data.error) throw new Error(data.error);
    return data.insert_nomination.id;
}

export { selectNominations, insertNomination };
