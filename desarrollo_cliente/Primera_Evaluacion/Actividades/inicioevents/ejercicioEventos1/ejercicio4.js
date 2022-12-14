/*
En el archivo index.html proporcionado, implementa un script para que cuando el usuario haga click sobre el logo que has introducido en el Ejercicio 1, se muestra los elementos incluidos bajo la clase "nutrition"


*/ 
let nutrision = documeent.querySelector(".nutrition");
let imagenDeFondo = document.getElementsByTagName("img")[0];
//Utilizaremos una variable contador 
let counterStrike = 0;

imagenDeFondo.addEventListener('click', () =>{
    counterStrike++;
    if (counterStrike%2===1) {
        nutrision.style.display = 'none';
    } else {
        nutrision.style.display = 'block';
    }
    /* do {
        nutrision.style.display = 'none';
    } while (counterStrike%2===1);
        nutrision.style.display = 'block'; */
})

