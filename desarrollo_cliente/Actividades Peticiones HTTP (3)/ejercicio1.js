/*
Para este primer ejercicio trabajaremos sobre la misma API pública que utiliza el ejemplo de las transparencias: The Cat API (https://api.thecatapi.com/v1/images/search?size=full). Implementa las instrucciones necesarias para que al pulsar sobre un componente Button, se renderice en la pantalla de tu dispositivo móvil la imagen que devuelve la petición GET. Para ello utilizarás un componente Image. Cada vez que se pulse sobre Button, se mostrará una nueva imagen. NOTA: Para instalar la librería Axios debes buscar su página en internet y copiar su enlace CDN y ubicarlo en este archivo HTML.
*/

//made with axios method
const url = "https://api.thecatapi.com/v1/images/search?size=full";

async function getCats() {
    try {
        //Axios.get for take the librery.
        let response = await axios.get(url);
        //Log for return the content
        /* console.log(response.data[0].url);  */
        const imgCat = response.data[0].url;
        let content = document.createElement("img");
        content.src = imgCat;
        let getDiv = document.getElementsByClassName("table-wrapper")[0];
        getDiv.appendChild(content);
    } catch (error) {
        //Return a fail 
        console.log(error.response);
    }
}
let keepButton = document.getElementById("getCat");

keepButton.addEventListener("click", () => {
    getCats();
});
console.log(keepButton);
