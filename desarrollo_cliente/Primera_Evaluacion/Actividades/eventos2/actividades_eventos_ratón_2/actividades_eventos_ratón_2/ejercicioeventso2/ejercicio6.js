/*
En el archivo index.html proporcionado, implementa un script para que cuando el usuario haga click sobre el primer párrafo, la letra cambie de color, el tamaño pase a ser de 30px y esté en negrita.
*/


let p2 = document.getElementsByTagName("p")[1];
let cont =0;

p2.addEventListener('click', () =>{
    cont++;
    if (cont%2===1) {
        p2.style.color = "yellow";
        p2.style.fontSize = "30px";
        p2.style.color = "bold";
    } else {
        p2.style.color = "black";
        p2.style.color = "10px";
        p2.style.color = "lighter";
    }
})