console.log("Application running!")

/* start of everything */

const cars = [
    {type: "BMW", model: "M550i", hp: "523", Year:"2019"},
    {type: "Audi", model: "S4", hp: "349", Year:"2020"},
    {type: "Mercedes-AMG", model: "C63", hp: "451", Year:"2009"},
    {type: "Nissan", model: "370z", hp: "350", Year:"2015"},
    {type: "Bumba", model: "M135i", hp: "320", Year:"2024"},
]

/* pickup everything*/
const sec = document.getElementById("cartab")
/* iter to put every6thing in table*/
for(i=0; i<6; i++) {
    const newc=document.createElement(`tr`)
    newc.innerHTML = `<td>${cars[i].type}</td><td>${cars[i].model}</td><td>${cars[i].hp}</td><td>${cars[i].Year}</td>`

    sec.appendChild(newc);
}