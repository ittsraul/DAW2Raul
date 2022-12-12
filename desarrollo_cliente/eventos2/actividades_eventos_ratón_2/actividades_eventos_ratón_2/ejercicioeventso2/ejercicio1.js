
//Cogemos la etiqueta h1 que buscamos y le especificamos la poscion, ya que sino nos saca toda la lista, sin el contenido y solo queremos este.
let esmorzarets = document.getElementsByTagName("h1")[0];

//La variable auriculares coge el id de la tabla
let auriculares = document.getElementById("tablebot");
/* console.log(auriculares); */

//usaremos un contador para que si el numero de clicks es par, este se oculte, y si no es divisible entre 2 se muestre
let incremento = 0;

//Añadimos evento que cuando hagamos doble click ocurra.
//No te asustes, la función flecha actua como función normal.
esmorzarets.addEventListener("dblclick", () => {

    //incrementamos contador
    incremento++;

    //Si el contador % 2 es impar que no se muestre
    if (incremento % 2 === 1) {
        auriculares.style.visibility = "hidden";
        //Sino visible, aunque podriamos con opacity
    } else {
        auriculares.style.visibility = "visible";
    }
});
