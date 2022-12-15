//CambiaVisibilidad();
Api();

let p1 = document.getElementById("parrafoUno")
let p1Content = p1.innerHTML;
let p2 = document.getElementById("parrafoDos");
let p3 = document.getElementById("parrafoTres");
let p4 = document.getElementById("parrafoCuatro");

p2.style.visibility = "hidden";
p3.style.visibility = "hidden";
p4.style.visibility = "hidden";

//Array Contenedor
let container = [];

//Conexion a la api
async function Api() {
  try {
    let response = await axios.get("https://rickandmortyapi.com/api/character");
    /* console.log(response.data.results); */
    container.push(response.data.results[0]);
    /* console.log(container); */
    /* console.log(container[0]); */
    /* console.log(container[1]); */
    container.push(response.data.results[1]);
    /* console.log(container[0]); */
    container.push(response.data.results[11]);
    console.log(container);
    container.push(response.data.results[12]);
    /* console.log(container[0].status); */
    let imagen = document.getElementsByTagName("h1")[0];
    imagen.style.background = "url(" + container[0].image + ") no-repeat";
    imagen.addEventListener("mouseover", () => {
      imagen.style.background = "url(" + container[1].image + ") no-repeat";
      imagen.style.color = "red";
      imagen.style.textAlign = "left";
      imagen.innerHTML = container[1].name;
      p1.innerHTML = p2.innerHTML;

      imagen.addEventListener("click", () => {
        imagen.style.background = "url(" + container[2].image + ") no-repeat";
        imagen.style.color = "red";
        imagen.style.textAlign = "left";
        imagen.innerHTML = container[2].name;
        p1.innerHTML = p3.innerHTML;
        imagen.addEventListener("click", () => {
          imagen.style.background = "url(" + container[3].image + ") no-repeat";
          imagen.style.color = "red";
          imagen.style.textAlign = "left";
          imagen.innerHTML = container[3].name;
          p1.innerHTML = p4.innerHTML;
        })
      });
    });
  imagen.addEventListener("mouseout", () => {
    imagen.style.background = "url(" + container[0].image + ") no-repeat";
    imagen.innerHTML = "";
    p1.innerHTML = p1Content.innerHTML;
  });
} catch (error) {
  console.error(error);
}
}
