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
    despues.innerHTML = "despues";
}

//Call the dinamic function
dinamicDiv();

//Array with content of the api info
let ArrayContainer = [];

//Peticion a la api publica
async function breakingBad(ArrayContainer) {
    const endpoint = "https://www.breakingbadapi.com/api/characters";
    try {
        const response = await fetch(endpoint, { cache: 'no-cache' });
        if (response.ok) {
            const jsonResponse = await response.json();
            ArrayContainer = jsonResponse;
            console.log(ArrayContainer);
        } 
        for (let i = 0; i < ArrayContainer.length; i++) {
            p.innerHTML= 
        }
    }
    catch (error) {
        console.log("Errorrrrrr");
    };
}


//funcion de la api
 breakingBad();


