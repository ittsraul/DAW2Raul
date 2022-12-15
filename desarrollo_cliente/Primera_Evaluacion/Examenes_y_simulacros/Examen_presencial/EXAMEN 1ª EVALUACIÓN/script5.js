let anyadirALaLista = document.getElementsByTagName("form")[0];

anyadirALaLista.addEventListener("submit", (e) => {
  e.preventDefault();
  let serie = document.getElementsByTagName("input")[0].value;
  let foto = document.getElementsByTagName("input")[1].value;
  window.localStorage.setItem(serie, foto);
});

console.log(foto.value);
let VerSeries = document.getElementsByTagName("button")[1];
VerSeries.addEventListener("click", (e) => {
  e.preventDefault();
  let Cuerpo = document.body;
  let form1 = document.getElementsByTagName("form")[0];
  form1.remove();
  let form2 = document.getElementsByTagName("form")[0];
  form2.remove();
  let p = document.createElement("p");
  Cuerpo.appendChild(p);
  let imagen = document.createElement("img");
  Cuerpo.appendChild(imagen);
  imagen.style.width = "400px";
  imagen.style.height = "500px";
  let antes = document.createElement("button");
  Cuerpo.appendChild(antes);
  let despues = document.createElement("button");
  Cuerpo.appendChild(despues);
  antes.innerHTML = "anterior";
  Cuerpo.appendChild(antes);
  despues.innerHTML = "despues";
  Cuerpo.appendChild(despues);
  let container = [];
  let keys = Object.keys(localStorage);
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    container.push(window.localStorage.getItem(keys[i]));
    /* p.innerHTML = container; */
  }
  
  let contador= 0;
  p.innerHTML = keys[contador];
  imagen.style.background = "url(" + container[contador] + ") no-repeat"; ;
  antes.addEventListener("click", () => {
    contador--;
    if (contador < 0) {
      contador = keys.length - 1;
    }
    p.innerHTML = keys[contador];
    imagen.style.background = "url(" + container[contador] + ") no-repeat"; 
  });

  
  despues.addEventListener("click", () => {
    contador++;
    if (contador > keys.length - 1) {
      contador = 0;
    }
    p.innerHTML = keys[contador];
    imagen.style.background = "url(" + container[contador] + ") no-repeat"; 
  }); 
});
