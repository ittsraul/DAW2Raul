/*
En el archivo index.html proporcionado, implementa un script para que cuando el usuario haga click sobre el primer párrafo, la letra cambie de color, el tamaño pase a ser de 50px y esté en negrita.



*/


let p4 = document.getElementsByTagName("p")[1];
let cont =0;

p4.addEventListener('click', () =>{
    cont++;
    if (cont%2===1) {
        p4.style.color = "blue";
        p4.style.fontSize = "50px";
        p4.style.color = "bold";
    } else {
        p4.style.color = "black";
        p4.style.color = "10px";
        p4.style.color = "lighter";
    }
})