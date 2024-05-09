module.exports = {
    selectFilmNightNumber: async function selectFilmNightNumber() {
        const response = await fetch('http://localhost:8080/api/rest/selectFamFilmNumber');
        const data = await response.json();
        return data.selectFilmNightAggregate.aggregate.max.number;
    },
    insertFilmNight: async function insertFilmNight(participants) {
        const request = {
            "method": "POST",
            "body": JSON.stringify({
                "numParticipants": participants
            })
        };
        const response = await fetch('http://localhost:8080/api/rest/insertFilmNight', request);
        const data = await response.json();
        return data.insertFilmNight;
    }
}