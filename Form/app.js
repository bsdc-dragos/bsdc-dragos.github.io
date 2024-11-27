console.log("app run");
 
var namee = document.getElementById("nameinp");
var email = document.getElementById("emailinp");
var col = document.getElementById("colinp");
 
var submit = document.getElementById("submit");
 
var tab = document.getElementById("table");
 
submit.addEventListener("click", function() {
    var row = document.createElement("tr");
    row.innerHTML = `<td>${email.value}</td><td>${namee.value}</td><td>${col.value}</td>`;
    tab.appendChild(row);
 
   
 
    namee.value = "";
    email.value ="";
    col.value = "";
});

const cars = [
    {model: "M140i"},
    {model: "M2"},
    {model: "M3"},
    {model: "M4"},
    {model: "M5"},
    {model: "M6"},
    {model: "M760Li"},
    {model: "M8"},

]