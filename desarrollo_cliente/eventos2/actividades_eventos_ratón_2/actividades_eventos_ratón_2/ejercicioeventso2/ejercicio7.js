/*
En el archivo index.html proporcionado, implementa un script para que cuando el usuario haga click sobre el primer párrafo, la letra cambie de color, el tamaño pase a ser de 40px y esté en negrita.
*/


let p3 = document.getElementsByTagName("p")[1];
let cont =0;

p3.addEventListener('click', () =>{
    cont++;
    if (cont%2===1) {
        p3.style.color = "red";
        p3.style.fontSize = "40px";
        p3.style.color = "bold";
    } else {
        p3.style.color = "black";
        p3.style.color = "10px";
        p3.style.color = "lighter";
    }
})