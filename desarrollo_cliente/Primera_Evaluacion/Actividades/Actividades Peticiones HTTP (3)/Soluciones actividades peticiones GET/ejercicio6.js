let response = "";
let profile = 0;
document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
    profile = parseInt(document.getElementById("position").value);
    if(document.getElementById("profile") === null){
        let img = document.createElement("img");
        img.id = "profile";
        img.style.height = "300px";
        img.style.width = "400px";
        document.getElementsByClassName("table-wrapper")[5].appendChild(img);
        let paragraph = document.createElement("p");
        paragraph.id = "paragraph";
        document.getElementsByClassName("table-wrapper")[5].appendChild(paragraph);
    }
    getProfiles();
});



// Con AXIOS:
/*
async function getProfiles(){
    
    try {
      response = await axios.get('https://api.github.com/search/users?q=david');
      response = response.data.items;
      document.getElementById("profile").src = response[profile].avatar_url;
      document.getElementById("paragraph").innerHTML = "Login: " + response[profile].login + " / ID: " + response[profile].id;
    } catch (error) {
      console.error(error);
    }
  };
*/

// Con fetch:

  async function getProfiles() {
    const endpoint = "https://api.github.com/search/users?q=David";
    try {
        const response = await fetch(endpoint, { cache: 'no-cache' });
        if (response.ok) {
            const jsonResponse = await response.json();
            document.getElementById("profile").src = jsonResponse.items[profile].avatar_url;
            document.getElementById("paragraph").innerHTML = "Login: " + jsonResponse.items[profile].login + " / ID: " + jsonResponse.items[profile].id;
        }
    }
    catch (error) {
        console.log(error);
    }
}
