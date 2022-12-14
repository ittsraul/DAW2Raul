let response = "";

document.getElementById("getCats").addEventListener("click", function(){
    if(document.getElementById("gato1") === null){
        for(let i = 0; i < 2; i++){
            let img = document.createElement("img");
            img.id = "gato" + (i + 1).toString();
            img.style.height = "300px";
            img.style.width = "400px";
            document.getElementsByClassName("table-wrapper")[1].appendChild(img);
        }
        
    }
    getCats();
});



// Con AXIOS:
/*
async function getCats(){
    try {
      response = await axios.get('https://api.thecatapi.com/v1/images/search?size=full');
      document.getElementById("gato1").src = response.data[0].url;
      response = await axios.get('https://api.thecatapi.com/v1/images/search?size=full');
      document.getElementById("gato2").src = response.data[0].url;
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
        const response2 = await fetch(endpoint, { cache: 'no-cache' });
        if (response.ok) {
            const jsonResponse = await response.json();
            document.getElementById("gato1").src = jsonResponse[0].url;
        }
        if (response2.ok) {
            const jsonResponse2 = await response2.json();
            document.getElementById("gato2").src = jsonResponse2[0].url;
        }
    }
    catch (error) {
        console.log(error);
    }
}

