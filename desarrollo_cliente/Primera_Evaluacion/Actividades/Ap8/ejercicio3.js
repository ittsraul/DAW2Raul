/*
Crea dinámicamente una tabla con tres filas y siete columnas y mediante map asígnale a
cada celda de la pimera fila un día de la semana y a cada celda de la segunda y la tercera, la información que tu quieras.
A continuación utiliza forEach para insertar delante de cada día de la semana de la
primera fila un número: 1 Lunes, 2 Martes, 3 Miércoles...

*/

/*
Crea dinámicamente una tabla con dos filas y siete columnas y mediante map asígnale a cada celda de la pimera fila un día de la semana
y a cada celda de la segunda, la información que tu quieras.
*/
let principalDiv2 = document.getElementsByClassName("table-wrapper")[2];
let table3 = document.createElement("table");
let trows3 = document.createElement("tr");
let trows3_1 = document.createElement("tr");
let trows3_2 = document.createElement("tr");
principalDiv2.appendChild(table3);
table3.appendChild(trows3);
table3.appendChild(trows3_1);
table3.appendChild(trows3_2);

let genSecondData = [
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
        ],
        games: [
            { juegos: "Cod"},
            { juegos: "fortnite"},
            { juegos: "lol"},
            { juegos: "blitch"},
            { juegos: "destiny"},
            { juegos: "assasins creed"},
            { juegos: "rocket league"},
             
        ]
    }
]
genSecondData.map((value) => {
    

    value.days.map((day) => {
        let tday = document.createElement("td");
        trows3.appendChild(tday);
        tday.textContent = day.dias;
        tday.style.border = "2px solid black";
    })

    value.perifericos.map((periferico) => {
        let tdperiferico = document.createElement("td");
        trows3_1.appendChild(tdperiferico);
        tdperiferico.textContent = periferico.Teclado;
        tdperiferico.style.border = "2px solid red";
    })

    value.games.map((juego) => {
        let tdgames = document.createElement("td");
        trows3_2.appendChild(tdgames);
        tdgames.textContent = juego.juegos;
        tdgames.style.border = "2px solid yellow";
    })

    value.days.forEach((index, day) => {
        console.log( index.dias + day  );
        let tdays = document.getElementsByClassName("table-wrapper")[2].childNodes[5].childNodes[0].childNodes;
        tdays.textContent = index.dias + " " + day; 
        /* console.log(tdays); */
})
});

