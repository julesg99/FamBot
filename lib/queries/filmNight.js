module.exports = {
    selectFilmNightNumber: async function selectFilmNightNumber() {
        const response = await fetch('http://localhost:8080/api/rest/selectFamFilmNumber');
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        return data.selectFilmNightAggregate.aggregate.max.number;
    },
    selectCurrentFilmNight: async function selectCurrentFilmNight() {
        const response = await fetch('http://localhost:8080/api/rest/selectCurrentFilmNight');
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        return data.selectFilmNights[0];
    },
    insertFilmNight: async function insertFilmNight(participants, number) {
        const request = {
            "method": "POST",
            "body": JSON.stringify({
                "numParticipants": participants,
                "number": number
            })
        };
        const response = await fetch('http://localhost:8080/api/rest/insertFilmNight', request);
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        return data.insertFilmNight;
    }
}