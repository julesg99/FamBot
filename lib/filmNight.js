module.exports = {
    query: {
        filmNightNumber: async function selectFilmNightNumber() {
            const response = await fetch('http://localhost:8080/api/rest/selectFamFilmNumber');
            const data = await response.json();
            return data.selectFilmNightAggregate.aggregate.max.number;
        },
        currentFilmNight: async function selectCurrentFilmNight() {
            const response = await fetch('http://localhost:8080/api/rest/selectCurrentFilmNight');
            const data = await response.json();
            return data.selectFilmNights;
        },
    },
    insert: {
        filmNight: async function insertFilmNight(participants) {
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
}