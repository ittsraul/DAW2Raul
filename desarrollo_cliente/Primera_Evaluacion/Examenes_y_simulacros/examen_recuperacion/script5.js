 let boton1 = document.getElementsByTagName("form")[0];
let article = document.getElementsByTagName("article")[0];

boton1.addEventListener("click", ()=>{
    let p = document.createElement("p");
    let imgen = document.createElement("img");
    imgen.style.width = "400px";
    imgen.style.height = "500px";
    article.appendChild(p);
    article.appendChild(imgen);
    let search = document.getElementsByTagName("input")[0].value;
    window.localStorage.getItem(search);
}); 