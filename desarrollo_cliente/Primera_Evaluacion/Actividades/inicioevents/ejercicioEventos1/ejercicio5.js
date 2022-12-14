/*
En el archivo index.html proporcionado, implementa un script para que cuando el usuario haga click sobre el primer párrafo, la letra cambie de color, el tamaño pase a ser de 20px y esté en negrita
*/

let p1 = document.getElementsByTagName("p")[0];
let cont =0;

p1.addEventListener('click', () =>{
    cont++;
    if (cont%2===1) {
        p1.style.color = "red";
        p1.style.fontSize = "30px";
        p1.style.color = "bold";
    } else {
        p1.style.color = "black";
        p1.style.color = "10px";
        p1.style.color = "lighter";
    }
})