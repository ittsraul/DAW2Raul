
//take the paragraph
let Parrafo = document.getElementsByTagName("p")[0];

let string = "";
let contador = 0;
let speed = 5000 ;

let escribe = setInterval(() => {
    if (count > Parrafo.length) {
        clearInterval(escribe);
    }

    string += Parrafo.charAt(count);

}, speed);


