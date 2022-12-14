let response = "";

document.getElementById("getProfiles").addEventListener("click", function(){
    getProfiles();
});



// Con AXIOS:
/*
async function getProfiles(){
    
    try {
      response = await axios.get('https://api.github.com/search/users?q=JavaScript');
      console.log(response.data.items);
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
            console.log(jsonResponse.items);
        }
    }
    catch (error) {
        console.log(error);
    }
}
