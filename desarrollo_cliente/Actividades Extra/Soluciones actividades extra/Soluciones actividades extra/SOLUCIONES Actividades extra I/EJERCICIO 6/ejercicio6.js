
window.onload = function(){
    
    var fotografias = function(imagen, frase){
        this.imagen=imagen;
        this.frase=frase;
    }

    const fotoUno = new fotografias("https://img.static-af.com/images/meta/IDname/CITY-LON-1?aspect_ratio=2:1&max_width=1920","Londres");
    const fotoDos = new fotografias("https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900","Paris");
    const fotoTres = new fotografias("https://cdn.getyourguide.com/img/location/5ffeb52eae59a.jpeg/88.jpg","New York");

     var misImagenes = [fotoUno,fotoDos,fotoTres];

     let imagenActual = 0;
 

     document.getElementById("siguiente").addEventListener("click", function(){
         
         imagenActual++;
         
         if(imagenActual>misImagenes.length-1){
             imagenActual=0;
         }
         
         document.getElementById("imagen").src = misImagenes[imagenActual].imagen;
         document.getElementById("parrafo").innerHTML = misImagenes[imagenActual].frase;
     });
     
     //funcion para foto anterior
     document.getElementById("anterior").addEventListener("click", function (){
         
         if(imagenActual==0){

             imagenActual=misImagenes.length-1;

         } else {

             imagenActual--;
             
         }
         document.getElementById("imagen").src = misImagenes[imagenActual].imagen;
         document.getElementById("parrafo").innerHTML = misImagenes[imagenActual].frase;
     });
  

}

