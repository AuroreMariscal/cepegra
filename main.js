axios.get("https://api.irail.be/stations/?format=json")
.then( (Response) => {
    let stations = Response.data.station;
    console.log(stations)
    let gares = document.querySelector(".gareList")
    stations.forEach(element => {
        gares.innerHTML += `<li>${element.name}</li>`
    });
})