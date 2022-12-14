
//Call the dinamic function
dinamicDiv();

//Api
breakingBad();

let tabla = document.getElementsByClassName("table-wrapper")[0];

//Create the funtion for make the dinamic content of  breaking bad
function dinamicDiv() {
    let p = document.createElement("p");
    tabla.appendChild(p);
    let imagen = document.createElement("img");
    tabla.appendChild(imagen);
    imagen.style.width = "300px";
    imagen.style.height = "400px";
    let antes = document.createElement("button");
    tabla.appendChild(antes);
    let despues = document.createElement("button");
    tabla.appendChild(despues);
    antes.innerHTML = "anterior";
    tabla.appendChild(antes)
    despues.innerHTML = "despues";
    tabla.appendChild(despues)
}


//Peticion a la api publica
async function breakingBad() {
    try {
        let response = await axios.get("https://www.breakingbadapi.com/api/characters");
        showElems(response.data);
        maxElems = response.data.length - 1;
        buttons();
    }
    catch (error) {
        console.error("error");
    };
}

function buttons(){

}


