let response = "";

document.getElementById("getProfiles2").addEventListener("click", function(){
    if(document.getElementById("profile") === null){
        let img = document.createElement("img");
        img.id = "profile";
        img.style.height = "300px";
        img.style.width = "400px";
        document.getElementsByClassName("table-wrapper")[3].appendChild(img);
    }
    getProfiles();
});



// Con AXIOS:
/*
async function getProfiles(){
    
    try {
      response = await axios.get('https://api.github.com/search/users?q=JavaScript');
      document.getElementById("profile").src = response.data.items[0].avatar_url;
    } catch (error) {
      console.error(error);
    }
  };
*/

// Con fetch:

  async function getProfiles() {
    const endpoint = "https://api.github.com/search/users?q=JavaScript";
    try {
        const response = await fetch(endpoint, { cache: 'no-cache' });
        if (response.ok) {
            const jsonResponse = await response.json();
            document.getElementById("profile").src = jsonResponse.items[0].avatar_url;
        }
    }
    catch (error) {
        console.log(error);
    }
}
