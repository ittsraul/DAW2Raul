let p2 = document.getElementById("parrafoDos");
let p3 = document.getElementById("parrafoTres");
let p4 = document.getElementById("parrafoCuatro");

p2.style.visibility = "hidden";
p3.style.visibility = "hidden";
p4.style.visibility = "hidden";


async function Api(){
    try{
        let response = await axios.get ("https://www.breakingbadapi.com/api/");
        response = response.data;
    }
    catch(error){
        console.error(error);
    }
    
}