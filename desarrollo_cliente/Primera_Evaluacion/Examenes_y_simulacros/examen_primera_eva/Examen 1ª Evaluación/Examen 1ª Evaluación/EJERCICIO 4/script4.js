let elem = 0;
let maxElems;
let buttonUsed = false
createElements();
api();


function createElements()
{
    let padre = document.getElementsByClassName("table-wrapper")[0];
    
    let p = document.createElement("p");
    padre.appendChild(p);

    let img = document.createElement("img")
    img.style.width = "300px";
    img.style.height = "400px";
    padre.appendChild(img);

    let anterior = document.createElement("button");
    anterior.textContent = "anterior";
    padre.appendChild(anterior)

    let siguiente = document.createElement("button");
    siguiente.textContent = "siguiente";
    padre.appendChild(siguiente)
}

async function api()
{
    try {
        let response = await axios.get('https://www.breakingbadapi.com/api/characters');
        showElems(response.data)
        maxElems = response.data.length - 1;
        buttons();
      } catch (error) {
        console.error(error);
      }
}

function showElems(response)
{
    let p = document.getElementsByTagName("p")[0];
    let img = document.getElementsByTagName("img")[0];
    p.textContent = "Nombre: " + response[elem]["name"] + ", Actor: " + response[elem]["portrayed"] + ", Rol: " + response[elem]["occupation"].join(", ");
    img.src = response[elem]["img"];
}

function buttons()
{
    if (!buttonUsed) {
        let anterior = document.getElementsByTagName("button")[0];
        let siguiente = document.getElementsByTagName("button")[1];
        anterior.addEventListener("click", function(){
            if (elem > 0) {
                elem--
            }else{
                elem = maxElems;
            }
            api();
        })

        siguiente.addEventListener("click", function(){
            if (elem < maxElems) {
                elem++
            }else{
                elem = 0;
            }
            api();
        });

        buttonUsed = true;
    }
}