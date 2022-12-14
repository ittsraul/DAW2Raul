
borrado();
// dinamicDiv();

function borrado(){
    let VerSeries = document.getElementsByTagName("button")[1];
    VerSeries.addEventListener("click", ()=>{
        let Cuerpo = document.getElementsByTagName("article")[0];
        let form1 = document.getElementsByTagName("form")[0];
        let form2 = document.getElementsByTagName("form")[0];
        Cuerpo.removeChild(form1);
        Cuerpo.removeChild(form2);
        
    })
}

function dinamicDiv() {
    let p = document.createElement("p");
    tabla.appendChild(p);
    let imagen = document.createElement("img");
    tabla.appendChild(imagen);
    imagen.style.width = "400px";
    imagen.style.height = "500px";
    let antes = document.createElement("button");
    tabla.appendChild(antes);
    let despues = document.createElement("button");
    tabla.appendChild(despues);
    antes.innerHTML = "anterior";
    tabla.appendChild(antes)
    despues.innerHTML = "despues";
    tabla.appendChild(despues)
}



/* function CarruselStorage(antes, despues){
    let contador = 0;
    antes.addEventListener("click", ()=>{
        contador--;


    });
} */

/*
//Función asyncrona que conecta a la Api


//Función con lógica de botones.
function boton(antes, despues) {
  antes.addEventListener("click", () => {
    if (contador > 0) {
      contador--;
    } else {
      contador = Maxres;
    }
    Api();
  });

  despues.addEventListener("click", () => {
    if (contador < Maxres) {
      elem++;
    } else {
      elem = 0;
    }
  });
}

function MuestraElementos(contador){
    let p = document.getElementsByTagName("p")[0];
    let img = document.getElementsByTagName("img")[0];
    p.innerHTML = "Nombre:" + response[contador]["name"] + " Actor:" + response[contador]["portrayed"] + " Rol:" + response[contador]["ocupation"];
    img.src = response[contador]["img"]
}
 */