let menu = document.getElementsByTagName("nav")[0];

function ocultarMenuNav(){
    menu.style.display = "none";
}

ocultarMenuNav();

let MMenu = document.getElementsByTagName("h2")[0];

function showTitle(){
    MMenu.addEventListener("click", ()=>{
        menu.style.display = "block";
    });
}

//Llamada (queda guai)
showTitle();

//Contador para los clicks
let contador = 0

//Creamos los a
let primerA = document.getElementsByTagName("a")[0];
let segonA = document.getElementsByTagName("a")[1];
let tercerA = document.getElementsByTagName("a")[2];



MMenu.addEventListener("click", ()=>{
    //por cada click, incrementa el contador
    contador++;
    if (contador % 2 == 0) {
        menu.style.display = "block";
        primerA.innerHTML = "<a href='https://www.filmaffinity.com/es/film489970.html'>Filmaffinity</a>";
        segonA.innerHTML = "<a href='https://www.imdb.com/title/tt0903747/'>Imdb:</a>";
        tercerA.innerHTML = "<a href='https://es.wikipedia.org/wiki/Breaking_Bad'>Wikipedia:</a>";
    } else {
        menu.style.display = "none";
    }
});

