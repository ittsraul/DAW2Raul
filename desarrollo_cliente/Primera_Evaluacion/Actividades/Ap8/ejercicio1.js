// Crea dinámicamente una tabla con una sóla fila y siete columnas y mediante map asígnale
// cada celda un día de la semana
let principalDiv = document.getElementsByClassName("table-wrapper")[0];
let table = document.createElement("table");
let trows = document.createElement("tr");


principalDiv.appendChild(table);
table.appendChild(trows);


// function week(){

// }
//opera en arrays asociatius, no en indexats.
let days = [
    { Dia: "Lunes" },
    { Dia: "Martes" },
    { Dia: "Miercoles" },
    { Dia: "Jueves" },
    { Dia: "Viernes" },
    { Dia: "Sabado" },
    { Dia: "Domingo" },
];

console.log(days);
days.map((value) => {
    let tcells = document.createElement("td");
    tcells.style.border = "2px solid black";
    trows.appendChild(tcells);
    tcells.textContent = value.Dia
})

/* console.log(table); */



