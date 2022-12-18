 let lista1 = document.getElementById("parrafoUno");
let lista2 = document.getElementById("parrafoDos");
let lista3 = document.getElementById("parrafoTres");
let lista4 = document.getElementById("parrafoCuatro");
let PrimerNivel1 = document.getElementsByTagName("h1")[0];
let lista5 = document.getElementsByTagName("li")[3];

RickyMorty();

lista5.addEventListener("click",()=>{
    lista1.remove();
    lista2.remove();
    lista3.remove();
    lista4.remove();
    PrimerNivel1.remove();
});

async function RickyMorty(){
    let response = await axios.get("https://rickandmortyapi.com/api/character");
     console.log(response.data.results);
    let container = [];
    container.push(response.data.results);
    // console.log(container); 
    let keys = [];
    let values = [];
    for (let i = 0; i < container.length; i++) {
        keys.push(container[i].name);
        /* console.log(keys[i]); */
        values.push(container[i].image, container[i].status, container[i].species);
        /* container.push(window.localStorage.setItem(keys[i], values[i])); */
    }
    
     
} 