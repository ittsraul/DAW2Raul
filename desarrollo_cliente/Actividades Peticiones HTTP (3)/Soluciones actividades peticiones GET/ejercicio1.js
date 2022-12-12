let response = "";

document.getElementById("getCat").addEventListener("click", function(){
    if(document.getElementById("gato") === null){
        let img = document.createElement("img");
        img.id = "gato";
        img.style.height = "300px";
        img.style.width = "400px";
        document.getElementsByClassName("table-wrapper")[0].appendChild(img);
    }
    getCats();
});

/*

// Con AXIOS:

async function getCats(){
    try {
      response = await axios.get('https://api.thecatapi.com/v1/images/search?size=full');
      document.getElementById("gato").src = response.data[0].url;
    } catch (error) {
      console.error(error);
    }
  };
*/

// Con fetch:

  async function getCats() {
    const endpoint = "https://api.thecatapi.com/v1/images/search?size=full";
    try {
        const response = await fetch(endpoint, { cache: 'no-cache' });
        if (response.ok) {
            const jsonResponse = await response.json();
            document.getElementById("gato").src = jsonResponse[0].url;
        }
    }
    catch (error) {
        console.log(error);
    }
}
