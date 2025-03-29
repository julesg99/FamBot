async function selectParticipant(name){
    const response = await fetch(`http://localhost:8080/api/rest/selectParticipant/`, {
        method: "POST",
        body: JSON.stringify({ name: `%${name}%` })
    });
    const data = await response.json();
    if (data.error) throw new Error(data.error);
    else if (data.selectParticipants.length === 0)
        return null;
    return data.selectParticipants[0].id;
}

async function insertParticipant(name) {
    const request = {
        "method": "POST",
        "body": JSON.stringify({ participant: { name } })
    };

    const response = await fetch('http://localhost:8080/api/rest/insertParticipant', request);
    const data = await response.json();
    if (data.error) throw new Error(data.error);
    return data;
}

export { selectParticipant, insertParticipant };