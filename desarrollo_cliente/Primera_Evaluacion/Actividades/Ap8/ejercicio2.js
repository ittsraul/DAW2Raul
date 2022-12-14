/*
Crea dinámicamente una tabla con dos filas y siete columnas y mediante map asígnale a cada celda de la pimera fila un día de la semana
y a cada celda de la segunda, la información que tu quieras.
*/
let principalDiv1 = document.getElementsByClassName("table-wrapper")[1];
let table2 = document.createElement("table");
let trows2 = document.createElement("tr");
let trows2_1 = document.createElement("tr");
principalDiv1.appendChild(table2);
table2.appendChild(trows2);
table2.appendChild(trows2_1);

//opera en arrays asociatius, no en indexats.
/* let days = [
    { dias: "Lunes" },
    { dias: "Martes" },
    { dias: "Miercoles" },
    { dias: "Jueves" },
    { dias: "Viernes" },
    { dias: "Sabado" },
    { dias: "Domingo" },
];

let perifericos = [
    { Teclado: "Logitech" },
    { Teclado: "Corsair" },
    { Teclado: "Cherry" },
    { Teclado: "k55" },
    { Teclado: "trust" },
    { Teclado: "razer" },
    { Teclado: "chino" },
] */

let genData = [
    {
        perifericos: [
            { Teclado: "Logitech" },
            { Teclado: "Corsair" },
            { Teclado: "Cherry" },
            { Teclado: "k55" },
            { Teclado: "trust" },
            { Teclado: "razer" },
            { Teclado: "chino" },
        ],
        days: [
            { dias: "Lunes" },
            { dias: "Martes" },
            { dias: "Miercoles" },
            { dias: "Jueves" },
            { dias: "Viernes" },
            { dias: "Sabado" },
            { dias: "Domingo" },
        ]
    }
]
genData.map((value) => {
    

    value.days.map((day) => {
        let tday = document.createElement("td");
        trows2.appendChild(tday);
        tday.textContent = day.dias;
        tday.style.border = "2px solid black";
    })

    value.perifericos.map((periferico) => {
        let tdperiferico = document.createElement("td");
        trows2_1.appendChild(tdperiferico);
        tdperiferico.textContent = periferico.Teclado;
        tdperiferico.style.border = "2px solid red";
    })

})
console.log(table2);


