/*
Implementa un script que permita filtrar en la tabla el valor introducido en el formulario. Al introducir un valor en el formulario y aplicar el evento submit, se realizará un filtrado 
para comprobar si el valor introducido coincide con alguno de la tabla. Posteriormete se borrará
el contenido de la tabla. Si el término de búsqueda coincide, se mostrará en una fila de nueva creación. Si no coincide, se indicará que no se han encontrado resultados.
*/


//If the search term is the same (igual) show in a row of the new creation. If don't is the same , return a error.
let getforms = document.getElementsByTagName("form")[0];
let tableFilms = document.getElementsByClassName("table-wrapper")[3].childNodes[3].childNodes[1].childNodes;
getforms.addEventListener("submit", (e) => {
    e.preventDefault();
    let nameFilm = document.getElementsByTagName("input")[0];
    let validacionFilm = /^[A-Za-z\s]+$/.test(nameFilm); ç
    if (validacionFilm === true) {
        for (let i = 0; i < tableFilms.length; i++) {
            console.log(tableFilms[i]);
        }
    } else {
        alert("Repeat it please");
    }
})