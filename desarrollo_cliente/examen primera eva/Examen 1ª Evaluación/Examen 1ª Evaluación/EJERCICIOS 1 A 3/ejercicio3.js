let navegacion = document.getElementsByTagName("ul")[0];

function oculto(){
    navegacion.style.visibility = "hidden";
}

 oculto(); 

let SegundoNivel = document.getElementsByTagName("h2")[0];
let primer = document.getElementsByTagName("a")[0];
let segundo = document.getElementsByTagName("a")[1]; 
let tercero = document.getElementsByTagName("a")[2];


//contador to count the clicks.
let contador = 0;

//event click for make visible the content and assign multiple url for the contents
SegundoNivel.addEventListener("click", ()=>{
    contador++;
    if (contador % 2 == 0) {
        navegacion.style.visibility = "visible";
        primer.innerHTML = "<a href='https://revistaorsai.com/el-experimento-polgar/'>El experimento</a>";
        segundo.innerHTML = "<a href='https://es.scribd.com/document/382476791/Criar-Un-Genio-Laszlo-Polgar'>Criar genios</a>";
        tercero.innerHTML = "<a href='https://es.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Polg%C3%A1r'>Biografía</a>";
    }else{
        navegacion.style.visibility = "hidden";
    }
})



