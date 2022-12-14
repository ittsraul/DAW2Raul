CambiaVisibilidad();
Api();

//CambiaVisibilidad
function CambiaVisibilidad() {
  let p2 = document.getElementById("parrafoDos");
  let p3 = document.getElementById("parrafoTres");
  let p4 = document.getElementById("parrafoCuatro");

  p2.style.visibility = "hidden";
  p3.style.visibility = "hidden";
  p4.style.visibility = "hidden";
}

//Array Contenedor
let container = [];

//Contador
let contador = 0;

//Conexion a la api
async function Api() {
  try {
    let response = await axios.get("https://rickandmortyapi.com/api/character");
     console.log(response.data.results); 
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
     imagen.addEventListener("mouseover", ()=>{
      
     });
  } catch (error) {
    console.error(error);
  }
}
