module.exports = {
    selectNominations: async function selectNominations(nominationIds) {
        const request = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            "body": JSON.stringify({ "ids": nominationIds })
        }
        
        const response = await fetch('http://localhost:8080/api/rest/selectNominations', request);
        const data = await response.json();
        return data.selectNominations;
    },
    insertNomination: async function insertNomination(nomination) {
        const request = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            "body": JSON.stringify({ "nomination": nomination})
        }
        
        const response = await fetch('http://localhost:8080/api/rest/insertNomination', request);
        const data = await response.json();
        return data.insertNomination.id;
    }
}