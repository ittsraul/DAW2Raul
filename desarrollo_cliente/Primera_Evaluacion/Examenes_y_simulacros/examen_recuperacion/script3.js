/* let MenuNavigation = document.getElementsByTagName("nav")[0]; */
let li1 = document.getElementsByTagName("li")[0];
let li2 = document.getElementsByTagName("li")[1];
let li3 = document.getElementsByTagName("li")[2];
let li4 = document.getElementsByTagName("li")[3];

li1.style.display = "none";
li2.style.display = "none";
li3.style.display = "none";
li4.style.display = "none";

//Captura h2
let SegundoNivel = document.getElementsByTagName("h2")[0];

//Contador
let contador = 0;

SegundoNivel.addEventListener("click", () => {
    li1.style.display = "block";
    li1.innerHTML = "<a href='https://www.filmaffinity.com/es/film551351.html'>Filmacity</a>";
    SegundoNivel.addEventListener("click", () => {
        li2.style.display = "block";
        li2.innerHTML = "<a href='https://www.filmaffinity.com/es/film551351.html'>Imdb</a>";
        SegundoNivel.addEventListener("click", () => {
            li3.style.display = "block";
            li3.innerHTML = "<a href='https://www.filmaffinity.com/es/film551351.html'>Rotten Tomatoes</a>";
            SegundoNivel.addEventListener("click", () => {
                li4.style.display = "block";
                SegundoNivel.addEventListener("click", () => {
                    li4.innerHTML = "";
                    SegundoNivel.addEventListener("click", () => {
                        li3.innerHTML = "";
                        SegundoNivel.addEventListener("click", () => {
                            li2.innerHTML = "";
                            SegundoNivel.addEventListener("click", () => {
                                li1.innerHTML = "";
                            });
                        });

                    });
                })


            });

        });

    });
});