let navegacion = document.getElementsByTagName("nav")[0];

//
navegacion.addEventListener("click", () => {
    let p1 = document.getElementById("parrafoUno");
    let p2 = document.getElementById("parrafoDos");
    let p3 = document.getElementById("parrafoTres");
    let p4 = document.getElementById("parrafoCuatro");
    let article = document.getElementsByTagName("article")[0];
    article.removeChild(p1);
    article.removeChild(p2);
    article.removeChild(p3);
    article.removeChild(p4);
});

//Recogemos lo que se le ha pasado por formulario, y lo ponemos en el localStorage(setItem)
let enviar = document.getElementsByTagName("form")[0];
enviar.addEventListener("submit", (e) => {
    e.preventDefault();
    let series = document.getElementsByTagName("input")[0].value;
    let foto = document.getElementsByTagName("input")[1].value;
    window.localStorage.setItem(series, foto);
});

let enviar2 = document.getElementsByTagName("form")[1];
enviar2.addEventListener("submit", (e) => {
    e.preventDefault();
    /* let series = document.getElementById("series");
    let item = window.localStorage.getItem(series.value);
    let foto = document.getElementById("foto");
    oto.src = item; */
    let container = [];
    let keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
        container.push(window.localStorage.getItem(keys[i]));
    }
     console.log(container);
    
});








