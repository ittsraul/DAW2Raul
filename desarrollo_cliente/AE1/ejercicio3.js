/*
3. Implementar un script ejercicio3.js que permita validar el formulario contenido en el 
archivo contacto.html proporcionado. El formulario posee dos campos: nombre y 
email. Se deberá validar que la información introducida es correcta para ambos 
campos y, en caso afirmativo, se eliminará el formulario y se mostrará la inscripción 
“En breve le contactaremos”, contenida en un párrafo.



*/ 
//Capturem el formulari posicio 0
let form = document.getElementsByTagName('form')[0];

//Event listener del boto submit per a que cuan es rellene la informacio y aprete el submit se arreplegue la info.
form.addEventListener("submit", (evento)=>{

    //El prevent default es un event per a que no se perga la info.
     evento.preventDefault(); 

    //Capturem per id el name y .value per a arreplegar el valor
    let FormName = document.getElementsByTagName("input")[0].value;
    let FormEmail = document.getElementsByTagName("input")[1].value;

    //Despres de arreplegar la informacio necesitarem validarla, utilitzant el valor que li arriba de dalt.
    let validacionName = /^[A-Za-z\s]+$/.test(FormName);
    let validacionEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(FormEmail);
    
    //Si la validacio es correcta borra el contingut y mostra "En breve le contactaremos en una estiqueta <p>" 
    if (validacionEmail === true && validacionName === true) {
        console.log("GG Madafaka");
        // removeChild, també podiamos 
         form.parentNode.removeChild(form); 
         
        // Desprès de carregarmos el mensaje
        let creaHacheUno = document.createElement("p");
        creaHacheUno.style.backgroundColor = "red";
        creaHacheUno.style.color = "black";
        creaHacheUno.style.fontFamily = "sans-serif";
        creaHacheUno.style.fontSize = "20px";
        let four = document.getElementsByClassName("four")[0];
        creaHacheUno.textContent = "Informacion recibida, Le contactaremos en breve :-)";
       four.appendChild(creaHacheUno);
    } else {
        alert("Repeat it please");
    }

    //Despues ens carreguem el document i vorem que hi han varies maneres de crear la p i afegirla, com create element i el pasem o  incus en innerhtml tambe es pot utilitzarper a crear la etiqueta 
    

});