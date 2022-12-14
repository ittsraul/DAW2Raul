let response = "";

document.getElementById("getProfiles3").addEventListener("click", function(){
    if(document.getElementById("profile") === null){
        let img = document.createElement("img");
        img.id = "profile";
        img.style.height = "300px";
        img.style.width = "400px";
        document.getElementsByClassName("table-wrapper")[4].appendChild(img);
        let paragraph = document.createElement("p");
        paragraph.id = "paragraph";
        document.getElementsByClassName("table-wrapper")[4].appendChild(paragraph);
    }
    getProfiles();
});



// Con AXIOS:
/*
async function getProfiles(){
    
    try {
      response = await axios.get('https://api.github.com/search/users?q=david');
      document.getElementById("profile").src = response.data.items[0].avatar_url;
      document.getElementById("paragraph").innerHTML = "Login: " + response.data.items[0].login + " / ID: " + response.data.items[0].id;
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
            document.getElementById("profile").src = jsonResponse.items[0].avatar_url;
            document.getElementById("paragraph").innerHTML = "Login: " + jsonResponse.items[0].login + " / ID: " + jsonResponse.items[0].id;
        }
    }
    catch (error) {
        console.log(error);
    }
}
