/*

En el archivo index.html proporcionado, implementa un script para que cuando el usuario pase el cursor por encima de cualquiera de las imágenes de la tabla, ésta cambie su opacidad a la mitad. 
Si hace click sobre dicha imagen, aparecerá sobre la misma el nombre del bocadillo en un enlace con información sobre el mismo. Los nombres de los bocadillos son: Xivito, Blanc i negre, 
Brascada, Almussafes, Truita de patates, Calamars en allioli.

*/

//Cogemos la etiqueta h1 que buscamos y le especificamos la poscion, ya que sino nos saca toda la lista, sin el contenido y solo queremos este.
let imagenes = document.getElementsByTagName("table")[0];

//Hemos pasado la tabla a un array y vamos a recorrerlo
for (let i = 0; i < imagenes.childNodes.length; i++) {
    const element = imagenes.childNodes[i];
console.log(element);   
}