//Tenim que açó hi diverses maneres, pero 
//agafaem ada perque esta adalt de tots
let lovelace = document.getElementsByClassName("lovelace");
let categoria = document.getElementsByClassName("category");
let descripcionD = document.getElementsByClassName("description");
let parrafo = document.getElementsByTagName("p");
let SegNiv = document.getElementsByTagName("h2");
let TerNiv = document.getElementsByTagName("h3");
//For per a ocultar tot menys la primera, tal i com demana, ja que si gastem el removeChild() després no podrem treballar amb ells
for (let i = 1; i < lovelace.length; i++) {

    //Lovelace i la posicio que va incrementantse
    /* lovelace.removeChild();  */
    lovelace[i].style.display = "none";
}

/* for (let i = 0; i < lovelace.length; i++) {
    const element = lovelace[i];
    //console.log(element); 
    let BotonOut1 = element.lastChild.previousSibling.childNodes[1];
    let BotonNext1 = element.lastChild.previousSibling.childNodes[3];
    let BotonOut2 = element.lastChild.previousSibling.childNodes[1];
    let BotonNext2 = element.lastChild.previousSibling.childNodes[3];
    console.log(BotonNext1);
    console.log(BotonOut1); 
    console.log(BotonNext2);
    console.log(BotonOut2); 
} 

BotonOut1.addEventListener("click", ()=>{
    e.preventDefault();
    if (lovelace[i] !== i) {
        i--;
        BotonOut1.style.display = "block";
    } else {
        BotonOut1.style.display = "none";
    }
});
*/
//Fem contenedor fora, ja que si el fem dins del for es repetirá
let ContenedorBotones = [];
console.log(ContenedorBotones);
for (let i = 0; i < lovelace.length; i++) {
    //Tirem per la tag a degut a que els botons estan dins de a 
    ContenedorBotones = [
        (lovelace[i].getElementsByTagName("a")[0]),
        (lovelace[i].getElementsByTagName("a")[1]),
        (lovelace[i].getElementsByTagName("a")[2]),
        (lovelace[i].getElementsByTagName("a")[3]),
    ];
    // console.log(ContenedorBotones);


ContenedorBotones[0].addEventListener("click", (e) => {
        e.preventDefault();
        //Tractar de treballar amb el rebuix
        if (i == 0) {
            //Si es igual a cero volem ocultarlo, sumarli 2 i bloquejarlo
            lovelace[i].style.display = "none";
            lovelace[i + 2].style.display = "block";
        } else {
            //Sino el ocultem i li restem 1 , tot aço pa seguir en el bucle i despres del 3 vinga el 1
            lovelace[i].style.display = "none";
            lovelace[i -1].style.display = "block";
        }
    });


ContenedorBotones[1].addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(ContenedorBotones[1]);
    if (i == 2) {
        lovelace[i].style.display = "none";
        lovelace[i - 2].style.display = "block";
    } else {
        lovelace[i].style.display = "none";
        lovelace[i + 1].style.display = "block";
    }
});
ContenedorBotones[2].style.float = "left";
ContenedorBotones[2].style.backgroundColor = "grey";
ContenedorBotones[2].style.border = "2px solid black";
/* ContenedorBotones[2].addEventListener("click", (e) => {
         e.preventDefault();
         if(i == 0){

        }else{
   
        }
        
    });  */

ContenedorBotones[3].style.float = "right";
ContenedorBotones[3].style.backgroundColor = "grey";
ContenedorBotones[3].style.border = "2px solid black";
/*  ContenedorBotones[3].addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(Categoria);
    let j = 0;
    if (j === 3){
        console.log 
    }
     
 
}); */

/* for (let j = 1; j < lovelace.length; j++) {
        lovelace[j].parentNode.removechild(lovelace);
    } */
}

