/*
En el archivo postres.html proporcionado, implementa un script para introducir un carrusel con las imágenes de la carpeta src, de modo que el usuario 
pueda recurrer las imágenes de la carpeta pulsando sobre 'Anterior' y 'Següent'.
*/
let tablebot = document.getElementById('tablebot');
let imagenes = tablebot.getElementsByTagName('img');
//Usaremos un contador, utilizado tanto para incrementar como decrementar
//importante inicializarlo en 1
let contador = 0;
//Variable con ruta de las imagenes, para encontrarlas dentro de src.
let rutaImg = "../Actividades/src/";
let arrayContenidoImagenes = ["Flam amb nata.jpg","Flam d'ou.jpg","Pastis de carlota.jpg","Pastis de poma.jpg","Tiramisu.jpg"];
imagenes[0].src=rutaImg + arrayContenidoImagenes[0];

//Cojemos el contenido del id seguent.
let siguienteb = document.getElementById('seguent');
//Cojemos el contenido del id anterior.
let anterior = document.getElementById('anterior');

siguienteb.addEventListener("click",siguiente);

function siguiente(){
    contador++;
    //Si contador es menor que la longitud de las imagenes que incremente
    if (contador < imagenes.length ) {
        imagenes[0].src=rutaImg + arrayContenidoImagenes[contador];
    }
    else{
        imagenes[0].src=rutaImg + arrayContenidoImagenes[0];
    }
    /* console.log(rutaImg + arrayContenidoImagenes[contador]); */
}

anterior.addEventListener("click",back);
//Para ir hacia atrás 
function back(){
    contador--;
    if(contador >= imagenes[0])
        imagenes[4].src=rutaImg + arrayContenidoImagenes[contador];
    else{
        imagenes[0].src=rutaImg + arrayContenidoImagenes[4];
    }
}