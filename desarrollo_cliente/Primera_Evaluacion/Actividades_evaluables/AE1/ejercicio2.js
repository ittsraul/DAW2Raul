//Vemos que Ada esta dentro de una tabla, para poner de Familia y legado deberemos crearlos  en el td.
/* let Cells = document.querySelector("td")[0]; */
let Cells = document.getElementsByTagName("td")[0];

//Seleccionamos el titulo de Ada.
/* let Ada = document.querySelector("td").childNodes[1]; */
let Ada = document.getElementsByTagName('h1')[1];
Ada.style.backgroundImage = 'url("src/5.jpg")';
Ada.style.color = "red";
Ada.style.height = "200px";
Ada.style.width = "33%";
Ada.style.display = "inline-block";

let Familia = document.createElement("h1");
Familia.textContent = "Familia ";
Familia.style.backgroundImage = 'url("src/10.jpg")';
Familia.style.color = "red";
Familia.style.height = "200px";
Familia.style.width = "33%";
Familia.style.display = "inline-block";
Cells.insertAdjacentElement("beforeend", Familia);

let Legado = document.createElement("h1");
Legado.textContent = "Legado";
Legado.style.backgroundImage = 'url("src/1.jpg")';
Legado.style.color = "red";
Legado.style.height = "200px";
Legado.style.width = "33%";
Legado.style.display = "inline-block";
Cells.insertAdjacentElement("beforeend", Legado);

let Basura = document.getElementsByClassName("container")[0];
let newdiv = document.createElement("div");
Basura.appendChild(newdiv);

//Primer event per a que cuan cliques en una se carrega les atres i arrea 6 imagens de src: 
Ada.addEventListener("click", () => {
    ocultarTitulo();
    newdiv.style.display = "block";
    /* Ada.parentNode.removeChild(Legado);
    Ada.parentNode.removeChild(Familia);
    Ada.parentNode.removeChild(Ada); */
    newdiv.innerHTML = "";
    let Ada2 = document.createElement("img");
    let Ada3 = document.createElement("img");
    let Ada4 = document.createElement("img");
    let Ada5 = document.createElement("img");
    let Ada6 = document.createElement("img");
    Ada2.src = "src/ada/1.jpg";
    Ada2.style.height = "150px";
    Ada2.style.width = "20%";
    Ada2.style.display = "inline-block";
    Ada3.src = "src/ada/2.jpg";
    Ada3.style.height = "170px";
    Ada3.style.width = "20%";
    Ada3.style.display = "inline-block";
    Ada4.src = "src/ada/3.jpg";
    Ada4.style.height = "200px";
    Ada4.style.width = "20%";
    Ada4.style.display = "inline-block";
    Ada5.src = "src/ada/4.jpg";
    Ada5.style.height = "190px";
    Ada5.style.width = "20%";
    Ada5.style.display = "inline-block";
    Ada6.src = "src/ada/5.jpg";
    Ada6.style.height = "160px";
    Ada6.style.width = "20%";
    Ada6.style.display = "inline-block";
    newdiv.appendChild(Ada2);
    newdiv.appendChild(Ada3);
    newdiv.appendChild(Ada4);
    newdiv.appendChild(Ada5);
    newdiv.appendChild(Ada6);
});

/* let adaTotal = [this=Ada2, Ada3, Ada4, Ada5, Ada6]; */

let fam = document.getElementsByTagName("h1")[2].addEventListener("click", () => {
    ocultarTitulo();
    newdiv.style.display = "block";
    /* Familia.parentNode.removeChild(Legado);
    Familia.parentNode.removeChild(Ada);
    Familia.parentNode.removeChild(Familia); */
    newdiv.innerHTML = "";
    let Familia2 = document.createElement("img");
    let Familia3 = document.createElement("img");
    let Familia4 = document.createElement("img");
    let Familia5 = document.createElement("img");
    let Familia6 = document.createElement("img");
    Familia2.src = "src/familia/1.jpg";
    Familia2.style.height = "150px";
    Familia2.style.width = "20%";
    Familia2.style.display = "inline-block";
    Familia3.src = "src/familia/2.jpg";
    Familia3.style.height = "170px";
    Familia3.style.width = "20%";
    Familia3.style.display = "inline-block";
    Familia4.src = "src/familia/3.jpg";
    Familia4.style.height = "200px";
    Familia4.style.width = "20%";
    Familia4.style.display = "inline-block";
    Familia5.src = "src/familia/4.jpg";
    Familia5.style.height = "190px";
    Familia5.style.width = "20%";
    Familia5.style.display = "inline-block";
    Familia6.src = "src/familia/5.jpg";
    Familia6.style.height = "160px";
    Familia6.style.width = "20%";
    Familia6.style.display = "inline-block";
    newdiv.appendChild(Familia2);
    newdiv.appendChild(Familia3);
    newdiv.appendChild(Familia4);
    newdiv.appendChild(Familia5);
    newdiv.appendChild(Familia6);
});

document.getElementsByTagName("h1")[3].addEventListener("click", () => {
    ocultarTitulo();
    newdiv.style.display = "block";
    /* Legado.parentNode.removeChild(Familia);
    Legado.parentNode.removeChild(Ada);
    Legado.parentNode.removeChild(Legado); */
    newdiv.innerHTML = "";
    let Legado2 = document.createElement("img");
    let Legado3 = document.createElement("img");
    let Legado4 = document.createElement("img");
    let Legado5 = document.createElement("img");
    let Legado6 = document.createElement("img");
    Legado2.src = "src/legado/1.jpg";
    Legado2.style.height = "150px";
    Legado2.style.width = "20%";
    Legado2.style.display = "inline-block";
    Legado3.src = "src/legado/2.jpg";
    Legado3.style.height = "170px";
    Legado3.style.width = "20%";
    Legado3.style.display = "inline-block";
    Legado4.src = "src/legado/3.jpg";
    Legado4.style.height = "200px";
    Legado4.style.width = "20%";
    Legado4.style.display = "inline-block";
    Legado5.src = "src/legado/4.jpg";
    Legado5.style.height = "190px";
    Legado5.style.width = "20%";
    Legado5.style.display = "inline-block";
    Legado6.src = "src/legado/5.jpg";
    Legado6.style.height = "160px";
    Legado6.style.width = "20%";
    Legado6.style.display = "inline-block";
    newdiv.appendChild(Legado2);
    newdiv.appendChild(Legado3);
    newdiv.appendChild(Legado4);
    newdiv.appendChild(Legado5);
    newdiv.appendChild(Legado6);
});

// function ada(){
//     Ada2.addEventListener("");
// }

// function familia(){
//     fam.addEventListener("click", ()=>{
//         if (Familia2) {
            
//         }
//     });
// }

// function legado(){

// }

let jumbotron = document.getElementsByTagName("h1")[0];
/* document.getElementsByTagName("h1")[0]; */

jumbotron.addEventListener("dblclick", () => {
    newdiv.style.display = "none";
    Cells.style.display = "block";
})
function ocultarTitulo(){
    Cells.style.display = "none";
}