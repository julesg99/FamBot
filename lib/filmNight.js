module.exports = {
    selectFilmNightNumber: async function selectFilmNightNumber() {
        const response = await fetch('http://localhost:8080/api/rest/selectFamFilmNumber');
        const data = await response.json();
        console.log(data);
        return data.selectFilmNightAggregate.aggregate.max.number;
    }
}