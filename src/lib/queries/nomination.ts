import { debug } from 'console';
import { baseHeaders } from './hasuraConfig';
import { Nomination } from '../types';
const { GRAPHQL_ROOT } = process.env;

async function selectNominations(nominationIds): Promise<Nomination[]> {
    const request = {
        method: "POST",
        headers: baseHeaders,
        body: JSON.stringify({ "ids": nominationIds })
    }
    
    debug('Select Nominations Request:', JSON.stringify(request, null, 2));
    const response = await fetch(`${GRAPHQL_ROOT}/selectNominations`, request);
    const data = await response.json();
    debug('Select Nominations Response:', JSON.stringify(data, null, 2));
    if (data.error) throw new Error(data.error);
    return data.selectNominations;
}

async function insertNomination(nomination): Promise<string> {
    const request = {
        method: "POST",
        headers: baseHeaders,
        body: JSON.stringify({ "nomination": nomination})
    }
    
    debug('Insert Nomination Request:', JSON.stringify(request, null, 2));
    const response = await fetch(`${GRAPHQL_ROOT}/insertNomination`, request);
    const data = await response.json();
    debug('Insert Nomination Response:', JSON.stringify(data, null, 2));
    if (data.error) throw new Error(data.error);
    return data.insertNomination.id;
}

export { selectNominations, insertNomination };
