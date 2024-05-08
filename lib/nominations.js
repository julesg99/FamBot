module.exports = {
    selectNominations: async function selectNominations() {
        const request = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            "body": JSON.stringify({
                "ids":["3bb9ebf3-0a76-4c32-af84-32fce9cb1e79","55774b10-396c-4917-a279-ac167cf47db4","f8f35f29-041b-4509-86aa-752729c4de26"]
            })
        }
        
        const response = await fetch('http://localhost:8080/api/rest/selectNominations', request);
        const data = await response.json();
        return data.selectNominations;
    }
}