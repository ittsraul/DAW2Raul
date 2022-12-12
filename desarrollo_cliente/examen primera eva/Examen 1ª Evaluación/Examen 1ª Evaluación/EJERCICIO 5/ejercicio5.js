borrarSegundoArticle();
formGuardar();
formVer();

function borrarPrimerArticle()
{
    let article = document.getElementsByTagName("article")[0];
    let form1 = article.getElementsByTagName("form")[0];
    let form2 = article.getElementsByTagName("form")[1];
    form1.remove();
    form2.remove();
}

function borrarSegundoArticle()
{
    let article = document.getElementsByTagName("article")[1];
    let h2 = article.getElementsByTagName("h2")[0];
    let div = article.getElementsByTagName("div")[0];
    h2.remove();
    div.remove();
}

function crearSegundoArticle()
{
    let article = document.getElementsByTagName("article")[1];
    let h2 = document.createElement("h2");
    let div = document.createElement("div");
    h2.setAttribute("id", "titulo");
    div.setAttribute("id", "contenedor_monumentos");

    let divcard = document.createElement("div");
    divcard.setAttribute("class", "card");
    div.appendChild(divcard);

    let img = document.createElement("img");
    img.setAttribute("id", "imagen");
    img.src = "https://dbdzm869oupei.cloudfront.net/img/quadres/preview/40446.png";
    divcard.appendChild(img);

    let form = document.createElement("form")
    form.setAttribute("id", "formul");
    divcard.appendChild(form);

    let input = document.createElement("input");
    input.type = "text";
    input.setAttribute("id", "monumento");
    input.placeholder = "Indica el nombre del monumento";
    form.appendChild(input);

    let button = document.createElement("button")
    button.type = "submit";
    button.textContent = "Ver monumento";
    form.appendChild(button)

    article.appendChild(h2);
    article.appendChild(div)
}

function formGuardar()
{
    let form = document.getElementById("formulario_monumentos");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        let monumento = document.getElementById("monumento");
        let foto = document.getElementById("foto");

        window.localStorage.setItem(monumento.value, foto.value);
    })
}

function formVer()
{
    let form = document.getElementById("ver_monumentos");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        borrarPrimerArticle();
        crearSegundoArticle();
        monumentoLogica();
    })
}

function monumentoLogica()
{
    let form = document.getElementById("formul");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        let monumento = document.getElementById("monumento")
        let item = window.localStorage.getItem(monumento.value);
        let img = document.getElementById("imagen")
        img.src = item;
    })
}