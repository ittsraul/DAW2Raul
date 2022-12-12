/*
En el archivo index.html proporcionado, implementa un script para que cuando el usuario pase el cursor del ratón sobre el título de primer nivel (h1), 
el contenido del título (Ca Vicent) se cambie por otro de tú elección (Ejemplo: El teu bar d'esmorzar).
*/ 

let titulo = document.getElementsByTagName("h1")[0];
let contador = 0;

titulo.addEventListener("mouseover", ()=>{
    titulo.textContent = "Chivito sin huevo es de terroristas";
});
/* console.log("titulo"); */
titulo.addEventListener("mouseleave", ()=>{
    titulo.textContent = "Esmorzarets";
});