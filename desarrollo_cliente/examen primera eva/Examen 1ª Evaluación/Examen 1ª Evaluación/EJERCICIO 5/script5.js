
let mainContent = document.getElementsByTagName("main")[0];

let deleteC = document.getElementsByTagName("article")[1];

mainContent.removeChild(deleteC);

let monumento = document.getElementById("monumento");
let foto = document.getElementById("foto");
let EnvLista = document.getElementsByTagName("button")[0];
let MiraMonumentos = document.getElementsByTagName("button")[1];
let formulario = document.getElementById("formulario_monumentos");

window.localStorage.setItem(monumento.value,JSON.stringify(monumento));

MiraMonumentos.addEventListener("click", ()=>{
    mainContent.appendChild(deleteC);
})

