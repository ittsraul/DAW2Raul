//Captura parrafos

let parrafo1 = document.getElementById("parrafoUno");
let Contenido1 = parrafo1.innerHTML;
let parrafo2 = document.getElementById("parrafoDos");
let parrafo3 = document.getElementById("parrafoTres");
let parrafo4 = document.getElementById("parrafoCuatro");

//No se desplieguen
parrafo2.style.display = "none";
parrafo3.style.display = "none";
parrafo4.style.display = "none";

//Captura <h1>
let PrimerTitulo = document.getElementsByTagName("h1")[0];

//Fichero que contiene la url 1
let url1 = "https://static1.abc.es/media/play/2021/06/21/rick-morty5-kYnB--620x349@abc.JPG";

let url2 = "https://i.blogs.es/77a359/rick-y-morty-trailer-temporada-5-1619898958/1366_2000.jpeg";

let url3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9znVj_Qawi0ETyDGqyj44VW8SOavR3Shww&usqp=CAU";

let url4 = "https://imagenes.elpais.com/resizer/G5ETyNCBY33u7wWqt39nes3Tp_Q=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Z6WN33YVLRCTPCATP7EAJ2ODLE.jpg";

//Evento
PrimerTitulo.addEventListener("mouseover", () => {
    PrimerTitulo.style.background = "url(" + url1 + ") no-repeat";
    PrimerTitulo.style.color = "green";
    parrafo1.innerHTML = parrafo2.innerHTML;
    PrimerTitulo.addEventListener("click", () => {
        PrimerTitulo.style.background = "url(" + url2 + ") no-repeat";
        PrimerTitulo.style.color = "yellow";
        parrafo1.innerHTML = parrafo3.innerHTML;
        PrimerTitulo.addEventListener("click", () => {
            PrimerTitulo.style.background = "url(" + url3 + ") no-repeat";
            PrimerTitulo.style.color = "red";
            parrafo1.innerHTML = parrafo4.innerHTML;
        });
    });
});
PrimerTitulo.addEventListener("mouseout", () => {
    PrimerTitulo.style.background = "url(" + url4 + ") no-repeat";
    PrimerTitulo.style.color = "white";
    parrafo1.innerHTML = Contenido1;
});
