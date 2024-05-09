module.exports = {
    selectParticipant: async function selectParticipant(name){
        const response = await fetch(`http://localhost:8080/api/rest/selectParticipant/${name}`);
        const data = await response.json();
        return data.selectParticipants[0].id;
    },
    insertParticipant: async function insertParticipant(participant) {
        const request = {
            "method": "POST",
            "body": JSON.stringify(participant)
        };

        const response = await fetch('http://localhost:8080/api/rest/insertParticipant', request);
        const data = await response.json();
        return data;
    }
}