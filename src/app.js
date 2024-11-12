import getData from "./lib/source.js";

getData(1)
.then(data => console.log(data))
.catch(error => console.log(error));