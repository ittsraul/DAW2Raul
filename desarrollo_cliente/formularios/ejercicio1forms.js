/* 
Implementa un script que permita validar el siguiente formulario: el nombre y los apellidos deben estar compuestos por letras
y el DNI debe de ser un número de ocho números. Al validar el DNI se calculará la letra del DNI.
Si se introduce un dato incorrecto, saltará una alerta indicando que vuelva a introducirlo.
Si todo es correcto, saltará una alerta indicando la letra del DNI.
 */

//Capturamos el formulario
let form = document.getElementsByTagName('form')[0];

//Cogemos por el id primero y utilizamos .value para recoger el valor.
form.addEventListener("submit", () => {
    let namem = document.getElementById("name").value;
    let FN = document.getElementById("first-surname").value;
    let SS = document.getElementById("second-surname").value;
    let DNI = document.getElementById("dni").value;

    //validacio de parametres
    let validateName = (/^\s+$/.test(namem));
    let validateFN = (/^\s+$/.test(FN));
    let validateSS = (/^\s+$/.test(SS));
    let validateDNI = (/^([0-9])*$/.test(DNI));

    //Array de lletres per a DNI
    let letraDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    //Per a poder operar en el ultim numero
    let CalcNumDNI = DNI.match(); 
    let CalcLetra = DNI.at(-1);
    
    //La calculadora será igual a la lletra del dni  en la divisio entre 23
    let Calculadcora = CalcDNI % 23;

    if () {
        
    }
    else {
        
    }

    //Si las validaciones son correctas , devuelve un ok, sino v5rg4.
    if (validateName & validateFN & validateSS) {
        alert ("esta bien");
    } else {
        alert ("repite esto, gracias");
    }

})