
//Ejercicio 1
/* 
let PreguntaAnyos = prompt("¿Cuantos años tienes?");
let nickname = prompt("¿Cual es tu nickname?")

if (isNaN(PreguntaAnyos) ) {
    PreguntaAnyos = prompt("Repiteme la edad porfavor, ha habido un error");
}else{
    if (isNaN(nickname) ) {
        alert("El usuario "+ nickname +" tiene: " + PreguntaAnyos + " anyos");
    }else{
        PreguntaAnyos = prompt("Repiteme la edad porfavor, ha habido un error");
    }
} */
//Ejercicio 2
/* let PreguntaAnyos;
do {
    PreguntaAnyos = prompt("¿Cuantos años tienes?")
} while (isNaN(PreguntaAnyos ));
alert(" El usuario  tiene: " + PreguntaAnyos + " anyos");
let resultado = 2022 - preguntaAnyos;
 */


//Ejercicio3
/* let notafinal = prompt("Introduce tu nota obtenido");
if (isNaN(notafinal)) {
    notafinal = prompt("Tu valor no es un numero");
}else{
    if (notafinal > 0  && notafinal < 5) {
        alert ("Tu nota es insuficiente");
    }else if(notafinal >= 5 && notafinal < 6 ){
        alert ("Tu nota es un suficiente");
    }else if(notafinal >= 6 && notafinal < 7 ){
        alert ("Tu nota es un bien");
    }else if(notafinal >=7 && notafinal < 9){
        alert ("Tu nota es un notable");
    }else if(notafinal >=9 && notafinal < 11){
        alert ("Tu nota final es un excelente");
    }
} */


//Ejercicio4
/* let notafinal = Number(prompt("Introduce tu nota obtenido"));
switch (notafinal) {
    case 0:
        alert("Tu nota es insuficiente")
        break;
    case 1:
        alert("Tu nota es insuficiente")
        break;
    case 2:
        alert("Tu nota es insuficiente")
        break;
    case 3:
        alert("Tu nota es insuficiente")
        break;
    case 4:
        alert("Tu nota es insuficiente")
        break;
    case 5:
        alert("Tu nota es un bien")
        break;
    case 6:
        alert("Tu nota es un notable")
        break;
    case 7:
        alert("Tu nota final es un excelente")
        break;
    case 8:
        alert("Tu nota final es un excelente")
        break;
    case 9:
        alert("Tu nota final es un excelente")
        break;
    case 10:
        alert("Tu nota final es un excelente")
        break;
    default:
        alert("tu nota no es correcta o adecuada");
        break;
}  */

//Ejercicio 5
/* function ejercicio_5() {
    let ladoA;
    let ladoB;
    if (ladoA !== "" || ladoB !== "") {
        parseFloat(ladoA);
        parseFloat(ladoB);
        alert(CalculoFigura() + "el valor de un lado es: " + ladoA + "el valor de el otro es: " + ladoB);
    } else {
        alert("Tienes un error con los valores introducidos");
    }

    function CalculoFigura() {
        if ( ) {

        } else {

        }
    }
    console.log(); */

    //Ejercicio 6

    /*Implementa en un script la función o funciones que necesites para que mediante prompt() se le pida al usuario que introduzca un número y a continuación muestre por pantalla el resultado del factorial de ese número. Se deberá utilizar el bucle ‘for’. Nota: factorial del número 5 = 5*4*3*2*1. Factorial del número 7 = 7*6*5*4*3*2*1.
    */

    //numerofactorial 
  /*   let numerofactorial = Number(prompt("Introduce un numero"));
    function ejercicio6() {

        if (numerofactorial === 0 || numerofactorial === 1) {
            return 1;
        }
        for (var i = numerofactorial; i >= 1; i--) {
            numerofactorial *= i;
            //lo que es lo mismo que 
            /* numerofactorial = numerofactorial * i; 
        }
        return numerofactorial; */
        //}
        //ejercicio6();

        //Ejercicio 7
        /*Implementa en un script la función o funciones que necesites para que mediante prompt() se le pida al usuario introduzca una palabra o frase y le responda por pantalla si esa palabra es un palíndromo. No se podrá utilizar la función reverse(). Nota: Palíndromo: palabra o frase que se lee igual de atrás hacia adelante. Ejemplos: ‘Ana’. ‘Otto’. ‘Dábale arroz a la zorra el abad’.*/

        /* function ejercicio7() {
            let preguntapalabra = prompt("Introduce un una palabra");
            let caracteres = /[^A-Za-z0-9]/g;
            //to lower case para regresar el valor de llamda convertida en minuscula
            //replace para devolver la nueva cadena con algunas o todas las coincidencias de un patron con un remplazo.
            str = str.toLowerCase().replace(re, '');
            let len = str.length;
            for (let i = 0; i < len / 2; i++) {
                return false;
            }
            return true;
        }
        ejercicio7(); */
        //Ejercicio 8

        /* Implementa en un script una función que reciba como parámetros de entrada el mes del año, el número de días que tiene ese mes y el día de la semana en que empieza y devuelva por consola la distribución de los días en formato de calendario de ese mes. Para ello utilizarás arrays de dos dimensiones y console.table(…) para mostrar los resultados por consola. Ejemplo: si el usuario introduce enero, 31 y domingo, el script deberá devolver por pantalla lo siguiente */
        ejercicio8();
        function ejercicio8() {
            let mes = prompt("Introduce el mes del anyo");
            let numDias = prompt("Num de días de mes");
            let diaSemanaEmp = prompt("Dia de semana que empieza ");
            let arrayDiasMes = [new Array("Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"),new Array(7), new Array(7)];
            for (let i = 1; i < 7; i++) {
                arrayDiasMes.push[arrayDiasMes,i];
                for (let j = 1; j < 7; j++) {
                    arrayDiasMes.push[diaSemanaEmp,i];
                }
                for (let m = 1; m < 31; m++) {
                    arrayDiasMes.push[numDias,i];
                    
                }
                for (let p = 1; p < 12; p++) {
                    arrayDiasMes.push[mes,i];
                    
                }
            }
            console.table(arrayDiasMes); 
        }